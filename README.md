# Introduction

TripWithUs is a new platform started by a group in Bangalore to list hotels from all over the world. They aim to make hotel discovery easy by allowing users to filter and sort hotels based on their preferences. Currently, they are focusing on a few categories, amenities, and countries and plan to expand over time.

This project involves developing backend APIs to support the platform’s frontend. The APIs handle hotel filtering, sorting, and logging user actions.

# Objective

TripWithUs has tasked you with creating backend APIs to power their hotel listing platform. The APIs must support filtering and sorting hotels by various criteria such as price, ratings, reviews, categories, amenities, and countries.

# Express Server Integration with Frontend

This repository contains backend APIs developed using Express.js and deployed on Vercel. These APIs are integrated with a frontend hosted [here](https://bd2-hotel-listing.vercel.app/).

## Features

- Real-time API response logging in the **Logger** section.
- Sorting options: Pricing, Ratings, and Reviews.
- Filtering options:
  - **Categories**: Mid-Range, Family, Luxury, Boutique, Resort, Budget.
  - **Amenities**: Spa, Bar, Pool, Restaurant, Gym, Pet Friendly, Parking, Free WiFi.
  - **Countries**: France, USA, India, Germany, United Kingdom, Australia, South Africa.

---

## Setup and Integration Guide

### 1. **Deployed Backend**
The backend APIs are live and can be accessed at:  
**[https://bd-2-assignment-one.vercel.app/](https://bd-2-assignment-one.vercel.app/)**

### 2. **Frontend Integration**
Visit the frontend application:  
**[https://bd2-hotel-listing.vercel.app/](https://bd2-hotel-listing.vercel.app/)**  

#### Steps:
1. On opening the frontend, a dialog box will prompt you to enter your server URL.  
   Enter the backend URL from above and click **Save Changes**.

2. Once saved
     - Click on **Load hotels**, you will see the hotel listing section displaying all hotels.

3. Use the available filters and sorting options to customize the hotel list.

4. View API responses for your actions in the **Logger** section on the bottom right.

---

## User Actions and Workflow

### 1. Filter Hotels
- Choose filters to narrow down hotel listings based on:
  - **Categories**: Mid-Range, Family, Luxury, Boutique, Resort, Budget.
  - **Amenities**: Spa, Bar, Pool, Restaurant, Gym, Pet Friendly, Parking, Free WiFi.
  - **Countries**: France, USA, India, Germany, United Kingdom, Australia, South Africa.

### 2. Sort Hotels
- Sort hotels based on:
  - **Pricing**
  - **Ratings**
  - **Reviews**

### 3. View Logger
- Each user action sends an API request, and the response is displayed in the **Logger** section.

---

## API Logs
All user actions are logged in real-time and visible in the frontend's Logger.

---
