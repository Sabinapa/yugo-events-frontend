import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const ProfileInfo = ({ user, handleShowChangeNameModal, handleShowChangePasswordModal }) => {
    return (
        <div className="col-8 d-flex flex-column align-items-center">
            <div className="profile-picture align-content-center align-items-center">
                <img src={user.profilePicture} alt="Profile" className="img-fluid rounded-circle" />
            </div>
            <h2 className="mb-3">{user.name}</h2>
            <div className="points mb-3">
                <span><FontAwesomeIcon style={{ color: 'yellow' }} icon={faCrown} /> {user.points} points</span>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="mb-4">
                    <Button variant="primary" className='form-control' style={{ width: '250px', height: '50px', backgroundColor: 'transparent', borderColor: 'grey', color: 'grey' }} onClick={handleShowChangeNameModal}>Change Name</Button>
                </div>
                <div className="mb-2">
                    <Button variant="primary" className='form-control' style={{ width: '250px', height: '50px', backgroundColor: 'transparent', borderColor: 'grey', color: 'grey' }} onClick={handleShowChangePasswordModal}>Change Password</Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
