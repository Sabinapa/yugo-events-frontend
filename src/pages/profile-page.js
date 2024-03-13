import React from 'react';

const ProfilePage = () => {
    const user = {
        name: 'John Doe',
        bio: '',
        profilePicture: 'https://',
    };

    return (
        <div className="profile-page">
            <div className="profile-picture">
                <img src={user.profilePicture} alt="Profile" />
            </div>
            <div className="profile-info">
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
            </div>
        </div>
    );
};

export default ProfilePage;
