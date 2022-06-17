package com.bnta.banking_api.repositories;

import com.bnta.banking_api.models.Category;
import com.bnta.banking_api.models.Employment;
import com.bnta.banking_api.models.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;

import java.time.LocalDate;
import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    List<Payment> findPaymentsByNameIsContainingIgnoreCase(String name);

    List<Payment> findPaymentsByDateGreaterThanAndDateLessThan(LocalDate from, LocalDate to);



    List<Payment> findPaymentsByCategory(Category category);

    List<Payment> findPaymentsByAmountGreaterThan(double amount);

    List<Payment> findPaymentsByNameEqualsIgnoreCase(String name);

    List<Payment> findPaymentsByDateEquals(LocalDate date);

    @Query("SELECT p FROM Payment p JOIN p.account a WHERE a.id =:id")
    List<Payment> findPaymentsByAccountId(Long id);

    @Query("SELECT p FROM Payment p JOIN p.account acc Join acc.accountHolders ah WHERE upper(ah.name) LIKE upper(concat('%', :name, '%'))")
    List<Payment> findPaymentsByAccountHolderName(String name);













}
