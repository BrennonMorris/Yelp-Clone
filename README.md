<img width="893" alt="clonebnb" src="https://user-images.githubusercontent.com/103297104/211087196-d931134b-0662-49dc-9c9c-ab90187b08fd.png">

User Reviews and Recommendations of Best Restaurants, Shopping, Nightlife, Food, Entertainment, Things to Do, Services and More at Gulp.
(Inspired by the popular website, [yelp](https://www.yelp.com/))

**🚀 Live site: [gulp](https://gulp.herokuapp.com/) **

# 🖱 Wiki Links

[API Documentation]()

[Database Schema]()

[Feature List]()

[Redux Store Shape]()

[User Stories]()

[Wireframes]()

# 🧑‍💻 Under the Hood

## 🤖 Integrated Web Technologies

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## 💾 Database

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

## ☁️ Hosting

![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

# 🛬 Landing Page

<img width="1914" alt="Screenshot 2023-01-05 at 1 41 00 PM" src="https://user-images.githubusercontent.com/103297104/211098205-fa7f2caa-0f1d-4569-a2e0-9679f479af61.png">

## 💡 Features

### Create a Business

<img width="1912" alt="Screenshot 2023-01-05 at 1 42 15 PM" src="https://user-images.githubusercontent.com/103297104/211099200-09aafcea-6277-4fc6-ba54-8c2991e8d954.gif">

### View individual Business

<img width="1911" alt="Screenshot 2023-01-05 at 1 53 52 PM" src="https://user-images.githubusercontent.com/103297104/211099832-4959633e-309e-4cce-953e-337d83faac05.gif">

### Update and/or Delete your Business

<img width="1910" alt="Screenshot 2023-01-05 at 1 55 36 PM" src="https://user-images.githubusercontent.com/103297104/211100471-21d425a7-ceda-4535-981b-7aab06f18ae5.gif">

### Create a Review

<img width="1910" alt="Screenshot 2023-01-05 at 1 56 59 PM" src="https://user-images.githubusercontent.com/103297104/211101574-4af80aa9-a6e7-4a34-b8d0-fe7f5bcee56f.png">

### View Reviews for specific Business

<img width="1916" alt="Screenshot 2023-01-05 at 2 01 06 PM" src="https://user-images.githubusercontent.com/103297104/211101723-0d11a383-acb0-40e0-9c6a-fbf5250eaaf4.png">

### Update and/or Delete your Reviews

<img width="1912" alt="Screenshot 2023-01-05 at 2 02 38 PM" src="https://user-images.githubusercontent.com/103297104/211102321-7eda4a90-79ae-4bf7-b5a3-af14b91b31bc.gif">

# 📲 Setup locally

1. Clone this repository

   ```bash
   git clone https://github.com/BrennonMorris/Air-BnB-Clone
   ```

2. Install dependencies

   ```bash
   pipenv install
   cd react-app
   npm install
   ```

3. Create a **.env** file based on the example and set the environment variables for SECRET_KEY and DATABASE_URL for your
   development environment

4. Get into your pipenv, migrate your database, seed your database, run your Flask app, and start your React app

   ```bash
   pipenv shell
   flask db upgrade
   flask seed all
   flask run
   cd react-app
   npm start
   ```
