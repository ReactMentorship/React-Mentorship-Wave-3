import ProfileCard from './ProfileCard';
import { useContext } from 'react';
import { UsersContext } from './../App';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function UserList() {
    const {usersList, setCurrentUser} = useContext(UsersContext);

    return(
        <>
            {Object.keys(usersList).length > 0
                ? usersList.map((user)=>(
                    <Link key={user.id} to={`/user/${user.id}`} onClick={() => setCurrentUser(user)}>
                        <ProfileCard user={user}></ProfileCard>
                    </Link>
                ))
                :<p>User info is not available</p>
            }
        </>
    );
}
UserList.propTypes = {
    usersList: PropTypes.array
}