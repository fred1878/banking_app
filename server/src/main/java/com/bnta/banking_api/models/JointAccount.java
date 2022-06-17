/*
<<<<<<< HEAD
//package com.bnta.banking_api.models;
//
//import java.util.List;
//import javax.persistence.*;
//
//@Entity
//@Table(name = "joint_accounts")
//public class JointAccount extends Account{
//
//    @Column
//    private String relationship;
//
//    @ManyToMany//(mappedBy = "accounts")
//    @JoinTable(
//            name = "jointAccount_accountHolder",
//            joinColumns = {@JoinColumn(name = "joint_account_id", nullable = true)},
//            inverseJoinColumns = {@JoinColumn(name = "account_holder_id", nullable = true)}
//    )
//    private List<AccountHolder> accountHolders;
//
//    public JointAccount(boolean isDebit, double balance, String pinNumber,
//                        String relationship, List<AccountHolder> accountHolders) {
//
//        super(isDebit, balance, pinNumber);
//        this.relationship = relationship;
//        this.accountHolders = accountHolders;
//    }
//
//    protected JointAccount() {
//        super();
//    }
//
//    public List<AccountHolder> getAccountHolders() {
//        return accountHolders;
//    }
//
//    public void setAccountHolders(List<AccountHolder> accountHolders) {
//        this.accountHolders = accountHolders;
//    }
//
//
//    public void addAccountHolders(AccountHolder accountHolder) {
//        this.accountHolders.add(accountHolder);
//    }
//
//    public void removeAccountHolders(AccountHolder accountHolder) {
//        this.accountHolders.remove(accountHolder);
//    }
//}
=======
package com.bnta.banking_api.models;
<<<<<<< HEAD

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

=======
/*
>>>>>>> 11c3057e4664165678d7fef2d580a1d4f221f3aa
import java.util.List;
import javax.persistence.*;
<<<<<<< HEAD
=======

>>>>>>> 8c24c2d00ff2948730d94cb04d9519e22f428f17
/*
@Entity
@Table(name = "joint_accounts")
public class JointAccount extends Account{

    @Column
    private String relationship;

    @ManyToMany//(mappedBy = "accounts")
    @JoinTable(
            name = "jointAccount_accountHolder",
            joinColumns = {@JoinColumn(name = "joint_account_id", nullable = true)},
            inverseJoinColumns = {@JoinColumn(name = "account_holder_id", nullable = true)}
    )
    @JsonIgnoreProperties(value = "account")
    private List<AccountHolder> accountHolders;

    public JointAccount(boolean isDebit, double balance, String pinNumber,
                        String relationship, List<AccountHolder> accountHolders) {

        super(isDebit, balance, pinNumber);
        this.relationship = relationship;
        this.accountHolders = accountHolders;
    }

    protected JointAccount() {
        super();
    }

    public List<AccountHolder> getAccountHolders() {
        return accountHolders;
    }

    public void setAccountHolders(List<AccountHolder> accountHolders) {
        this.accountHolders = accountHolders;
    }


    public void addAccountHolders(AccountHolder accountHolder) {
        this.accountHolders.add(accountHolder);
    }

    public void removeAccountHolders(AccountHolder accountHolder) {
        this.accountHolders.remove(accountHolder);
    }
}
<<<<<<< HEAD



=======
<<<<<<< HEAD


=======
*/

