package com.bnta.banking_api.repositories;

import com.bnta.banking_api.models.Category;
import com.bnta.banking_api.models.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

import java.time.LocalDate;
import java.util.List;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {

    List<Subscription> findByCategory(Category category);
    List<Subscription> findByPriceGreaterThan(double price);

    List<Subscription> findByIsActiveEquals(Boolean isActive);

    List<Subscription> findByDateOfPaymentEquals(LocalDate dateOfPayment);









}
