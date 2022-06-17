/*
//package com.bnta.banking_api.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity(name="basic_accounts")
//public class BasicAccount extends Account {
//
//    @ManyToOne
//    private AccountHolder accountHolder;
//
//    public BasicAccount(boolean isDebit, double balance, String pinNumber, AccountHolder accountHolder) {
//
//        super(isDebit, balance, pinNumber);
//        this.accountHolder = accountHolder;
//    }
//
//    protected BasicAccount(){
//        super();
//    }
//
//    public AccountHolder getAccountHolder() {
//        return accountHolder;
//    }
//
//    public void setAccountHolder(AccountHolder accountHolder) {
//        this.accountHolder = accountHolder;
//    }
//
//}
=======
package com.bnta.banking_api.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonRootName;

=======
/*
>>>>>>> 11c3057e4664165678d7fef2d580a1d4f221f3aa
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
<<<<<<< HEAD
=======

>>>>>>> 8c24c2d00ff2948730d94cb04d9519e22f428f17
/*
@Entity(name="basic_accounts")
//public class BasicAccount extends Account {
public class BasicAccount extends Account {

    @ManyToOne
    @JsonIgnoreProperties(value = "account")
    private AccountHolder accountHolder;

    public BasicAccount(boolean isDebit, double balance, String pinNumber, AccountHolder accountHolder) {

        super(isDebit, balance, pinNumber);
        this.accountHolder = accountHolder;
    }

    protected BasicAccount(){
        super();
    }

    public AccountHolder getAccountHolder() {
        return accountHolder;
    }

    public void setAccountHolder(AccountHolder accountHolder) {
        this.accountHolder = accountHolder;
    }

}
<<<<<<< HEAD


 */


