package com.bnta.banking_api.controllers;


import com.bnta.banking_api.models.Account;
import com.bnta.banking_api.models.AccountHolder;
import com.bnta.banking_api.models.Employment;
import com.bnta.banking_api.repositories.AccountHolderRepository;
import com.bnta.banking_api.repositories.PaymentRepository;
import com.bnta.banking_api.repositories.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.Name;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("account_holders")
public class AccountHolderController {

    @Autowired
    private AccountHolderRepository accountHolderRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private SubscriptionRepository subscriptionRepository;


// INDEX

    @GetMapping
    public ResponseEntity<List<AccountHolder>> getAccountHolder (){
        return new ResponseEntity(accountHolderRepository.findAll(), HttpStatus.OK);
    }

// POST/CREATE

    @PostMapping
    public ResponseEntity<AccountHolder> createAccountHolder(@RequestBody AccountHolder newAccountHolder) {
        accountHolderRepository.save(newAccountHolder);
        return new ResponseEntity<>(newAccountHolder, HttpStatus.CREATED);
    }

// SHOW
    @GetMapping(value = "/id={id}")        // localhost:8080/account_holder/1
    public ResponseEntity<Optional<AccountHolder>> getAccountHolder(@PathVariable Long id){
        var accountHolder = accountHolderRepository.findById(id);
        return new ResponseEntity<>(accountHolder, accountHolder.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }

    @GetMapping(value = "/name={name}")        // localhost:8080/account_holder/name
    public ResponseEntity<List<AccountHolder>> getAccountHolderByName(@PathVariable String name) {
        List<AccountHolder> accountHolderByName = accountHolderRepository.findByNameIsContainingIgnoreCase(name);
        return new ResponseEntity<>(accountHolderByName, HttpStatus.OK);
    }
    @GetMapping(value = "/dob")        // localhost:8080/account_holder/dob?dob=1997-07-25
    public ResponseEntity<List<AccountHolder>> getAccountHolderByDob(@RequestParam(name = "dob")@DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dob){
        List<AccountHolder> accountHolderByDob = accountHolderRepository.findAccountHolderByDob(dob);
        return new ResponseEntity<>(accountHolderByDob, HttpStatus.OK);
    }

    @GetMapping(value = "/address={address}")        // localhost:8080/account_holder/address
        public ResponseEntity<List<AccountHolder>> getAccountHolderByAddress(@PathVariable String address){
            List<AccountHolder> accountHolderByAddress = accountHolderRepository.findByAddressIsContainingIgnoreCase(address);
            return new ResponseEntity<>(accountHolderByAddress, HttpStatus.OK);
    }

    @GetMapping(value = "/employment={employmentStatus}")        // localhost:8080/account_holder/employmentStatus
        public ResponseEntity<List<AccountHolder>> getAccountHolderEmploymentStatus(@PathVariable String employmentStatus){

            List<AccountHolder> found = accountHolderRepository
                    .findAccountHolderByEmploymentStatus(Employment.valueOf(employmentStatus.toUpperCase()));
            return new ResponseEntity<>(found, HttpStatus.OK);
    }



// DELETE
// 1 account holder has several accounts (basic, joint)
// basic & joint accounts have several payments & subscriptions = they are linked together
// many to many relationship between account holders & accounts
    // cannot delete entire account holder
    // must delete one by one - payment first, then subscription
// By selecting an account holder to remove (Postman)
// payments & subscriptions from that account holder are deleted

    @DeleteMapping(value = "/id={id}")
    public ResponseEntity<Long> removeAccount(@PathVariable Long id) {
        Optional<AccountHolder> found = accountHolderRepository.findById(id);
        if (found.isPresent()) {
            AccountHolder accountHolder = found.get();
// below: we aim to delete payments associated to chosen(id) account
            accountHolder.getAccounts().stream()
                    .forEach(acc -> acc.getPayments()
                            .forEach(payment -> paymentRepository.deleteById(payment.getId())));
// below: we aim to delete subscriptions associated to chosen(id) account from Subscription repository
            accountHolder.getAccounts().stream()
                    .forEach(acc -> acc.getSubscriptions()
                            .forEach(subscription -> subscriptionRepository.deleteById(subscription.getId())));
// below: we no longer need the chosen account now payment and subscription are removed
    // .removeAccountHolder = deletes chosen account holder
            accountHolder.getAccounts().stream().forEach(account -> account.removeAccountHolder(accountHolder));
// below: we need a new ArrayList to "update" our list of account holders
            accountHolder.setAccounts(new ArrayList<>());
// below: we can finally delete the account holder based on id from account Holder repository
    // account holder no longer has a relationship to all the other tables
            accountHolderRepository.deleteById(id);
            return new ResponseEntity<>(id, HttpStatus.OK);
        }
        return new ResponseEntity<>(id, HttpStatus.NOT_FOUND);
    }


//        var accountholder = accountHolderRepository.findById(id);
//        if (accountholder.isEmpty()) {
//            return new ResponseEntity<>(id, HttpStatus.NOT_FOUND);
//        } else {
//            accountHolderRepository.delete(accountholder.get());
//            return new ResponseEntity<>(id, HttpStatus.OK);
//        }
//    }

//    List<Account> list1 = accountHolder.getAccount();


}
