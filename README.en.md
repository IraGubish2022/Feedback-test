# Subscriber Count Tracker App "TWEETS"

This application is a tool for tracking the number of subscribers. It allows you to easily monitor the growth or decline of subscribers.

## Features

- Displaying the current number of subscribers
- Displaying the information about each user, including avatar

##Technologies Used

React
React Router for routing
Axios
Styled Components
Styled System
React-loader-spinner
React-icons
Prop-types
UI service mockapi.io for creating a personal backend for development purposes

##Getting Started

To get started with the project, follow these steps:
Clone the repository to your local machine using the command git clone https://github.com/IraGubish2022/Feedback-test.git
Change your directory to the cloned repository using the command cd goit-test
Install the dependencies using the command npm install
Start the development server using the command npm start

##Backend

The backend of the application is created using the UI service mockapi.io. The users resource is created with the following fields:
id: unique identifier for each user
user: name of the user
tweets: number of tweets posted by the user
followers: number of followers of the
user avatar: URL of the user's avatar

##Routing

The React Router is used for routing. The following routes are available in the application:
'/' - displays the home page
'/tweets' - displays the tweets page and list of users
