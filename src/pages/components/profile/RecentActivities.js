import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const RecentActivities = ({ user }) => {
    return (
        <div className="activity-section">
            <h1 className="text-left mb-4">Recent activity</h1>
            <div className="d-flex flex-column align-items-center">
                {user.recentActivities.map(activity => (
                    <div key={activity.id} className="activity-card w-100 h-75 my-3 p-4 border rounded">
                        <div className="row">
                            <div className="col-4">
                                <div className="activity-image">
                                    <img src={activity.image} alt="Activity" className="img-fluid rounded-top" style={{ width: '100%', maxHeight: '100px', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="activity-info">
                                    <h3 className="d-flex justify-content-center align-content-center">{activity.name}</h3>
                                    <p className="d-flex justify-content-center align-content-center"><small><FontAwesomeIcon icon={faMapMarkerAlt} /> {activity.location}</small></p>
                                    <div className="stars d-flex justify-content-center align-content-center">
                                        {activity.rating}&nbsp;
                                        {[...Array(activity.stars)].map((_, index) => (
                                            <span key={index} style={{ color: 'yellow' }} className="star">&#9733;</span>
                                        ))}&nbsp;({activity.peopleRated})
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div className="activity-comment border-top pt-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div className="d-flex align-items-center">

                                                <div>
                                                    <div className="row mr-3 mb-3 mt-2 ml-0 pr-0">
                                                        <div className="col-1">
                                                            <img src={user.profilePicture} alt="Activity" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }} />
                                                        </div>
                                                        <div className="col-10 ml-0 pl-0">
                                                            <h4 className='m-3 ml-0'>{activity.commentTitle}</h4>
                                                        </div>
                                                    </div>
                                                    <div className='row ml-3'>
                                                        <small>{activity.comment}</small>
                                                        <div className='col'>
                                                            <a href="#" className="ml-2" style={{ textDecoration: 'none', color: 'grey' }}>Read more...</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <span>
                                                {activity.rating}&nbsp;{[...Array(activity.stars)].map((_, index) => (
                                                    <span key={index} style={{ color: 'yellow' }} className="star">&#9733;</span>
                                                ))}
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivities;
