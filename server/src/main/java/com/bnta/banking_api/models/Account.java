package com.bnta.banking_api.models;

import com.bnta.banking_api.BankingApiApplication;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import org.springframework.boot.SpringApplication;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

//@JsonDeserialize(as=BasicAccount.class)
@Entity
@Table(name = "accounts")
//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "is_debit")
    private boolean isDebit;

    @Column(name = "balance")
    private double balance;

    @Column(name = "account_number", length = 8)
    private String accountNumber;

    @OneToMany(mappedBy = "account")
    @JsonIgnoreProperties(value = "account")
    private List<Payment> payments;

    @Column(name = "expiration_date", length = 4)
    private String expirationDate;

    @Column(name = "cvc", length = 3)
    private String cvc;

    @Column(name = "pin_number", length = 4)
    private String pinNumber;


    @OneToMany(mappedBy = "account")
    @JsonIgnoreProperties(value = "account")
    private List<Subscription> subscriptions;


    // new added

    @Column
    @Enumerated(EnumType.STRING)
    private AccountType accountType;

    @Column
    private String relationship;

    @ManyToMany//(mappedBy = "accounts")
    @JoinTable(
            name = "Account_accountHolder",
            joinColumns = {@JoinColumn(name = "account_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "account_holder_id", nullable = false)}
    )
    @JsonIgnoreProperties(value = "account")
    private List<AccountHolder> accountHolders;


    public Account(boolean isDebit, double balance, String pinNumber, AccountType accountType, String relationship, List<AccountHolder> accountHolders) {
        this.isDebit = isDebit;
        this.balance = balance;
        this.accountNumber = generateAccountNumber();
        this.payments = new ArrayList<>();
        this.expirationDate = generateExpirationDate();
        this.cvc = generateCVC();
        this.pinNumber = pinNumber;

        // new
        this.accountType = accountType;
        this.relationship = relationship;
        this.accountHolders = accountHolders;
    }

    protected Account(){}


    public String generateAccountNumber(){
        Random rnd = new Random();
        int number = rnd.nextInt(99999999);
        return String.format("%08d", number);
    }

    public String generateCVC(){
        Random rnd = new Random();
        int number = rnd.nextInt(999);
        return String.format("%03d", number);
    }

    public String generateExpirationDate(){
        Random rnd = new Random();
        int month = rnd.nextInt(13);
        String month_s = String.format("%02d", month);
        int year = rnd.nextInt(22,27);
        String year_s = String.format("%02d", year);
        return month_s + year_s;
    }



    public Long getId() {
        return id;
    }

    public boolean isDebit() {
        return isDebit;
    }

    public double getBalance() {
        return balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public List<Payment> getPayments() {
        return payments;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public String getCvc() {
        return cvc;
    }

    public String getPinNumber() {
        return pinNumber;
    }

    public List<Subscription> getSubscriptions() {
        return subscriptions;
    }

    public void setDebit(boolean debit) {
        isDebit = debit;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public void setPayments(List<Payment> payments) {
        this.payments = payments;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }

    public void setCvc(String cvc) {
        this.cvc = cvc;
    }

    public void setPinNumber(String pinNumber) {
        this.pinNumber = pinNumber;
    }


    public void setSubscriptions(List<Subscription> subscriptions) {
        this.subscriptions = subscriptions;
    }

    // add and remove payments and subscriptions
    public void addPayment(Payment payment){
        this.payments.add(payment);
    }

    public void removePayment(Payment payment){
        this.payments.remove(payment);
    }

    public void addSubscription(Subscription subscription){
        this.subscriptions.add(subscription);
    }

    public void removeSubscription(Subscription subscription){
        this.subscriptions.remove(subscription);
    }




    // new
    public AccountType getAccountType() {
        return accountType;
    }

    public List<AccountHolder> getAccountHolders() {
        return accountHolders;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public void setAccountHolders(List<AccountHolder> accountHolders) {
        this.accountHolders = accountHolders;
    }


    public void addAccountHolder(AccountHolder accountHolder){
        this.accountHolders.add(accountHolder);
    }

    public void removeAccountHolder(AccountHolder accountHolder){
        this.accountHolders.remove(accountHolder);
    }


    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", isDebit=" + isDebit +
                ", balance=" + balance +
                ", accountNumber='" + accountNumber + '\'' +
                ", payments=" + payments +
                ", expirationDate='" + expirationDate + '\'' +
                ", cvc='" + cvc + '\'' +
                ", pinNumber='" + pinNumber + '\'' +
                ", subscriptions=" + subscriptions +
                '}';
    }
}
