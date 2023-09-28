# ShelterBooks_Frontend
Front-end Angular per il progetto finale Capstone del percorso con EPICODE School 2023 Full-Stack Course 🚀

Link alla repository back-end : https://github.com/EazyM93/ShelterBooks_CapstoneProject/tree/main

Benvenuti in ShelterBooks, sito e-commerce di libri che permettesse all'utente di tenere traccia dei suoi acquisti sottoforma di libreria virtuale 📚

L'applicativo è stato sviluppato utilizzando nel front-end Angular e Bootstrap, mentre per il back-end Java, Spring Boot e PostgreSql ☕️

Per eseguire l'app configurare il proprio ambiente come segue

💻 **BACK-END CONFIGURATION** 💻
-----------------------------------
Il progetto java va importato nel proprio IDE come Maven Project.

Il progetto di base è stato generato utilizzando <span style="color: #008000;">Spring Initializr</span> : https://start.spring.io

Assicurarsi di aver installato correttamente Lombok nel proprio ambiente di sviluppo : https://projectlombok.org

Assicurarsi di avere importato le seguenti dependecy nel pom.xml, reperibili su Maven Repository : https://mvnrepository.com


- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-api
- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-impl
- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-jackson
- https://mvnrepository.com/artifact/javax.validation/validation-api

Creare un file **env.properties** da inserire nel main del progetto java ed impostare i valori per eseguire il porgramma.
I valori segnalati con * sono a discrezione dell'utente, l'importante è che ci sia coerenza con il resto dell'ambiente.
```
port=3001

jwt_secret= *
pg_username=postgres
pg_password= *
pg_db=shelterDB

ps_defaultAdmin= *
```
