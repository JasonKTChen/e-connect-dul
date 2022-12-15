# Project 4 - E-connect

Author: Chun-Wei Tseng, Kuan-Tsa Chen

Link to Class: https://johnguerra.co/classes/webDevelopment_fall_2022/

Link to Home Page: https://e-connect.onrender.com/


Design Document: https://docs.google.com/document/d/1vhc_Klf_8pT1yA9qHOuYvd1ZASYGsN5h7oQ_FzdR9kw/edit#
// Love your design, the website looks well structure and clear for user to user! 

## Background

This is a full stack web app utilizing the MERN stack. The backend runs a Express server, which talks to a remote mongoDB Atlas server. The frontend runs a React.js server which communicates with the backend Express server via routes (routes folder) as the entry point. User will be able to create multiple business cards for different occurrence, and choose one to be set as public so that other users can connect to them. They can add others’ business cards too as long as they also set their card to public. They can edit their own cards and manage their card collections.

### User Stories

- Bob is a freelance designer. He designed posters and web page for people. He is constantly looking for potential clients; however, he just graduated from college and doesn’t know that many people in the industry. He is looking for a web platform that allows him to build connections with people from different industries. He found the E-connect web page one day and decide to give it a try.
- Andy is a sales at manufacturing company. He is trying to connect to people from start ups and look for potential customers. When he sent messages to other companies, no one ever respond to his email. Therefore, he started to look for different ways to build professional connections. That’s how he ended up with E-connect. He found it really useful.

### Installation

To **download** the project, simply git clone, or download the .zip file from github.
Once downloaded to your local machine:

To spin up backend/frontend server, go into the backend/frontend folder, and do the following:

1. Download all dependencies:

```
npm install
```

2. Then start server, using:

```
npm start
```

For security purposes, we will not provide mongoDB connection URL, so you will need to either create a local database, or remote one.
The recipes.csv data file will be provided in the repo for you to import to the database.

To import the .csv file into local mongoDB database:

1. Download mongo database tools, with this link [MONGO DATABASE TOOLS](https://www.mongodb.com/try/download/database-tools)
2. Then import csv to database via:

```
mongoimport -d [Database name] -c [Collections name] --type csv --file [locations of csv file] --headerline
```

### Functionality

This website that provides functionality:

- Login/ create account - Users can register and login
- After login, user can create their own business cards, but only one will be able to set as public and allow other users to add it into their collection.
- Users can decide if he/she wants to set his card as public or private. By default, the card will be set to public. If a card is public, all users will ---be able to see the card on the discovery page and add others’ cards into their collection.
- Users can update information on their card.
- Users can delete cards from their collection.

### Deploy Architecture
We used AWS as our cloud service provider.    


### Color Palette:
<img width="1675" alt="Screen Shot 2022-12-12 at 1 21 42 AM" src="https://user-images.githubusercontent.com/63666127/207008860-37f66247-24ef-492a-a911-ce546a48f8d7.png">






### Improvements Made:   
- Create conditional alart when users take actions to avoid confusion.   
- Darker Background Color that looks more professional.    
- Improve user accessibility using AXE DevTools.     


<img width="1680" alt="Screen Shot 2022-12-12 at 1 25 41 AM" src="https://user-images.githubusercontent.com/63666127/207009689-f4813987-7759-4db9-b059-7f96c338cb23.png">
<img width="1680" alt="Screen Shot 2022-12-12 at 1 25 22 AM" src="https://user-images.githubusercontent.com/63666127/207009701-9cab8130-8916-4257-9576-c639860eba10.png">
<img width="1680" alt="Screen Shot 2022-12-12 at 1 24 52 AM" src="https://user-images.githubusercontent.com/63666127/207009717-4c3e4e98-b6db-49e4-831b-ce6a4e8dcc60.png">




### Screen Shots:   

<img width="1680" alt="Screen Shot 2022-12-12 at 12 53 46 AM" src="https://user-images.githubusercontent.com/63666127/207003218-ce618f5f-60fb-4c3b-9624-2bfea5761be8.png">
<img width="1678" alt="Screen Shot 2022-12-12 at 12 54 25 AM" src="https://user-images.githubusercontent.com/63666127/207003233-9e23e129-b84a-43be-8723-3bea5475bca4.png">
<img width="1679" alt="Screen Shot 2022-12-12 at 12 54 35 AM" src="https://user-images.githubusercontent.com/63666127/207003241-4eed5c74-7372-402d-a31e-3604e6dd1ae9.png">





