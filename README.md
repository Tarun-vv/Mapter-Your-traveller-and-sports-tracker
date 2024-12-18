# Mapter // Your traveller and sports tracker

Mapter is a versatile, location-based tracking app designed for adventurers, travelers, and athletes. It helps users log the places they visit and their sports activities, all while providing an interactive map interface. Whether you’re exploring new destinations, cycling through scenic routes, or running laps in your local park, Mapter offers an intuitive way to document and analyze your journey.

<img width="1278" alt="Screenshot 2024-12-18 at 4 14 57 PM" src="https://github.com/user-attachments/assets/e148eed5-c114-4025-8e41-ec53c310e6a4" />


[Live App](https://mapter.vercel.app) 
[Watch a demo](https://www.youtube.com/watch?v=N38Im1epbpQ)


## Features

+ **Interactive Map Interface**: Utilized Leaflet.js to create a minimalistic yet interactive map UI that works along with React Router to help user fill up forms, see marked locations. The map also moves to respective latitude and longitude position when the user clicks on the item in the list
+ **Explorer Specific Tracking**: Under the explorer tab, a user can keep track of the places they have visited. They can keep note of the location as they move around the map, their rating, take some notes and the places they saw there.
+ **Sport Specific Tracking**: Under the sports tab, a user can keep track of the sports you have kept at the location. They can keep note of the location as they move around the map, their rating, take some notes and the places they saw there.

## Tech Stack

+ **React**: Build Single Page Application with high user interactivity, React helps simply this process
+ **Supabase**: Make the app fullstack to store the cities and sports the user has travelled to. Provides easy to use CRUD operations.
+ **React Query**: Specialized React library to manage remote state. Used to perform basic CRUD operation (Create , Read, Update and Delete) along with BaaS Supabase.
+ **React Router**: Perform seamless transitions between pages and routes without page reloads. Helped to toggle the user between Explored mode and Sports mode. Allows to easily access query string and params to store latitude and longitude in the URL helping in global state management
+ **Leaflet**: Helps the user to pinpoint the location of the city they have travelled to. Render two different maps for sports and explored areas.



