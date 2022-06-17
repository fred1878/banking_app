# Backend Project  (BNTA Week 7)


# List of Collaborators
This is a 1-week group project consisting of the Bright Network Technology Academy Cohort 5 members:

- Iman Chaudhry (Github: [ImanChaudhry](https://github.com/ImanChaudhry))
- Kim (Jimle) Ye (Github: [JinleYe](https://github.com/JinleYe))
- Mohamed Khaled (Github: [Mohamedk1995](https://github.com/Mohamedk1995))
- Aisha Mohamed (Github: [aisha-png](https://github.com/aisha-png))


# Project Theme
- We took inspiration from banking applications as banking is part of our day to day life in these recent years. Being able to pay online as well as having access to monthly reports of your spending allows for better money management towards customers.

This API was coded in Java. We used the SpringBoot that implements the Spring Framework as well as Postman and H2 database to view the API request endpoints.



# Project timeline

~ **Friday 20/05/2022** -- Project group was set + ideas for project theme

~ **Monday 23/05/2022** -- Project theme set + Excalidraw live collaboration used for initial class diagram + Model 

~ **Tuesday 24/05/2022** -- Repository layer + Components + Controllers

~ **Wednesday 25/05/2022** -- Deugging + Queries

~ **Thursday 26/05/2022** -- Branch merging + Presentation preperation

~ **Friday 27/05/2022** -- Presentation day

<img width="1438" alt="Screenshot 2022-05-26 at 18 13 59" src="https://user-images.githubusercontent.com/67974517/170540384-fc797470-1c26-40e5-b7b1-564d113db011.png">


# The API
- We have a Many-to-Many relationship between Account Holders and Accounts
- A One-to-Many relationship between Accounts and Payments as well as Accounts and Subscriptions.



# Entity Relationship Diagram (ERD)
<img width="895" alt="Screenshot 2022-05-25 at 6 38 45 PM" src="https://user-images.githubusercontent.com/67974517/170518755-3a8b542b-0615-4ce3-b7eb-2ccb0add5878.png">



# Class Diagram
<img width="1084" alt="Screenshot 2022-05-25 at 6 37 52 PM" src="https://user-images.githubusercontent.com/67974517/170511038-177da193-f644-4ee1-a118-1a95f727e2b9.png">


# Dependencies
- Spring Web
- SpringBoot DevTools
- Spring Data JPA
- H2 Database


# Our Commands

## 1. GET (SHOW)

|**ACCOUNTS**|
|:----------- |
|localhost:8080/accounts|
|localhost:8080/accounts/20|
|localhost:8080/accounts?pinnumber=1649&balance=12469|
|localhost:8080/accounts?relationship=partner|
|localhost:8080/accounts/balance?greaterthan=300000|

|**ACCOUNT HOLDERS**|
|:----------- |
|localhost:8080/account_holders|
|localhost:8080/account_holders/id=10|
|localhost:8080/account_holders/name=iman|
|localhost:8080/account_holders/dob?dob=1997-07-25|
|localhost:8080/account_holders/address=manchester|
|localhost:8080/account_holders/employmentStatus| 

|**PAYMENTS**|
|:----------- |
|localhost:8080/payments|
|localhost:8080/payments/1|
|localhost:8080/payments/search?from=2022-01-01&to=2022-03-01|
|localhost:8080/payments/search/category=shopping|
|localhost:8080/payments/search/greaterthan=50|
|localhost:8080/payments/search/account=5|
|localhost:8080/payments/search/account_holder=john|


|**SUBSCRIPTIONS**|
|:----------- |
|localhost:8080/subscriptions|
|localhost:8080/subscriptions/1|
|localhost:8080/subscriptions?category=Entertainment|
|localhost:8080/subscriptions/price=50|
|localhost:8080/subscriptions/isActive=true|
|localhost:8080/subscriptions/dateofpayment?dateofpayment=2017-11-23|


## 2. POST (CREATE)

**ALL CLASSES**
| :----|
|localhost:8080/accounts|
|localhost:8080/account_holders|
|localhost:8080/payments|
|localhost:8080/subscriptions|

## 3. PUT  

Example of updating an account by id:
- localhost:8080/accounts/1

        {
            "balance": 445566.0,
            "accountNumber": "98765432",
            "expirationDate": "0442",
            "cvc": "452",
            "pinNumber": "9090"
        }
        
 
Example of updating an payment by id:
- localhost:8080/payments/1
- pass in a text with "Entertainment"

## 4. DELETE
We need to insert 

|**PAYMENTS**| |
|-----------|-----------|
|delete by id | localhost:8080/payments/delete-1|
|delete by a date |localhost:8080/payments/delete?date=2022-02-01|
|delete by payment name|localhost:8080/payments/delete?name=tesco|


# Tests

<img width="607" alt="Screenshot 2022-05-26 at 6 00 17 PM" src="https://user-images.githubusercontent.com/67974517/170538203-b6070226-3edd-4da4-8a27-aa866b952160.png">


