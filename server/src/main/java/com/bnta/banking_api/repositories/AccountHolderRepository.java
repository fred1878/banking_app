package com.bnta.banking_api.repositories;

import com.bnta.banking_api.models.Employment;
import org.apache.tomcat.jni.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import com.bnta.banking_api.models.AccountHolder;

import java.time.LocalDate;
import java.util.List;


public interface AccountHolderRepository extends JpaRepository<AccountHolder, Long> {


//    List<AccountHolder> findById (Long id);

//    List<AccountHolder> findAccountHolderByNameIsContainingIgnoreCase(String name);

    List<AccountHolder> findByNameIsContainingIgnoreCase(String name);


    List<AccountHolder> findAccountHolderByDob(LocalDate dob);

//    List<AccountHolder> findAccountHolderByAddress(String address);

    List<AccountHolder> findByAddressIsContainingIgnoreCase(String address);


    List<AccountHolder> findAccountHolderByEmploymentStatus(Employment employmentStatus);




//    List<Account> list1 = accountHolder.getAccount();
}
