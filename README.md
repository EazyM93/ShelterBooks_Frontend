# ShelterBooks_Frontend v1.0
Front-end Angular per il progetto finale Capstone del percorso con EPICODE School 2023 Full-Stack Course 🚀

Link alla repository back-end : https://github.com/EazyM93/ShelterBooks_CapstoneProject/tree/main

Benvenuti in ShelterBooks, sito e-commerce di libri che permettesse all'utente di tenere traccia dei suoi acquisti sottoforma di libreria virtuale 📚

L'applicativo è stato sviluppato utilizzando nel front-end ${\color{yellow}Angular}$ e ${\color{yellow}Bootstrap}$, mentre per il back-end ${\color{aqua}Java}$, ${\color{aqua}Spring \space Boot}$ e ${\color{aqua}PostgreSql}$ ☕️

 - <a href="#-back-end-configuration-">Back-end Configuration</a>
 - <a href="#-front-end-configuration-">Front-end Configuration</a>
 - <a href="#%EF%B8%8F-funzionalità-%EF%B8%8F">Funzionalità</a>

💻 **BACK-END CONFIGURATION** 💻
-----------------------------------
Il progetto java va importato nel proprio IDE come Maven Project.

Il progetto di base è stato generato utilizzando ${\color{green}Spring \space Initializr}$ : https://start.spring.io

Assicurarsi di aver installato correttamente ${\color{orange}Lombok}$ nel proprio ambiente di sviluppo : https://projectlombok.org

Assicurarsi di avere importato le seguenti ${\color{yellow}dependecy}$ nel pom.xml, reperibili su Maven Repository : https://mvnrepository.com

- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-api
- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-impl
- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-jackson
- https://mvnrepository.com/artifact/javax.validation/validation-api

Creare un file ${\color{yellow}env.properties}$ da inserire nel main del progetto java ed impostare i valori per eseguire il porgramma.
I valori segnalati con * sono a discrezione dell'utente, l'importante è che ci sia coerenza con il resto dell'ambiente.
```
port=3001

jwt_secret= *
pg_username=postgres
pg_password= *
pg_db=shelterDB

ps_defaultAdmin= *
```
<a href="#">TORNA SU</a>

👤 **FRONT-END CONFIGURATION** 👤
----------------------------------
Prima di eseguire queste istruzioni premurarsi di aver installato correttamente ${\color{yellow}Angular}$ sul proprio dispositivo.
Seguire queste istruzioni per una corretta installazione

1. Installare Node.js & npm ( verificare sui relativi siti come fare a seconda del proprio OS )

2. Installare la versione stabile più recente di Angular <code>npm install -g @angular/cli</code>

Una volta clonato il progetto eseguire le seguenti istruzioni per avviare correttamente l'app

1. Aprire il terminale ed immettere <code>npm i</code>

2. Avviare l'app Angular nel proprio IDE <code>ng s -o</code>

3. Se non si dovesse avviare in automtico il browser, accedere tramite l'indirizzo http://localhost:4200

<a href="#">TORNA SU</a>

⌨️ **FUNZIONALITÀ** ⌨️
---------------------
<img src="https://res.cloudinary.com/drjlfkl1v/image/upload/f_auto,q_auto/vdei0f9uoksemn85xgpt">
<div>
 <img src="https://res.cloudinary.com/drjlfkl1v/image/upload/f_auto,q_auto/g2kkcr8ngmrxgjkythnj">
 <img src="https://res.cloudinary.com/drjlfkl1v/image/upload/f_auto,q_auto/ygs2eskgdaym7kmfik3z">
</div>
