import React, { useState } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Rating from 'react-rating';


import '../assets/css/main.css'

import { setisAdded, setisIncrement, setisDecrement, setisLiked, setallplantDetails, setLikedProducts, setlikeProduct, setlikescount, setShopProducts, setshopcount } from '../../Redux/CreateSlice';


// image path 
import book1 from '../assets/image/sales1.png'
import book2 from '../assets/image/sales2.png'
import likes from '../assets/image/heart-like.png'
import unlike from '../assets/image/heart-unlike.png'
import add from '../assets/image/addcard.png'
import remove from '../assets/image/removecard.png'

import { useSelector } from 'react-redux';

const BestSeller = () => {
    const { isLiked, isAdded } = useSelector((state) => state.usedbookr_product)

    const owlOption = {
        items: 5,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1000: {
                items: 5,
            },
        },
    };

    const product_like = () => {
        console.log("ajith")
    }
    const product_add = () => {

    }
    const product_remove = () => {

    }
    return (
        <div className='py-5'>
            <OwlCarousel className="owl-theme" {...owlOption}>
                <div className='seller-book position-relative'>
                    <div className='best-seller'>
                        <img src={book1} height='300px' className='w-100 p-4' />
                        <span className='selles-offer'>Sales 50%</span>
                        <span className='like-position float-end m-2'>
                            <span className={` ${isLiked ? 'likes' : 'unlikes'} `}><img src={isLiked ? likes : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                        </span>
                        <div className='book-details p-3'>
                            <h1>Dual Ring </h1>
                            <h5>By Lisa Jewall</h5>
                            <div className='d-flex '>
                                <div className='rate-details'>
                                    <span className='new-rate'>$ 299</span> <span className='ps-2 old-rate'>$ 440</span><br />
                                    <Rating
                                        initialRating={5}
                                        emptySymbol={<i className="far fa-star" style={{ color: 'lightgray' }}></i>}
                                        fullSymbol={<i className="fas fa-star" style={{ color: '#FFA837' }}></i>}
                                        readonly={true}
                                    />
                                </div>
                                <div className='ms-auto'>
                                    {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='seller-book position-relative'>
                    <div className='best-seller'>
                        <img src={book2} height='300px' className='w-100  p-4' />
                        <span className='selles-offer'>Sales 50%</span>
                        <span className='like-position float-end m-2'>
                            <span className={` ${isLiked ? 'likes' : 'unlikes'} `}><img src={isLiked ? likes : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                        </span>
                        <div className='book-details p-3'>
                            <h1>Dual Ringa </h1>
                            <h5>By Lisa Jewalla</h5>
                            <div className='d-flex '>
                                <div className='rate-details'>
                                    <span className='new-rate'>$ 299</span> <span className='ps-2 old-rate'>$ 440</span><br />
                                    <Rating
                                        initialRating={5}
                                        emptySymbol={<i className="far fa-star" style={{ color: 'lightgray' }}></i>}
                                        fullSymbol={<i className="fas fa-star" style={{ color: '#FFA837' }}></i>}
                                        readonly={true}
                                    />
                                </div>
                                <div className='ms-auto'>
                                    {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>

    );
};

export default BestSeller;
