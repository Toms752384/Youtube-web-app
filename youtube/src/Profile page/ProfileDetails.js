import axios from "axios";
import { useEffect, useState, useRef } from "react";
import './ProfilePage.css';
import { useNavigate } from "react-router-dom";

function ProfileDetails({ currentVideo }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const alertShownRef = useRef(false);

    useEffect(() => {
        const fetchUser = async (userId) => {
            try {
                const response = await axios.get(`http://localhost:80/api/users/${userId}`);
                const user = response.data.loggedInUser;
                if (!user) {
                    if (!alertShownRef.current) {
                        alert("User isn't a member of our community anymore");
                        alertShownRef.current = true;
                    }
                    navigate('/video');
                    return;
                }
                setUser(user);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        if (currentVideo.userId) {
            alertShownRef.current = false; // Reset alertShownRef when userId changes
            fetchUser(currentVideo.userId);
        }
    }, [currentVideo.userId, navigate]);

    return (
        <div className="profile-details text-center">
            <img src={user.avatar} alt="Channel Avatar" className="profile-avatar" />
            <div className="profile-info">
                <div className="username">{user.username}</div>
                <div className="subscribers">{currentVideo.subscribers} subscribers</div>
                <div className="welcome-message">
                    <b>Welcome to {user.username}'s profile page!</b>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;
