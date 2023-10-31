"use client"
import React, { useState } from 'react';

const Profile = ({ user, onUpdateProfile }) => {
    const [editableProfile, setEditableProfile] = useState({ ...user });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const clearForm = () => {

    }

    const handleSaveProfile = () => {
        // onUpdateProfile(editableProfile);
    }

    return (
        <div className="container my-4">
            <h3>User Profile</h3>
            <div className="card">
                <div className="card-body">
                    <div className="form-group mb-3">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            className="form-control ouline-none border-1 shadow-none"
                            id="firstName"
                            name="firstName"
                            value={editableProfile.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            className="form-control ouline-none border-1 shadow-none"
                            id="lastName"
                            name="lastName"
                            value={editableProfile.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control ouline-none border-1 shadow-none"
                            id="email"
                            name="email"
                            value={editableProfile.email}
                            readOnly
                            disabled
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input
                            type="text"
                            className="form-control ouline-none border-1 shadow-none"
                            id="contactNumber"
                            name="contactNumber"
                            value={editableProfile.contactNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address">Address:</label>
                        <textarea
                            type="text"
                            className="form-control ouline-none border-1 shadow-none"
                            id="address"
                            name="address"
                            value={editableProfile.address}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className='row col-12 '>
                        <button onClick={clearForm} type="reset" className="btn btn-dark d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">reset</button>
                        <button onClick={handleSaveProfile} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-2 text-center justify-content-center text-capitalize">submit</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Profile;
