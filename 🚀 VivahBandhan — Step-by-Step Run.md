🚀 VivahBandhan — Step-by-Step Run Guide

This is a full-stack project with:



Frontend: React (Create React App) — runs on http://localhost:3000

Backend: Spring Boot (Java/Maven) — runs on http://localhost:8080

Database: MySQL — vivahdb

✅ Prerequisites (Install if not already done)

Tool	Required Version	Download

Node.js	v16+	nodejs.org

Java JDK	17	adoptium.net

Maven	3.6+	maven.apache.org (or use bundled mvnw)

MySQL	8.0+	mysql.com





🗄️ Step 1 — Set Up the Database

Open MySQL Workbench or MySQL CLI and log in:

bash

mysql -u root -p

Run the SQL setup script:

sql



**source a:/Internship Project -React/vivah/db\_setup.sql**



This creates the vivahdb database, all tables, and seed users.

IMPORTANT



The backend expects MySQL credentials: username = root, password = root. If your MySQL password is different, update 



application.properties

&#x20;line 7 before starting the backend.



⚙️ Step 2 — Start the Backend (Spring Boot)

Open a terminal and run:



powershell

**cd "a:\\Internship Project -React\\vivah\\backend"**

**.\\mvnw.cmd spring-boot:run**

✅ Wait until you see:



Started VivahBandhanApplication in X.XXX seconds

The backend API will be live at http://localhost:8080



🌐 Step 3 — Start the Frontend (React)

Open a new terminal (keep backend running) and run:



powershell

cd "a:\\Internship Project -React\\vivah"

npm install

npm start

✅ The browser will auto-open at http://localhost:3000



🔐 Step 4 — Login Credentials (from seed data)

Role	Username	Password

Admin	admin	admin123

Govt Officer	govt\_officer	govt123

Investor/Sponsor	sponsor\_corp	invest123

Bride	bride01	bride123

Groom	groom01	groom123

⚠️ Common Issues

Problem	Fix

Backend fails with DB error	Check MySQL is running \& password matches in 



application.properties

npm start fails	Run npm install first, then retry

Port 8080 already in use	Kill the conflicting process or change server.port in application.properties

mvnw not recognized	Run mvn spring-boot:run if Maven is installed globally

