import React, { useState } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import '../assets/css/main.css'


const Authors = () => {

    const owlOptions = {
        items: 4,
        nav: false,
        autoplay:true,
        autoplayTimeout: 4000,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                nav:false
            },
            600: {
                items: 1,
                nav:false
            },
            800: {
                items: 2,
                nav:false
            },
            1000: {
                items: 4,
            },
        },
    };
    return (
        // <div className='ps-lg-5 ps-2 py-5 '>
            <div className='d-flex '>
                <OwlCarousel className="owl-theme card-design author-card" {...owlOptions}>
                    <div className='author1 text-center'>
                        <h2>Leo Tolstoy</h2>
                    </div>
                    <div className='author2 text-center'>
                        <h2>J. K. Rowling</h2>
                    </div>
                    <div className='author3 text-center'>
                        <h2>George Orwell</h2>
                    </div>
                    <div className='author4 text-center'>
                        <h2>Lewis Carroll</h2>
                    </div>
                </OwlCarousel>
                <div className='author5'>
                    <button>View All</button>
                </div>
            </div>

        // </div>

    );
};

export default Authors;
