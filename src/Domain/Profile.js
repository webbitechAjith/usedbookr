import React from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import Useraside from '../Common/pages/Useraside'

import '../Common/assets/css/profile.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import edit from '../Common/assets/image/edit.png';
import ajith from '../Common/assets/image/ajith.jpeg'

function Profile() {
    return (
        <div className='profile-section'>
            <Header />
            <div className='account-section'>
                <div className='container-90 pt-5'>
                <span className='profile-head'>Profile</span>
                    <div className='row m-0 py-3'>
                        
                        <div className='col-3'>
                            <Useraside />
                        </div>
                        <div className='col-6'>
                            <div className='profile-card'>
                                <div className='row m-0 pt-5'>
                                    <div className='col-3'>
                                        <div class="profile-container">
                                            <img src={ajith} alt="Profile Image" class="profile-image" />
                                                <div class="edit-icon">
                                                    <img src={edit} />
                                                </div>
                                        </div>
                                    </div>
                                    <div className='col-9 profile-title'>
                                        <h2>Profile</h2>
                                        <p>General Information</p>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <div className='row m-0'>
                                        <div className='col-6'>
                                            <div class="mb-3">
                                                <label for="exampleInputFull name" class="form-label">Full name</label>
                                                <input type="text" class="form-control" placeholder='Victoria Nowak' />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div class="mb-3">
                                                <label for="exampleInputFull name" class="form-label">Your email</label>
                                                <input type="email" class="form-control" placeholder='victoria@gmail.com' />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div class="mb-3">
                                                <label for="exampleInputFull name" class="form-label">Phone Number</label>
                                                <input type="text" class="form-control" placeholder='09675 65623' />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div class="mb-3">
                                                <label for="exampleInputFull name" class="form-label">Password</label>
                                                <input type="password" class="form-control" placeholder='*****************' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <button>Update <FontAwesomeIcon icon={faArrowRight} style={{ color: '#FFF' }} className='ps-2' /></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='profile-address'>
                                <p>Billing Address</p>
                                <h4>Victoria Nowak</h4>
                                <p className='address m-0'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                                <h5>victoria@gmail.com</h5>
                                <h5>(671) 555-0110</h5>
                                <h6>Edit Address</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Profile