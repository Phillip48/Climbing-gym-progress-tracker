import React from "react";
import Profile from '../components/profile/index';
import LoggedInBanner from "../components/loggedinBanner";

const ProfilePage = () => {
    return (
        <>
            <LoggedInBanner />
            <Profile />
        </>
    );
};

export default ProfilePage;