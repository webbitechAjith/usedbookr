import React, { useState, useEffect } from 'react';

import '../assets/css/regular.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


// image path
import headphone from '../assets/image/Headset.png'
import locations from '../assets/image/location.png'
import logo from '../assets/image/logo.png'
import shop from '../assets/image/header1.png'
import heart from '../assets/image/header2.png'
import profile from '../assets/image/header3.png'
import mobilelogo from '../assets/image/mobilelogo.png'
import whiteheart from '../assets/image/white_Heart.png'
import whiteprofile from '../assets/image/white_user.png'
import whitesearch from '../assets/image/white_search.png'
import whiteshop from '../assets/image/white_shop.png'
import whitenav from '../assets/image/whitenav.png'

import { setallplantDetails, setnavListDetails, setsearchItemDetails, setsearchProduct, setsearchfield } from '../../Redux/CreateSlice'
import axios from 'axios';


function Header() {
    const { likescount, shopcount, searchProduct, allplantsDetails, searchItemDetails, searchResults, searchfield, navListDetails } = useSelector((state) => state.usedbookr_product)
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState(allplantsDetails);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { pathname, search, hash } = location;

    const hearts = () => {
        navigate('/Wishlist')
    }
    const shops = () => {
        navigate('/Purchase')
    }
    const userProfile = () => {
        navigate('/Profile')
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 2) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleChange = async (event) => {
        const newSearchItem = event.target.value;

        // First, update the searchProduct state
        // dispatch(setsearchProduct({ ...searchProduct, searchItem: newSearchItem }));
        dispatch(setsearchProduct(newSearchItem))
        try {
            const { data } = await axios.get('https://webbitech.co.in/ecommerce/public/api/productlist');

            // Access the updated searchItem from the state
            const searchResults = data.data.filter((product) =>
                product.title.toLowerCase().includes(newSearchItem) ||
                (product.total_price >= 0 && product.total_price <= parseFloat(newSearchItem))
            );

            if (newSearchItem === '') {
                dispatch(setallplantDetails(data.data));
                dispatch(setsearchfield(true))
            } else if (searchResults.length === 0) {
                dispatch(setsearchfield(false))

            } else {
                dispatch(setallplantDetails(searchResults));
                dispatch(setsearchfield(true))

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const navlist = async () => {
        const { data } = await axios.get("https://webbitech.co.in/ecommerce/public/api/mainMenu")
        dispatch(setnavListDetails(data.data))
    }
    useEffect(() => {
        dispatch(setallplantDetails(allplantsDetails))
        dispatch(setsearchProduct(searchProduct))
        navlist()
    }, [])
    console.log(allplantsDetails)
    return (
        <>
            <div className='top-header'>
                <div className='container-90 d-lg-block d-none'>
                    <div className='row m-0 p-2'>
                        <div className='col-lg-6 col-md-12 col-12 text-start p-0'>
                            <h4><img src={locations} className='mx-2 p-0' />PO BOX:115786 - Al Warsan3, Dubai, UAE.</h4>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12 p-0'>
                            <h4 className='text-lg-end text-center phone_number'><img src={headphone} className='mx-2' />+971 42872900</h4>
                        </div>
                    </div>
                </div>
            </div>
            <header className='position-sticky top-0 sticky-header'>
                <div className={isSticky ? 'sticky-element py-1' : 'bottom-header py-2'}>
                    <div className='container-90'>
                        <div className='d-lg-block d-md-block d-none'>
                            <div className='row m-0 p-2'>
                                {/* <div className='col-lg-4 col-md-5 col-6 text-start d-flex align-items-center'>
                                    <div className="input-group input-set">
                                        <span className="input-group-text border-0 bg-none bg-white" id="searchIcon">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </span>
                                        <input type="text" className="form-control border-0" placeholder="Search our book" aria-label="Search" aria-describedby="searchButton" onChange={(val) => { dispatch(setsearchProduct({ ...searchProduct, searchItem: val.target.value })); handleChange(val) }} />
                                        <input type="text" className="form-control border-0" placeholder="Search our shop" aria-label="Search" aria-describedby="searchButton" onChange={handleChange} />
                                        <button className="btn btn-outline-secondary" type="button" id="searchButton" onClick={() => searchlist()}>search</button>
                                    </div>
                                </div> */}
                                <div className='col-lg-6 col-md-3 d-lg-block d-md-block d-none'>
                                    <img src={logo} />
                                </div>
                                <div className='col-lg-6 col-md-4 col-5 d-flex align-items-center justify-content-lg-end justify-content-md-center icon-section'>
                                    <div className='d-lg-block d-md-block d-none'>
                                        <img src={heart} alt='heart' className='mx-3 view-all' onClick={() => hearts()} />
                                        <img src={shop} alt='shop' className='mx-3 view-all' onClick={() => shops()} />
                                        <img src={profile} className='mx-3 view-all' onClick={() => userProfile()} />
                                        <span className='item-count'>{shopcount}</span>
                                        <span className='like-count'>{likescount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='nav-section'>
                    <nav className="navbar navbar-expand-lg container-90">
                        <div className="container p-0">
                            <a className="navbar-brand d-none" href="#"><img src={mobilelogo} /></a>
                            <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""><img src={whitenav} /></span>
                            </button>
                            <a className="navbar-brand d-lg-none d-md-none" href="#"><img src={mobilelogo} /></a>
                            <div className='icon-section d-lg-none d-md-none'>
                                <img src={whiteheart} alt='heart' className='mx-3 mobile-margin' onClick={() => hearts()} />
                                <img src={whiteshop} alt='shop' className='mx-3 mobile-margin' onClick={() => shops()} />
                                <img src={whiteprofile} className='mx-3 mobile-margin' onClick={() => userProfile()} />
                                <img src={whitesearch} className='mx-3 mobile-margin' />
                                <span className='item-count'>{shopcount}</span>
                                <span className='like-count'>{likescount}</span>
                            </div>
                            <div className="collapse navbar-collapse nav-list" id="navbarNavDropdown">
                                {/* <ul className="navbar-nav py-2 nav-content">
                                    {navListDetails && navListDetails.map((data, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink exact to={{ pathname: `/${data.name.toLowerCase()}`   }} className={`${pathname === `/${data.name.toLowerCase()}` ? 'active' : 'custom-active'} text-decoration-none`}>
                                                    {data.name}
                                                </NavLink>
                                            </li>
                                        )

                                    })}

                                </ul> */}
                                <div className='row m-0 w-100'>
                                    <div className='col-lg-8'>
                                        <ul className="navbar-nav py-2 nav-content">
                                            <li className='nav-item d-flex align-items-center'>
                                                <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <NavLink exact to="/package" className={`${pathname === '/package' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                    About Us
                                                </NavLink>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle option-list" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Shop Book
                                                    <FontAwesomeIcon icon={faChevronDown} style={{ color: "#fafafa", }} className='ps-2' />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </li>

                                            <li className='d-flex align-items-center'>
                                                <NavLink exact to="/about" className={`${pathname === '/about' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                    New Arrivals
                                                </NavLink>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <NavLink exact to="/faq" className={`${pathname === '/faq' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                    Contact Us
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-4 d-flex align-items-center text-end'>
                                        <div className="input-group">
                                            <input type="text" className="form-control " placeholder="Search our shop" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(val) => { dispatch(setsearchProduct({ ...searchProduct, searchItem: val.target.value })); handleChange(val) }}/>
                                            <span className="input-group-text search-btn" id="basic-addon2">Search</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header