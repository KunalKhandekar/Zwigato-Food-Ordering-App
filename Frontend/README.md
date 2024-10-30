Sure, I'll add the image to the README file. Here's the updated version:

---

# Swigato: Food Ordering Website

![Swigato Logo](https://zwigato-0.netlify.app/logo.47a5a5a1.png)

Swigato is a food ordering website powered by the trusted Swiggy API. It allows users to discover, order, and enjoy food from various restaurants with ease. This project combines technology and tasty meals to provide users with a seamless food ordering experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Swigato is built with React, leveraging various libraries and tools for routing, state management, and API integration. The project aims to provide a user-friendly interface for browsing restaurants, exploring menus, and placing orders conveniently.

## Features

- **Restaurant Listing:** Browse through a list of restaurants available for ordering.
- **Menu Exploration:** Explore menus of restaurants to view available dishes and prices.
- **Cart Management:** Add items to the cart, view the cart contents, and place orders.
- **Location-based Services:** Utilize location-based services to fetch restaurant menus according to the user's location.
- **About Section:** Learn more about the project and its developer through the About section.
- **Responsive Design:** Ensure the website is accessible and usable across various devices.

## Project Structure

The project is structured into several components, hooks, and slices:

- **Components:** 
  - Header: Navigation bar for easy access to different sections of the website.
  - Restaurant: Component for rendering the list of restaurants and their details.
  - Cart: Component for managing the cart, displaying cart items, and handling orders.
  - About: Section providing information about the project and its developer.
  - Other components for rendering individual dishes, restaurant menus, and error pages.

- **Hooks:**
  - useOnlineStatus: Custom hook to detect online status.
  - useRestaurantMenu: Custom hook to fetch restaurant menus based on location.

- **Redux Slices:**
  - cartSlice: Redux slice for managing cart state and actions like adding and removing items.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router:** Library for declarative routing in React applications.
- **Redux Toolkit:** Library for efficient state management in React applications.
- **React Context API:** For managing application-wide state.
- **React Toastify:** Library for displaying toast notifications in React applications.
- **Swiggy API:** Trusted API for fetching restaurant data and menus.
- **CSS Frameworks:** Utilized for styling and layout management.
- **Node.js:** Runtime environment for running JavaScript on the server side.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

## Usage

1. Visit the website homepage to browse available restaurants.
2. Explore restaurant menus and add items to the cart.
3. View the cart to review items and place orders.
4. Learn more about the project and its developer in the About section.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve the project.
