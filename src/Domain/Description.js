import React, { useState, useEffect } from 'react';
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import axios from 'axios'

import '../Common/assets/css/description.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';

// image path 
import description1 from '../Common/assets/image/description1.png'
import description2 from '../Common/assets/image/description2.png'
import description3 from '../Common/assets/image/description3.png'
import description4 from '../Common/assets/image/description4.png'
import Rating from '../Common/assets/image/Rating.png'
import shop from '../Common/assets/image/white-shop.png'
import blackshop from '../Common/assets/image/black-shop.png'
import likes from '../Common/assets/image/like.png'
import unlike from '../Common/assets/image/unlike.png'
import icon1 from '../Common/assets/image/footer-facebook.png'
import icon2 from '../Common/assets/image/footer-twitter.png'
import icon3 from '../Common/assets/image/footer-pinterest.png'
import icon4 from '../Common/assets/image/footer-instagram.png'
import plant3 from '../Common/assets/image/plant_3.png'
import rating from '../Common/assets/image/Rating.png'
import add from '../Common/assets/image/addcard.png'
import remove from '../Common/assets/image/removecard.png'
import arrive1 from '../Common/assets/image/arrive1.png'
import seller1 from '../Common/assets/image/seller1.png'

import { useNavigate, useParams } from 'react-router-dom';
import { setallplantDetails,setproductIdDetails, setLikedProducts, setlikeProduct, setlikescount, setShopProducts, setshopcount, setsingleItemCount } from '../Redux/CreateSlice';
import { useDispatch, useSelector } from 'react-redux';

function Description() {
    const { isLiked, isAdded, likedProducts, likescount, shopProducts, shopcount, productIdDetails, singleItemCount } = useSelector((state) => state.usedbookr_product)
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const params = useParams()
    // const handleIncrement = () => {
    //     setValue(value + 1);
    // };
    // const handleDecrement = () => {
    //     setValue(value - 1);
    // };
    // like product click fn 
    const totallikes = likedProducts.map((data) => data.id);

    const handleLikeClick = (product) => {
        const isLikeds = product.id;

        // Check if the product ID is in the likedProducts array
        if (totallikes.includes(isLikeds)) {
            // If it's already liked, remove it from the likedProducts array
            dispatch(setLikedProducts(likedProducts.filter((likedProduct) => likedProduct.id !== isLikeds)));
            dispatch(setlikescount(likescount - 1))
        } else {
            // If it's not liked, add it to the likedProducts array
            dispatch(setLikedProducts([...likedProducts, product]));
            dispatch(setlikescount(likescount + 1))

        }
    };

    // shop product click fn 
    const totalshops = shopProducts.map((data) => data.id);

    const handleShopClick = (product, id, price) => {
        const isShops = product.id;
        // Check if the product ID is in the likedProducts array
        if (totalshops.includes(isShops)) {
            // If it's already liked, remove it from the likedProducts array
            dispatch(setShopProducts(shopProducts.filter((shopItems) => shopItems.id !== isShops)));
            dispatch(setshopcount(shopcount - 1))
        } else {
            // If it's not liked, add it to the likedProducts array
            // dispatch(setproductitemDetails([...product_item,{...data,id,amount:price,qty:1}]))
            dispatch(setShopProducts([...shopProducts, { ...product, id, amount: price, qty: 1 }]));
            dispatch(setshopcount(shopcount + 1))
        }
    };

    const buynow = () => {
        dispatch(setsingleItemCount(singleItemCount + 1))
        navigate('/Placeorder')
    }
    const product_add = () => {

    }
    const product_remove = () => {
  
    }
    const product_like = () => {
      console.log("ajith")
    }
    const all_product = () => {
      navigate('/Allproduct')
    }
    const plantproduct = async () => {
      // const { data } = await axios.get('https://webbitech.co.in/ecommerce/public/api/productlist');
      //   dispatch(setallplantDetails(data.data))
      const { data } = await axios.get('https://fakestoreapi.com/products');
      dispatch(setallplantDetails(data.data))
  
    }
    const [activeTab, setActiveTab] = useState('tab1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };


    useEffect(() => {
        dispatch(setproductIdDetails(productIdDetails))
    }, [])
    return (
        <div className='description-section'>
            <Header />
            <section className='description container-90 py-5'>
                <div className='row m-0'>
                    <div className='col-6'>
                        <div className='row m-0'>
                            <div className='col-2 py-5'>
                                <img src={description4} className='w-75 mb-2' />
                                <img src={description3} className='w-75 my-2' />
                                <img src={description2} className='w-75' />
                                <img src={description1} className='w-75 my-2' />
                            </div>
                            <div className='col-10'>
                                <img src={description4} className='w-100 h-100' />
                            </div>
                        </div>
                        <div className='text-center'>
                            {/* <button className='buynow'>Add to Cart <img src={shop} alt='shop' className='mx-2 p-0' /></button> */}
                            <button className='buynow' onClick={() => buynow()}>Buy Now <FontAwesomeIcon icon={faShop} className='mx-2' /></button>
                        </div>
                    </div>
                    <div className='col-6 description-details'>
                        {productIdDetails && productIdDetails.map((data, index) => {
                            return (
                                <>
                                    <h1>{data.title} <span className='stock'>In Stock</span></h1>
                                    <img src={Rating} alt='Rating' />
                                    <span className='review'>4 Reviews</span>
                                    <br />
                                    <span className='price pe-2'>{data.total_price}</span><span className='text-decoration-line-through rate'>{data.actual_price}</span>
                                    <button className='sales-offer'>{data.discount_price} off</button>
                                    <hr />
                                    <p>A philodendron white knight has lovely deep red stems that look a lot like pink princess philodendron stems. The leaves, however, are a deep green with bright white variegation. Not ivory, not cream. Bright white.</p>
                                    {/* <span className="mb-3 count-btn">
                                        <button
                                            className="btn sum-btn"
                                            type="button"
                                            onClick={handleDecrement}
                                        >
                                            -
                                        </button>
                                        <span onChange={(e) => setValue(parseInt(e.target.value, 10) || 0)} className='mx-4 count-value'>{value}</span>
                                        <button
                                            className="btn sum-btn"
                                            type="button"
                                            onClick={handleIncrement}
                                        >
                                            +
                                        </button>
                                    </span> */}
                                    <button className={totalshops.includes(data.id) ? 'add-card' : 'shop-card'} onClick={() => handleShopClick(data, data.id, data.total_price)}>Add to Cart <img src={totalshops.includes(data.id) ? shop : blackshop} alt='shop' className='mx-2 p-0' /></button>
                                    <img src={totallikes.includes(data.id) ? likes : unlike} alt='heart' className='mx-2' onClick={() => handleLikeClick(data)} />
                                    <h4 className='cate my-4'>Category:<span>Indoor Plant</span></h4>
                                    <div className='my-3'>
                                        <span className='icon-plant'>Plant Info : </span>
                                        <img src={icon1} className='me-3' />
                                        <img src={icon2} className='me-3' />
                                        <img src={icon3} className='me-3' />
                                        <img src={icon4} className='me-3' />
                                    </div>
                                </>
                            )
                        })}

                        <Nav tabs>
                            <NavItem className='plant-content'>
                                <NavLink
                                    className={activeTab === 'tab1' ? 'active' : ''}
                                    onClick={() => toggleTab('tab1')}
                                >
                                    Descriptions
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === 'tab2' ? 'active' : ''}
                                    onClick={() => toggleTab('tab2')}
                                >
                                    Additional Information
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === 'tab3' ? 'active' : ''}
                                    onClick={() => toggleTab('tab3')}
                                >
                                    Customer Feedback
                                </NavLink>
                            </NavItem>
                            {/* Add more tabs as needed */}
                        </Nav>
                        <TabContent activeTab={activeTab} className='mt-3'>
                            <TabPane tabId="tab1">
                                <p>Nyctanthes arbor-tristis, also known as the Night-flowering jasmine or Parijat (Parvati chi phula), is a species of Nyctanthes native to South Asia and Southeast Asia. Despite its common name, the species is not a "true jasmine" and not of the genus Jasminum. The tree is sometimes called the "tree of sorrow", because the flowers lose their brightness during daytime; the scientific name arbor-tristis also means "sad tree".</p>
                            </TabPane>
                            <TabPane tabId="tab2">
                                <p>Nyctanthes arbor-tristis, also known as the Night-flowering jasmine or Parijat (Parvati chi phula), is a species of Nyctanthes native to South Asia and Southeast Asia. Despite its common name, the species is not a "true jasmine" and not of the genus Jasminum. The tree is sometimes called the "tree of sorrow", because the flowers lose their brightness during daytime; the scientific name arbor-tristis also means "sad tree".</p>
                            </TabPane>
                            <TabPane tabId="tab3">
                                <p>Nyctanthes arbor-tristis, also known as the Night-flowering jasmine or Parijat (Parvati chi phula), is a species of Nyctanthes native to South Asia and Southeast Asia. Despite its common name, the species is not a "true jasmine" and not of the genus Jasminum. The tree is sometimes called the "tree of sorrow", because the flowers lose their brightness during daytime; the scientific name arbor-tristis also means "sad tree".</p>
                            </TabPane>
                            {/* Add more TabPanes as needed */}
                        </TabContent>
                    </div>
                </div>
                <div className='best-seller mt-5'>
                    <h1 className='product-title text-center pt-5'>Related Products</h1>
                    <div className='row m-0  py-5'>
                        <div className='col-lg-3 col-sm-6 col-12 py-2'>
                            <div className={isAdded ? 'normal-box' : 'box-view'}>
                                <button className='sales-offer mt-3 mx-2'>Sale 50%</button>
                                <span className='float-end m-2'><img src={isLiked ? likes : arrive1} alt="Like Button" onClick={() => product_like()} /></span>
                                <img src={seller1} className='w-100 px-4' />
                                <div class="row m-0 pt-4 product-details">
                                    <div class="col-9">
                                        <h5>Blumenerde</h5>
                                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                                        <img src={rating} />
                                    </div>
                                    <div class="col-3">
                                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 col-12 py-2'>
                            <div className={isAdded ? 'normal-box' : 'box-view'}>
                                <button className='sales-offer mt-3 mx-2'>Sale 50%</button>
                                <span className='float-end m-2'><img src={isLiked ? likes : arrive1} alt="Like Button" onClick={() => product_like()} /></span>
                                <img src={seller1} className='w-100 px-4' />
                                <div class="row m-0 pt-4 product-details">
                                    <div class="col-9">
                                        <h5>Blumenerde</h5>
                                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                                        <img src={rating} />
                                    </div>
                                    <div class="col-3">
                                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 col-12 py-2'>
                            <div className={isAdded ? 'normal-box' : 'box-view'}>
                                <button className='sales-offer mt-3 mx-2'>Sale 50%</button>
                                <span className='float-end m-2'><img src={isLiked ? likes : arrive1} alt="Like Button" onClick={() => product_like()} /></span>
                                <img src={seller1} className='w-100 px-4' />
                                <div class="row m-0 pt-4 product-details">
                                    <div class="col-9">
                                        <h5>Blumenerde</h5>
                                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                                        <img src={rating} />
                                    </div>
                                    <div class="col-3">
                                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 col-12 py-2'>
                            <div className={isAdded ? 'normal-box' : 'box-view'}>
                                <button className='sales-offer mt-3 mx-2'>Sale 50%</button>
                                <span className='float-end m-2'><img src={isLiked ? likes : arrive1} alt="Like Button" onClick={() => product_like()} /></span>
                                <img src={seller1} className='w-100 px-4' />
                                <div class="row m-0 pt-4 product-details">
                                    <div class="col-9">
                                        <h5>Blumenerde</h5>
                                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                                        <img src={rating} />
                                    </div>
                                    <div class="col-3">
                                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Description