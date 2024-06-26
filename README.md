# E-Shop - E-commerce Platform

E-Shop is a dynamic and responsive e-commerce platform built with React.js, Tailwind CSS, Redux, and React Router. It follows best practices for component reuse, state management, and Progressive Web App (PWA) standards.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [State Management](#state-management)
- [API](#api)
- [PWA Implementation](#pwa-implementation)
- [License](#license)

## Features

- Reusable components (Header, Footer, Product Card, Navigation Menu)
- State management with Redux
- Responsive design with Tailwind CSS
- Progressive Web App (PWA) features
- Product listing and shopping cart functionality

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pratham9798/ecommerce-platform.git
   cd ecommerce-platform

Install dependencies:
npm install

Install JSON Server for the mock API:
npm install -g json-server

Usage

Start JSON Server to serve the mock API:
json-server --watch db.json --port 5000

Start the development server:
npm start

Open your browser and navigate to http://localhost:3000

Project Structure

ecommerce-platform/
|-- public/
|-- src/
|   |-- components/
|   |   |-- Header.js
|   |   |-- Footer.js
|   |   |-- ProductCard.js
|   |   |-- NavigationMenu.js
|   |-- pages/
|   |   |-- Home.js
|   |   |-- ProductListing.js
|   |   |-- Cart.js
|   |-- redux/
|   |   |-- store.js
|   |   |-- reducers/
|   |       |-- cartReducer.js
|   |-- App.js
|   |-- index.js
|-- db.json
|-- package.json
|-- tailwind.config.js


