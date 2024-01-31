import ProfileCard from './ProfileCard';
import { useContext } from 'react';
import { UsersContext } from './../App';
import PropTypes from 'prop-types';

export default function UserProfile() {
    const {currentUser} = useContext(UsersContext);

    return(
        <>
            <ProfileCard user={currentUser}></ProfileCard>
        </>
    );
}
UserProfile.propTypes = {
    usersList: PropTypes.array
}