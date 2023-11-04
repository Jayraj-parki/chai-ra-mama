"use client"
import { useDashboardContext } from '@/app/dashboard/page';
import { updateUserProfile } from '@/services/localUser/updateUserProfile';
import React, { useEffect, useState } from 'react';

const Profile = () => {
    const { userProfileData } = useDashboardContext()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [address, setAddress] = useState()
    const [contactNumber, setContactNumber] = useState()
    const updateProfileUtild = async() => {
        await updateUserProfile({ firstName, lastName, address, contactNumber, email:userProfileData?.email })
    } 
    useEffect(() => { 
        setAddress(userProfileData?.address)
        setContactNumber(userProfileData?.contactNumber)
        setFirstName(userProfileData?.firstName)
        setLastName(userProfileData?.lastName)
    }, [userProfileData])
    return (
        <div className="container my-4">
            <h3>User Profile</h3>
            <div className="card">
                <div className="card-body">
                    <div className="form-group mb-3">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" className="form-control ouline-none border-1 shadow-none" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" className="form-control ouline-none border-1 shadow-none" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control ouline-none border-1 shadow-none" id="email" name="email" value={userProfileData?.email} readOnly
                            disabled
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input type="text" className="form-control ouline-none border-1 shadow-none" id="contactNumber" name="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address">Address:</label>
                        <textarea type="text" className="form-control ouline-none border-1 shadow-none" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='row col-12 '>
                        {/* <button onClick={clearForm} type="reset" className="btn btn-dark d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">reset</button> */}
                        <button onClick={updateProfileUtild} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-2 text-center justify-content-center text-capitalize">submit</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Profile;
