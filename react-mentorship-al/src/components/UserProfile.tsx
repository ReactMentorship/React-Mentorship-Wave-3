import ProfileCard from './ProfileCard';
import { useContext, useEffect } from 'react';
import { UsersContext } from './../App';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
    const { usersList, currentUser, setCurrentUser } = useContext(UsersContext);
    let { id } = useParams();

    useEffect(()=>{
        if(Object.keys(usersList).length > 0 && Object.keys(currentUser).length == 0){
            setCurrentUser(usersList[id]);
        }
    }, [usersList]);
    return(
        <>
            {Object.keys(currentUser).length > 0
                ?<ProfileCard user={currentUser}></ProfileCard>
                :<p>User info is not available.</p>
            }
        </>
    );
}
UserProfile.propTypes = {
    usersList: PropTypes.array
}