package com.bnta.banking_api.controllers;

import com.bnta.banking_api.models.Category;
import com.bnta.banking_api.models.Subscription;
import com.bnta.banking_api.repositories.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("subscriptions")
public class SubscriptionController {

    @Autowired
    SubscriptionRepository subscriptionRepository;

    @GetMapping
    public ResponseEntity<List<Subscription>> getSubscriptions() {
        return new ResponseEntity<>(subscriptionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/{id}")//localhost:8080/authors/1
    public ResponseEntity <Optional<Subscription>> getSubscription(@PathVariable Long id) {
        return new ResponseEntity<>(subscriptionRepository.findById(id),HttpStatus.OK);
    }

    @GetMapping("/category={category}") //localhost:8080/subscriptions?category=Entertainment
    public ResponseEntity<List<Subscription>> getAllSubscriptionsOfCategory(
            @PathVariable String category){
        String c = category.toUpperCase();
        return new ResponseEntity<>(subscriptionRepository.findByCategory(Category.valueOf(c)), HttpStatus.OK);
    }

    //findByAmountGreaterThan
    @GetMapping("/price={price}") //localhost:8080/subscriptions/price=50
    public ResponseEntity<List<Subscription>> getAllSubscriptionsOfPriceGreaterThan(
            @PathVariable double price){
        return new ResponseEntity<>(subscriptionRepository.findByPriceGreaterThan(price), HttpStatus.OK);
    }
    //findByIsActive
    @GetMapping("/isActive={isActive}") //localhost:8080/subscriptions/isActive=true
    public ResponseEntity<List<Subscription>> getAllActiveSubscriptions(
            @PathVariable boolean isActive) {
        return new ResponseEntity<>(subscriptionRepository.findByIsActiveEquals(isActive), HttpStatus.OK);
    }

    //findByDateOfPaymentEquals
    @GetMapping("/dateofpayment") //localhost:8080/subscriptions/dateofpayment?dateofpayment=2017-11-23
    public ResponseEntity<List<Subscription>> getAllSubscriptionsOfDateOfPayment(
            @RequestParam (name = "dateofpayment") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateOfPayment){
        return new ResponseEntity<>(subscriptionRepository.findByDateOfPaymentEquals(dateOfPayment), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Subscription> createSubscription(@RequestBody Subscription newSubscription) {
        subscriptionRepository.save(newSubscription);
        return new ResponseEntity<>(newSubscription, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Long> deleteSubscription (@PathVariable("id") Long id) {
        subscriptionRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
