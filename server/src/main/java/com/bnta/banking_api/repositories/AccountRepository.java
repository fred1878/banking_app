package com.bnta.banking_api.repositories;

import com.bnta.banking_api.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long> {

    List<Account> findJointAccountByRelationshipIsContainingIgnoreCase(String relationship);
    List<Account> findBasicAccountByPinNumberAndBalance(String pinNumber, double balance);
    List<Account> findAccountByBalanceGreaterThan(double balance);


}
