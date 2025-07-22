'use client';

import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';
import { useState } from 'react';
import { FiClock, FiMapPin, FiPhone, FiLink } from 'react-icons/fi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaSnapchatGhost,
} from 'react-icons/fa';
import CustomerReviews from './components/Home/CustomerReviews';
import SimilarRestaurants from './components/Home/SimilarRestaurants';
import Header from './components/Home/Header';
import BakerySlider from './components/Home/BakerySlider';

export default function HomePage() {
  const categories = [
    'Offers',
    'Burgers',
    'Fries',
    'Snacks',
    'Salads',
    'Cold drinks',
    'Happy Meal®',
    'Desserts',
    'Hot drinks',
    'Sauces',
    'Orbit®',
  ];
  const [activeCategory, setActiveCategory] = useState('Offers');

  const offers = [
    {
      title: 'First Order Discount',
      location: "McDonald's East London",
      discount: '-20%',
      image: '/offers/offer1.png',
    },
    {
      title: 'Vegan Discount',
      location: "McDonald's East London",
      discount: '-20%',
      image: '/offers/offer2.png',
    },
    {
      title: 'Free ice Cream Offer',
      location: "McDonald's East London",
      discount: '-100%',
      image: '/offers/offer3.png',
    },
  ];

  const burgers = [
    {
      title: 'Royal Cheese Burger with extra Fries',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/burger.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/burger.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/burger.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/burger.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/burger.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/burger.png',
    },
  ];

  const fries = [
    {
      title: 'Royal Cheese Burger with extra Fries',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/fries.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/fries.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/fries.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/fries.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/fries.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/fries.png',
    },
  ];



  const coldrink = [
    {
      title: 'Royal Cheese Burger with extra Fries',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/coldrink.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/coldrink.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/coldrink.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/coldrink.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/coldrink.png',
    },
    {
      title: 'The classics for 3',
      desc: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: 'GBP 23.10',
      image: '/burgers/coldrink.png',
    },
  ];


  return (
    <main className="min-h-screen bg-white text-black">


     <Header/>

     <BakerySlider/>




      {/* 🔥 Category Menu */}
      {/* <div className="bg-orange-500 py-3 px-4 mt-6 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-white font-semibold px-4 py-1 rounded-full transition-all duration-200 ${activeCategory === cat ? 'bg-black text-white' : 'hover:bg-black/30'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div> */}

      {/* Search Heading */}
      <div className="px-4 md:px-10 mt-6 mb-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">All Offers from McDonald’s East London</h2>
        {/* <input
          type="text"
          placeholder="🔍 Search from menu..."
          className="border px-4 py-2 rounded-full text-sm outline-none w-64"
        /> */}
      </div>

      {/* Offers Section */}
      <div className="px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map((offer, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden shadow-md">
            <Image src={offer.image} alt={offer.title} width={400} height={200} className="object-cover w-full h-48" />
            <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              {offer.discount}
            </div>
            <div className="absolute bottom-2 left-2 text-white">
              <p className="text-xs">{offer.location}</p>
              <h3 className="text-lg font-bold">{offer.title}</h3>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="bg-white p-1 rounded-full shadow">
                <FiPlus />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Burgers Section */}
      <div className="px-4 md:px-10 mt-10">
        <h2 className="text-xl font-bold mb-4">Burgers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {burgers.map((burger, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              {/* Left Content */}
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-semibold mb-2">{burger.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{burger.desc}</p>
                <p className="font-bold">{burger.price}</p>
              </div>

              {/* Right Image and Button */}
              <div className="flex flex-col items-center">
                <Image
                  src={burger.image}
                  alt={burger.title}
                  width={80}
                  height={80}
                  className="rounded mb-2"
                />
                <button className="bg-black text-white p-2 rounded-full">
                  <FiPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-10 mt-10">
        <h2 className="text-xl font-bold mb-4 text-amber-400">Fries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fries.map((burger, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              {/* Left Content */}
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-semibold mb-2">{burger.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{burger.desc}</p>
                <p className="font-bold">{burger.price}</p>
              </div>

              {/* Right Image and Button */}
              <div className="flex flex-col items-center">
                <Image
                  src={burger.image}
                  alt={burger.title}
                  width={80}
                  height={80}
                  className="rounded mb-2"
                />
                <button className="bg-black text-white p-2 rounded-full">
                  <FiPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="px-4 md:px-10 mt-10">
        <h2 className="text-xl font-bold mb-4 text-amber-300">coldrink</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coldrink.map((burger, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              {/* Left Content */}
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-semibold mb-2">{burger.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{burger.desc}</p>
                <p className="font-bold">{burger.price}</p>
              </div>

              {/* Right Image and Button */}
              <div className="flex flex-col items-center">
                <Image
                  src={burger.image}
                  alt={burger.title}
                  width={80}
                  height={80}
                  className="rounded mb-2"
                />
                <button className="bg-black text-white p-2 rounded-full">
                  <FiPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>





      <div className="flex flex-col gap-8 p-6 bg-gray-100">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Delivery Information */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
              <FiMapPin className="text-indigo-600" />
              Delivery information
            </h2>
            <ul className="text-sm space-y-1">
              <li><strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</li>
              <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Thursday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Friday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Saturday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Sunday:</strong> 8:00 AM–12:00 AM</li>
            </ul>
            <p className="mt-4 text-sm">
              <strong>Estimated time until delivery:</strong> 20 min
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
              <FiPhone className="text-indigo-600" />
              Contact information
            </h2>
            <p className="text-sm mb-3">
              If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.
            </p>
            <p className="text-sm mb-2"><strong>Phone number:</strong> +934443-43</p>
            <p className="text-sm"><strong>Website:</strong> <a href="http://mcdonalds.uk/" className="text-blue-500 underline">http://mcdonalds.uk/</a></p>
          </div>

          {/* Operational Times */}
          <div className="bg-indigo-950 text-white shadow-md rounded-lg p-6">
            <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
              <FiClock className="text-white" />
              Operational Times
            </h2>
            <ul className="text-sm space-y-1">
              <li><strong>Monday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Thursday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Friday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Saturday:</strong> 8:00 AM–3:00 AM</li>
              <li><strong>Sunday:</strong> 8:00 AM–3:00 AM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Map */}
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7546461239242!2d-0.0903!3d51.5046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034b8e1e3f61%3A0x646f7c33ae6ec6a!2sMcDonald's%20South%20London!5e0!3m2!1sen!2sin!4v1625560077799!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>

          {/* Info Box Overlay */}
          <div className="absolute top-6 left-6 bg-indigo-950 text-white p-5 rounded-xl shadow-lg max-w-sm">
            <h3 className="text-xl font-bold">McDonald's</h3>
            <p className="text-sm text-yellow-400 mb-2">South London</p>
            <p className="text-sm mb-1">Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
            <p className="text-sm"><strong>Phone number:</strong> +934443-43</p>
            <p className="text-sm"><strong>Website:</strong> <a href="http://mcdonalds.uk/" className="text-blue-400 underline">http://mcdonalds.uk/</a></p>
          </div>

          {/* Location Pin on Map */}
          <div className="absolute top-16 right-10 bg-white p-3 rounded-lg shadow-md flex items-center gap-2">
            <FiMapPin className="text-orange-600" />
            <span className="text-sm font-medium">McDonald's<br />South London</span>
          </div>
        </div>
      </div>






      <div className="  py-8 bg-gray-100">
        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Similar Restaurants */}
        <SimilarRestaurants />
      </div>



      <footer className="bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and App Links */}
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Order<span className="text-black">.UK</span>
            </h2>
            <div className="flex gap-2 mb-3">
              <img
                src="footer/Group.png"
                alt="App Store"
                className="w-28 h-9 object-contain"
              />
              <img
                src="/footer/Group.png"
                alt="Google Play"
                className="w-28 h-9 object-contain"
              />
            </div>
            <p className="text-sm">
              Company # 4900393-445, Registered with <br />
              House of companies.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-sm mb-2">
              Get Exclusive Deals in your Inbox
            </h3>
            <div className="flex mb-2">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="flex-1 px-3 py-2 rounded-l-md text-sm outline-none border border-gray-300"
              />
              <button className="bg-orange-400 px-4 py-2 rounded-r-md text-white text-sm font-medium hover:bg-orange-500">
                Subscribe
              </button>
            </div>
            <p className="text-xs">
              we won't spam, read our email{' '}
              <span className="underline cursor-pointer">policy</span>
            </p>
            <div className="flex gap-3 mt-3 text-lg text-gray-700">
              <FaFacebookF className="hover:text-black cursor-pointer" />
              <FaInstagram className="hover:text-black cursor-pointer" />
              <FaTiktok className="hover:text-black cursor-pointer" />
              <FaSnapchatGhost className="hover:text-black cursor-pointer" />
            </div>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Legal Pages</h4>
            <ul className="text-sm space-y-1">
              <li className="hover:underline cursor-pointer">
                Terms and conditions
              </li>
              <li className="hover:underline cursor-pointer">Privacy</li>
              <li className="hover:underline cursor-pointer">Cookies</li>
              <li className="hover:underline cursor-pointer">
                Modern Slavery Statement
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Important Links</h4>
            <ul className="text-sm space-y-1">
              <li className="hover:underline cursor-pointer">Get help</li>
              <li className="hover:underline cursor-pointer">
                Add your restaurant
              </li>
              <li className="hover:underline cursor-pointer">Sign up to deliver</li>
              <li className="hover:underline cursor-pointer">
                Create a business account
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="bg-black text-white text-xs py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>Order.uk Copyright 2024, All Rights Reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span className="hover:underline cursor-pointer">Terms</span>
              <span className="hover:underline cursor-pointer">Pricing</span>
              <span className="hover:underline cursor-pointer">
                Do not sell or share my personal information
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
