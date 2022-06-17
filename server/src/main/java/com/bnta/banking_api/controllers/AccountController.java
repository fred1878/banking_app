package com.bnta.banking_api.controllers;

import com.bnta.banking_api.models.Account;
import com.bnta.banking_api.repositories.AccountRepository;
import com.bnta.banking_api.repositories.PaymentRepository;
import com.bnta.banking_api.repositories.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("accounts")
public class AccountController {

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    PaymentRepository paymentRepository;

    @Autowired
    SubscriptionRepository subscriptionRepository;



//    INDEX
    @GetMapping(value = "/{id}")
    //localhost:8080/accounts
    public ResponseEntity<Optional<Account>> getAccount(@PathVariable Long id) {
        var account = accountRepository.findById(id);
        return new ResponseEntity<>(account, account.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }


//    SHOW
//    @GetMapping//localhost:8080/accounts?pinnumber=1649&balance=12469
//    public ResponseEntity<List<Account>> getAccountsAndFilter(
//            @RequestParam(required = false, name = "pinnumber") String pinNumber,
//            @RequestParam(required = false, name = "balance") double balance) {
//        if (pinNumber != null && balance != 0) {
//            return new ResponseEntity<>(accountRepository
//                    .findAccountByPinNumberAndBalance(pinNumber, balance), HttpStatus.OK);
//        }
//        return new ResponseEntity<>(accountRepository.findAll(), HttpStatus.OK);
//    }

//    SHOW
    @GetMapping
    //localhost:8080/accounts?pinnumber=1649&balance=12469
    //localhost:8080/accounts?relationship=partner
    //localhost:8080/accounts?relationship=housemate
    //localhost:8080/accounts?relationship=parent
    public ResponseEntity<List<Account>>getAccountAndFilter(
            @RequestParam(required = false, name = "relationship") String relationship,
            @RequestParam(required = false, name = "balance", defaultValue = "0") double balance,
            @RequestParam(required = false, name = "pinnumber") String pinNumber){
        if (relationship != null){
            return new ResponseEntity<>(accountRepository
            .findJointAccountByRelationshipIsContainingIgnoreCase(relationship), HttpStatus.OK);
        }
        if (pinNumber != null && balance != 0){
            return new ResponseEntity<>(accountRepository
            .findBasicAccountByPinNumberAndBalance(pinNumber, balance), HttpStatus.OK);
        }
        return new ResponseEntity<>(accountRepository.findAll(), HttpStatus.OK);
    }

//    SHOW
    @GetMapping("/balance")
    //localhost:8080/accounts/balance?greaterthan=300000
    public ResponseEntity<List<Account>> getAccountByBalanceGreaterThan(
            @RequestParam(required = false, name = "greaterthan", defaultValue = "0") double balance){
        return new ResponseEntity<>(accountRepository.findAccountByBalanceGreaterThan(balance), HttpStatus.OK);
    }



//    CREATE/POST
    @PostMapping
    //localhost:8080/accounts
    //localhost:8080/accounts
    public ResponseEntity<Account> createAccount(@RequestBody Account newAccount) {
        accountRepository.save(newAccount);
        return new ResponseEntity<>(newAccount, HttpStatus.CREATED);
    }


//    DELETE
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Long> removeAccountById(@PathVariable("id") Long id) {
        Optional<Account> account = accountRepository.findById(id);
        if (account.isPresent()) {
            Account acc = account.get();
            acc.getPayments().stream()
                    .forEach(payment -> paymentRepository.deleteById(payment.getId()));
            acc.getSubscriptions().stream()
                    .forEach(subscription -> subscriptionRepository.deleteById(subscription.getId()));
            acc.setPayments(new ArrayList<>());
            acc.setSubscriptions(new ArrayList<>());
            accountRepository.deleteById(id);
        }
        return new ResponseEntity<>(id, HttpStatus.OK);
    }


//    UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Account> updateAccount(
            @PathVariable(value = "id") Long id,
            @RequestBody Account accountNumberUpdate) {
        var account = accountRepository.findById(id);
        if (account.isPresent()){
            Account acc = account.get();
            acc.setAccountNumber(accountNumberUpdate.getAccountNumber());
            acc.setPinNumber(accountNumberUpdate.getPinNumber());
            acc.setBalance(accountNumberUpdate.getBalance());
            accountRepository.save(acc);
            return new ResponseEntity<>(acc, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }




}
