package com.bnta.banking_api.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "subscriptions")
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private LocalDate dateOfPayment;

    @Column
    @Enumerated(EnumType.STRING)
    private Category category;

    @Column
    private double price;

    @Column
    private Boolean isActive;

    @ManyToOne
    @JoinColumn(name = "account_id")
    @JsonIgnoreProperties(value = "subscriptions")
    private Account account;
//    @JsonIgnoreProperties({""})


// Empty/Default Constructor

    protected Subscription() {}

// Constructors

    public Subscription(String name, LocalDate dateOfPayment, Category category, double price, Boolean isActive, Account account) {
        this.name = name;
        this.dateOfPayment = dateOfPayment;
        this.category = category;
        this.price = price;
        this.isActive = isActive;
        this.account = account;
    }


// Getters and Setters


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDate_of_payment() {
        return dateOfPayment;
    }

    public void setDate_of_payment(LocalDate dateOfPayment) {
        this.dateOfPayment = dateOfPayment;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Boolean getIs_active() {
        return isActive;
    }

    public void setIs_active(Boolean isActive) {
        this.isActive = isActive;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

}
