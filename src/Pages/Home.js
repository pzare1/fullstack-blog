import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import axios from 'axios';
import BlogSection from './BlogSection';


function Home() {
    const [food, setfood] = useState([]);
    const dataGet = async() => {
        const main = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
        const final = main.data.meals;
        setfood(final);
    }
    useEffect(() => {
        dataGet();
    }, [])
    return (
        <>
        <Nav />
        <BlogSection food={food}/>
        <Footer/>
        </>
    )
}

export default Home
