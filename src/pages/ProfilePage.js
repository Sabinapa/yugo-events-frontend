import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProfileInfo from './components/profile/ProfileInfo';
import RecentActivities from './components/profile/RecentActivities';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [showChangeNameModal, setShowChangeNameModal] = useState(false);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

    // Function to fetch user data
    const fetchUserData = async () => {
        try {
            // TODO Replace with actual API call
            const response = await fetch('https://api.example.com/user');
            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
            // TODO remove this mock user data and handle error
            setUser({
                name: 'John Doe',
                bio: 'Software Engineer | React Developer',
                profilePicture: 'https://img.freepik.com/premium-photo/black-white-drawing-bearded-man-with-beard-generative-ai_771703-36088.jpg?w=1480',
                points: 500,
                username: 'johndoe123',
                recentActivities: [
                    {
                        id: 1,
                        activity: 'Post a new project',
                        image: 'https://valtersarajevo.ba/wp-content/uploads/2019/05/shutterstock_705707587-1.jpg',
                        name: 'Titov bunker',
                        location: 'Šehidsja br. 5, Konjic 88400, Bosnia and Herzegovina',
                        stars: 4,
                        commentTitle: 'This location looks amazing!',
                        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi nec nulla.',
                        rating: 4.6,
                        peopleRated: 1460,
                    }
                ],
            });
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleCloseChangeNameModal = () => {
        setShowChangeNameModal(false);
        window.location.reload();
    };
    const handleShowChangeNameModal = () => setShowChangeNameModal(true);
    const handleCloseChangePasswordModal = () => {
        setShowChangePasswordModal(false);
        window.location.reload();
    };
    const handleShowChangePasswordModal = () => setShowChangePasswordModal(true);

    const handleChangeUsername = async () => {
        // Mock API call to change username
        console.log('Username changed');
        handleCloseChangeNameModal();
        window.location.reload();
    };

    const handleChangePassword = async () => {
        // Mock API call to change password
        console.log('Password changed');
        handleCloseChangePasswordModal();
        window.location.reload();
    };

    return (
        <div className="container vh-100">
            {user ? (
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-lg-4">
                        <ProfileInfo
                            user={user}
                            handleShowChangeNameModal={handleShowChangeNameModal}
                            handleShowChangePasswordModal={handleShowChangePasswordModal}
                        />
                    </div>
                    <div className="col-lg-8">
                        <RecentActivities user={user} />
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

            {/* Modal for Changing Name */}
            <Modal show={showChangeNameModal} onHide={handleCloseChangeNameModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="form-control" type="text" placeholder="Enter new name" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseChangeNameModal}>Close</Button>
                    <Button variant="primary" onClick={handleChangeUsername}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for Changing Password */}
            <Modal show={showChangePasswordModal} onHide={handleCloseChangePasswordModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="form-control" type="password" placeholder="Enter new password" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseChangePasswordModal}>Close</Button>
                    <Button variant="primary" onClick={handleChangePassword}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProfilePage;
