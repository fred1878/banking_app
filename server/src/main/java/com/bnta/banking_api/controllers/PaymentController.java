package com.bnta.banking_api.controllers;


import com.bnta.banking_api.models.Category;
import com.bnta.banking_api.models.Payment;
import com.bnta.banking_api.repositories.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.time.LocalDate;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@RestController
@RequestMapping("payments")
public class PaymentController {

    @Resource
    private PaymentRepository paymentRepository;


    // INDEX : display all the payments
    @GetMapping
    public ResponseEntity<List<Payment>> getAllPayments(
            @RequestParam(required = false, name = "name") String name
    ){
        if (name != null){
            return new ResponseEntity<>(paymentRepository.findPaymentsByNameIsContainingIgnoreCase(name), HttpStatus.FOUND);
        }

        return new ResponseEntity<>(paymentRepository.findAll(), HttpStatus.OK);
    }


    // SHOW : search the payment by id
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Payment>> getPaymentById(@PathVariable Long id){
        var payment = paymentRepository.findById(id);
        return new ResponseEntity<>(payment, payment.isEmpty()? HttpStatus.NOT_FOUND : HttpStatus.FOUND);
    }


     // SHOW : search payments between time "from" and time "to"
    @GetMapping("/search") // localhost:8080/payments/search?from=2022-01-01&to=2022-03-01
    public ResponseEntity<List<Payment>> getPaymentsFromDateTimeToDateTime(
            @RequestParam(name = "from") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(name = "to") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to
    ){

        List<Payment> found = paymentRepository.findPaymentsByDateGreaterThanAndDateLessThan(from, to);

        return new ResponseEntity<>(found, HttpStatus.FOUND);
    }


    // SHOW : search payments by category
    @GetMapping("/search/category={category}")
    public ResponseEntity<List<Payment>> searchPaymentByCategory(
            @PathVariable String category
    ){
        String c = category.toUpperCase();
        List<Payment> found = paymentRepository.findPaymentsByCategory(Category.valueOf(c));
        return new ResponseEntity<>(found, HttpStatus.FOUND);
    }


    // SHOW : search payments that are greater than
    @GetMapping("/search/greaterthan={amount}")
    public ResponseEntity<List<Payment>> searchPaymentGreaterThan(@PathVariable double amount){

        var found = paymentRepository.findPaymentsByAmountGreaterThan(amount);
        return new ResponseEntity<>(found, found.isEmpty() ? HttpStatus.NOT_FOUND: HttpStatus.FOUND);
    }


    // SHOW : search payments by account id
    @GetMapping("/search/account={id}")
    public ResponseEntity<List<Payment>> searchPaymentByAccountId(@PathVariable Long id){
        var found = paymentRepository.findPaymentsByAccountId(id);
        return new ResponseEntity<>(found, found.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.FOUND);
    }

    // SHOW : search payments by account holder name
    @GetMapping("/search/account_holder={name}")
    public ResponseEntity<List<Payment>> searchPaymentByAccountHolderName(@PathVariable String name){
        var found = paymentRepository.findPaymentsByAccountHolderName(name);
        return new ResponseEntity<>(found, HttpStatus.FOUND);

    }

    // Create
    @PostMapping
    public ResponseEntity<Payment> createNewPayment(@RequestBody Payment payment){
        return new ResponseEntity<>(paymentRepository.save(payment), HttpStatus.CREATED);
    }


    // UPDATE : update the payment category by id, because usually payment's category is allowed t change
    @PutMapping("/update/{id}") // pass raw - text, because it takes in string
    public ResponseEntity<Optional<Payment>> updatePaymentCategoryById(@PathVariable Long id, @RequestBody String category){
        Optional<Payment> found = paymentRepository.findById(id);
        if(found.isPresent()){
            Payment payment = found.get();
            payment.setCategory(Category.valueOf(category.toUpperCase()));
            paymentRepository.save(payment); // important
        }
        return new ResponseEntity<>(found, found.isPresent() ? HttpStatus.NOT_FOUND : HttpStatus.ACCEPTED);
    }


    // DELETE : delete payment by id
    @DeleteMapping("/delete-{id}")
    public void deletePaymentById(@PathVariable Long id){
        Optional<Payment> payment = paymentRepository.findById(id);
        if(payment.isPresent()) {
            Payment found = payment.get();
            found.getAccount().removePayment(found);
            paymentRepository.deleteById(id);
        }
    }

    // DELETE : delete payment by name or by special date
    @DeleteMapping("/delete")
    public void deletePaymentByName(
            @RequestParam(required = false, name = "name") String name,
            @RequestParam(required = false, name = "date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
    ){
        if (name!= null) {
            List<Payment> payments1 = paymentRepository.findPaymentsByNameEqualsIgnoreCase(name);
            paymentRepository.deleteAll(payments1);
        }

        // if date is not empty
        if (date != null){
            List<Payment> payments2 = paymentRepository.findPaymentsByDateEquals(date);
            paymentRepository.deleteAll(payments2);
        }

    }





}
