package com.bnta.banking_api.components;

import com.bnta.banking_api.models.*;


import com.bnta.banking_api.repositories.AccountRepository;
import com.bnta.banking_api.repositories.PaymentRepository;
import com.bnta.banking_api.models.Payment;
import com.bnta.banking_api.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import org.springframework.web.bind.annotation.RestController;


import java.time.LocalDate;
import java.util.Arrays;


@Component
public class DataLoader implements ApplicationRunner {
    
    
    @Autowired
    private AccountHolderRepository accountHolderRepository;

    // new
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private PaymentRepository paymentRepository;
    @Autowired
    private SubscriptionRepository subscriptionRepository;
    
    
    @Override
    public void run(ApplicationArguments args) throws Exception {




        // AccountHolder data
        AccountHolder accountHolder1 = new AccountHolder("Aisha Mohamed", LocalDate.of(2000, 2, 23), "Abc Street, London", Employment.FULL_TIME);
        AccountHolder accountHolder2 = new AccountHolder("Mohamed Khaled", LocalDate.of(1995, 5, 15), "Sunny Street, London", Employment.FULL_TIME);
        AccountHolder accountHolder3 = new AccountHolder("Iman Chaudhry", LocalDate.of(1999, 12, 18), "Canning Street, London", Employment.FULL_TIME);
        AccountHolder accountHolder4 = new AccountHolder("Kim Ye", LocalDate.of(1997, 7, 25), "Boston Street, London", Employment.FULL_TIME);
        AccountHolder accountHolder5 = new AccountHolder("John Chris", LocalDate.of(1987, 10, 13), "Rebe Road, Manchester", Employment.FULL_TIME);
        AccountHolder accountHolder6 = new AccountHolder("Micheal Kayn", LocalDate.of(2002, 6, 3), "Hight Street, Manchester", Employment.STUDENT);
        AccountHolder accountHolder7 = new AccountHolder("Jake Willing", LocalDate.of(1975, 10, 8), "Lathon Road, Manchester", Employment.UNEMPLOYED);
        AccountHolder accountHolder8 = new AccountHolder("Rebeca Jones", LocalDate.of(1995, 1, 3), "Albion Road, London", Employment.SELF_EMPLOYED);
        AccountHolder accountHolder9 = new AccountHolder("Chelsea Sky", LocalDate.of(2005, 7, 16), "Junction Road, Birmingham", Employment.STUDENT);
        AccountHolder accountHolder10 = new AccountHolder("Gwen Dennis", LocalDate.of(1965, 3, 4), "Dulverton Road, Birmingham", Employment.UNEMPLOYED);
        AccountHolder accountHolder11 = new AccountHolder("Jonas Fred", LocalDate.of(1988, 4, 13), "Electric Street, Birmingham", Employment.SELF_EMPLOYED);
        AccountHolder accountHolder12 = new AccountHolder("Sebastian Joy", LocalDate.of(1999, 11, 30), "Whitechapel Street, Liverpool", Employment.PART_TIME);
        AccountHolder accountHolder13 = new AccountHolder("Kylie Goldman", LocalDate.of(1977, 1, 28), "Duke Road, Liverpool", Employment.PART_TIME);
        AccountHolder accountHolder14 = new AccountHolder("Jess Blue", LocalDate.of(1989, 8, 8), "Argyle Street, Liverpool", Employment.OTHER);
        AccountHolder accountHolder15 = new AccountHolder("Amber Wise", LocalDate.of(1996, 11, 23), "Seddon Road, London", Employment.OTHER);
        AccountHolder accountHolder16 = new AccountHolder("Jane Josh", LocalDate.of(2005, 6, 3), "Blundell Street, London", Employment.STUDENT);
        AccountHolder accountHolder17 = new AccountHolder("Kale Wills", LocalDate.of(2004, 9, 9), "Hill Road, Manchester", Employment.STUDENT);
        AccountHolder accountHolder18 = new AccountHolder("Ander Boss", LocalDate.of(1992, 12, 29), "Cary Street, London", Employment.FULL_TIME);
        AccountHolder accountHolder19 = new AccountHolder("Billie Ele", LocalDate.of(1991, 5, 26), "Park Street, Manchester", Employment.FULL_TIME);
        AccountHolder accountHolder20 = new AccountHolder("Matty Dan", LocalDate.of(1977, 10, 4), "Park Road, London", Employment.OTHER);
        accountHolderRepository.saveAll(Arrays.asList(accountHolder1, accountHolder2, accountHolder3, accountHolder4, accountHolder5, accountHolder6, accountHolder7, accountHolder8, accountHolder9,
                accountHolder10, accountHolder11, accountHolder12, accountHolder13, accountHolder14, accountHolder15, accountHolder16, accountHolder17,
                accountHolder18, accountHolder19, accountHolder20));



        /*
        //BasicAccount Data
        BasicAccount basicAccount1 = new BasicAccount(true, 95847,"1548",accountHolder1);
        BasicAccount basicAccount2 = new BasicAccount(true, 12457,"1235",accountHolder2);
        BasicAccount basicAccount3 = new BasicAccount(false, -587,"3245",accountHolder3);
        BasicAccount basicAccount4 = new BasicAccount(true, 212458,"7896",accountHolder4);
        BasicAccount basicAccount5 = new BasicAccount(true, 9584547,"4565",accountHolder5);
        BasicAccount basicAccount6 = new BasicAccount(false, -784,"1550",accountHolder6);
        BasicAccount basicAccount7 = new BasicAccount(true, 14527,"1546",accountHolder7);
        BasicAccount basicAccount8 = new BasicAccount(true, 69857,"1658",accountHolder8);
        BasicAccount basicAccount9 = new BasicAccount(false,-958,"5448",accountHolder9);
        BasicAccount basicAccount10 = new BasicAccount(true, 46581,"9658",accountHolder10);
        basicAccountRepository.saveAll(Arrays.asList(basicAccount1,basicAccount2,basicAccount3,basicAccount4,basicAccount5,basicAccount6,basicAccount7,basicAccount8,basicAccount9,basicAccount10));
        //JointAccount Data
        JointAccount jointAccount1 = new JointAccount(true, 124569,"1649", "Partner", Arrays.asList(accountHolder1, accountHolder2));
        JointAccount jointAccount2 = new JointAccount(true,352648 ,"9878", "Housemate", Arrays.asList(accountHolder3, accountHolder4, accountHolder7));
        JointAccount jointAccount3 = new JointAccount(false, -574,"7898", "Parent", Arrays.asList(accountHolder9, accountHolder10));
        JointAccount jointAccount4 = new JointAccount(true, 12345,"9467", "Partner", Arrays.asList(accountHolder15, accountHolder13));
        JointAccount jointAccount5 = new JointAccount(false, -658,"6497", "Partner", Arrays.asList(accountHolder5, accountHolder6));
        JointAccount jointAccount6 = new JointAccount(true,54574,"3316", "Partner", Arrays.asList(accountHolder11, accountHolder12));
        JointAccount jointAccount7 = new JointAccount(false, -645,"7894", "Parent", Arrays.asList(accountHolder19, accountHolder18));
        JointAccount jointAccount8 = new JointAccount(true, 586212,"9467", "Partner", Arrays.asList(accountHolder14, accountHolder20));
        JointAccount jointAccount9 = new JointAccount(false, -754,"3619", "Partner", Arrays.asList(accountHolder4, accountHolder3));
        JointAccount jointAccount10 = new JointAccount(false, -794,"7892", "Parent", Arrays.asList(accountHolder14, accountHolder16));
        jointAccountRepository.saveAll(Arrays.asList(jointAccount1,jointAccount2,jointAccount3,jointAccount4,jointAccount5,jointAccount6,jointAccount7,jointAccount8,jointAccount9,jointAccount10));



        */


        // new
        // account data
        Account account1 = new Account(true, 12469,"1649", AccountType.JOINT_ACCOUNT,"Partner", Arrays.asList(accountHolder1, accountHolder2));
        Account account2 = new Account(true,3648 ,"9078", AccountType.JOINT_ACCOUNT, "Housemate", Arrays.asList(accountHolder3, accountHolder4, accountHolder7));
        Account account3 = new Account(false, -504,"0898", AccountType.JOINT_ACCOUNT, "Parent", Arrays.asList(accountHolder9, accountHolder10));
        Account account4 = new Account(true, 1245,"0467", AccountType.JOINT_ACCOUNT, "Partner", Arrays.asList(accountHolder15, accountHolder13));
        Account account5 = new Account(false, -608,"0497", AccountType.JOINT_ACCOUNT,"Partner", Arrays.asList(accountHolder5, accountHolder6));
        Account account6 = new Account(true,5474,"0316", AccountType.JOINT_ACCOUNT, "Partner", Arrays.asList(accountHolder11, accountHolder12));
        Account account7 = new Account(false, -645,"7094", AccountType.JOINT_ACCOUNT, "Partner", Arrays.asList(accountHolder19, accountHolder18, accountHolder7));
        Account account8 = new Account(true, 58612,"0467", AccountType.JOINT_ACCOUNT, "Housemate", Arrays.asList(accountHolder14, accountHolder20));
        Account account9 = new Account(false, -75,"0610", AccountType.JOINT_ACCOUNT, "Housemate", Arrays.asList(accountHolder4, accountHolder3));
        Account account10 = new Account(false, -894,"0892", AccountType.JOINT_ACCOUNT, "Parent", Arrays.asList(accountHolder14, accountHolder16));


        Account account11 = new Account(true, 124569,"1649", AccountType.BASIC_ACCOUNT,"N/A", Arrays.asList(accountHolder2));
        Account account12 = new Account(true,352648 ,"9878", AccountType.BASIC_ACCOUNT, "N/A", Arrays.asList(accountHolder3));
        Account account13 = new Account(false, -574,"7898", AccountType.BASIC_ACCOUNT, "N/A", Arrays.asList(accountHolder10));
        Account account14 = new Account(true, 12345,"9467", AccountType.BASIC_ACCOUNT, "N/A", Arrays.asList(accountHolder15));
        Account account15 = new Account(false, -658,"6497", AccountType.BASIC_ACCOUNT,"N/A", Arrays.asList(accountHolder5));
        Account account16 = new Account(true,54574,"3316", AccountType.BASIC_ACCOUNT, "N/A", Arrays.asList(accountHolder12));
        Account account17 = new Account(false, -645,"7894", AccountType.BASIC_ACCOUNT, "N/A", Arrays.asList(accountHolder7));
        Account account18 = new Account(true, 586212,"9467", AccountType.BASIC_ACCOUNT, "N/A", Arrays.asList(accountHolder14));
        Account account19 = new Account(false, -754,"3619", AccountType.BASIC_ACCOUNT, "N/A", Arrays.asList(accountHolder4));
        Account account20 = new Account(false, -794,"7892", AccountType.BASIC_ACCOUNT, "N/A", Arrays.asList(accountHolder14));
        accountRepository.saveAll(Arrays.asList(account1, account2, account3, account4, account5, account6, account7, account8, account9, account10,
                account11, account12, account13, account14, account15, account16, account17, account18, account19, account20));



        // Payment data
        Payment payment1 = new Payment("Amazon", LocalDate.of(2022, 1,2), 9.99, account1,Category.SHOPPING);
        Payment payment2 = new Payment("Gym", LocalDate.of(2022, 3, 29), 31.99,account2,Category.HEALTH);
        Payment payment3 = new Payment("Tesco", LocalDate.of(2022, 4, 1),  80.65, account10,Category.SHOPPING);
        Payment payment4 = new Payment("JD", LocalDate.of(2022, 9, 27),  101.98, account4,Category.SHOPPING);
        Payment payment5 = new Payment("Lidl", LocalDate.of(2022, 4, 29),  50.02,account15,Category.SHOPPING);
        Payment payment6 = new Payment("KFC", LocalDate.of(2022, 2, 7),  5.49, account7,Category.EATING_OUT);
        Payment payment7 = new Payment("Odeon", LocalDate.of(2022, 3, 30),  40.36, account8,Category.ENTERTAINMENT);
        Payment payment8 = new Payment("Bowling", LocalDate.of(2022, 10, 24), 9.87,account10,Category.ENTERTAINMENT);
        Payment payment9 = new Payment("Uber", LocalDate.of(2022, 5, 9),  7.99, account5,Category.TRANSPORT);
        Payment payment10 = new Payment("Ebay", LocalDate.of(2022, 3, 3),  22.60, account6,Category.SHOPPING);
        Payment payment11 = new Payment("Apple", LocalDate.of(2022, 3, 13),  2080.00,account19,Category.SHOPPING);
        Payment payment12 = new Payment("John Lewis", LocalDate.of(2022, 3, 13),  501.80,account17,Category.SHOPPING);
        Payment payment13 = new Payment("Lidl", LocalDate.of(2022, 1, 11),  15.67, account16,Category.SHOPPING);
        Payment payment14 = new Payment("Nandos", LocalDate.of(2022, 5, 3),  34.45, account9,Category.EATING_OUT);
        Payment payment15 = new Payment("B&Q", LocalDate.of(2022, 5, 6),  451.99, account14,Category.OTHER);
        Payment payment16 = new Payment("Costa", LocalDate.of(2022, 4, 3),  2.99,account3,Category.EATING_OUT);
        Payment payment17 = new Payment("Tesco", LocalDate.of(2022, 3, 6),  43.89, account17,Category.SHOPPING);
        Payment payment18 = new Payment("Currys", LocalDate.of(2022, 12, 3),  302.34,account13,Category.SHOPPING);
        Payment payment19 = new Payment("Gym", LocalDate.of(2022, 3, 3),  31.99, account16,Category.HEALTH);
        Payment payment20 = new Payment("B&M", LocalDate.of(2022, 2, 16),  18.22, account14,Category.SHOPPING);
        paymentRepository.saveAll(Arrays.asList(payment1, payment2, payment3, payment4, payment5, payment6, payment7,
                payment8, payment9, payment10, payment11, payment12, payment13, payment14, payment15,
                payment16, payment17, payment18, payment19, payment20));



        // Subscription data
        Subscription sub1 = new Subscription("Nandos", LocalDate.of(2016, 12, 14), Category.EATING_OUT, 54.99, true, account1);
        Subscription sub2 = new Subscription("Thames Water", LocalDate.of(2020, 9, 12), Category.BILLS, 69.99, true, account3);
        Subscription sub3 = new Subscription("TFL", LocalDate.of(2021, 3, 19), Category.TRANSPORT, 59.99, false, account2);
        Subscription sub4 = new Subscription("Pure Gym", LocalDate.of(2015, 5, 22), Category.HEALTH, 24.99, true, account6);
        Subscription sub5 = new Subscription("Soul Cycle", LocalDate.of(2009, 8, 24), Category.HEALTH, 149.99, false, account7);
        Subscription sub6 = new Subscription("O2", LocalDate.of(2012, 2, 28), Category.BILLS, 14.99, false, account8);
        Subscription sub7 = new Subscription("Netflix", LocalDate.of(2017, 11, 23), Category.ENTERTAINMENT, 14.99, true, account9);
        Subscription sub8 = new Subscription("Tesco", LocalDate.of(2019, 10, 30), Category.SHOPPING, 44.99, false, account10);
        Subscription sub9 = new Subscription("Farah Charity", LocalDate.of(2014, 6, 1), Category.CHARITY, 64.99, true, account4);
        Subscription sub10 = new Subscription("Easy Jet", LocalDate.of(2013, 4, 13), Category.OTHER, 84.99, true, account5);
        Subscription sub11 = new Subscription("Tastily prepared meals", LocalDate.of(2017, 7, 30), Category.OTHER, 23.99, true, account14);
        Subscription sub12 = new Subscription("British Red Cross", LocalDate.of(2016, 4, 13), Category.CHARITY, 34.99, false, account13);
        Subscription sub13 = new Subscription("Sainsburys", LocalDate.of(2019, 3, 15), Category.SHOPPING, 65.99, false, account12);
        Subscription sub14 = new Subscription("TFL", LocalDate.of(2015, 5, 12), Category.TRANSPORT, 23.99, true, account11);
        Subscription sub15 = new Subscription("Spotify", LocalDate.of(2017, 9, 16), Category.ENTERTAINMENT, 4.99, false, account20);
        Subscription sub16 = new Subscription("Thames Water", LocalDate.of(2020, 12, 2), Category.BILLS, 55.99, true, account19);
        Subscription sub17 = new Subscription("Pure Gym", LocalDate.of(2021, 10, 23), Category.HEALTH, 12.99, true, account18);
        Subscription sub18 = new Subscription("Taco Bell", LocalDate.of(2022, 3, 29), Category.EATING_OUT, 42.99, false, account17);
        Subscription sub19 = new Subscription("National Grid", LocalDate.of(2004, 5, 23), Category.BILLS, 68.99, true, account16);
        Subscription sub20 = new Subscription("Netflix", LocalDate.of(2019, 2, 8), Category.ENTERTAINMENT, 9.99, true, account15);
        subscriptionRepository.saveAll(Arrays.asList(sub1,sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10,sub11,
                sub12, sub13, sub14, sub15, sub16, sub17, sub18, sub19, sub20));
    }
}
