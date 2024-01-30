import React, { useState } from 'react';
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import Useraside from '../Common/pages/Useraside'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import '../Common/assets/css/profile.css'

// image path 
import plant1 from '../Common/assets/image/description4.png'
import Rating from '../Common/assets/image/Rating.png'
import cancel from '../Common/assets/image/cancel.png'

import { useSelector, useDispatch } from 'react-redux';
import { setLikedProducts, setlikescount } from '../Redux/CreateSlice';


function Wishlist() {
    const { likedProducts, likescount } = useSelector((state) => state.usedbookr_product);
    const dispatch = useDispatch();

    const [statuslevel, setStatusLevel] = useState(true)

    const deleteitem = (id) => {
        const updatedItems = likedProducts.filter(item =>
            item.id !== id

        );
        dispatch(setLikedProducts(updatedItems))
        dispatch(setlikescount(likescount - 1))
    };
    console.log(likedProducts)
    return (
        <div>
            <Header />
            <div className='history-section'>
                <div className='container-90 pt-5'>
                    <span className='profile-head'>My Wishlist</span>
                    <div className='row m-0 py-3 wishlist-product'>
                        <div className='col-3'>
                            <Useraside />
                        </div>
                        <div className='col-9 order-card'>
                            {likedProducts.length > 0 ? <>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">price</th>
                                            <th scope="col">stock status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {likedProducts && likedProducts.map((data, index) => {
                                            return (
                                                <>
                                                    <tr className='total-wish'>
                                                        <td className='wish-product'>
                                                            <div className='row m-0 pt-2'>
                                                                <div className='col-4'>
                                                                    <img src={plant1} alt='plant1' className='w-100' />
                                                                </div>
                                                                <div className='col-8 py-4'>
                                                                    <h5>{data.title}</h5>
                                                                    <img src={Rating} />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='py-5'><h6>{data.total_price}</h6></td>
                                                        <td className='py-5'><span>In Stock</span></td>
                                                        <td className='py-5'><button>Move to Cart</button><img src={cancel} className='mx-3' onClick={() => deleteitem(data.id)} /></td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </>
                                :
                                <>
                                    <h1 className='text-center'>No Likes product</h1>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Wishlist