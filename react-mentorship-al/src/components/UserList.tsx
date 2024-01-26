import ProfileCard from './ProfileCard';
import { useContext } from 'react';
import { UsersContext } from './../App';
import PropTypes from 'prop-types';

export default function UserList() {
    const {usersList, setUsersList} = useContext(UsersContext);

    return(
        <>
            {Object.keys(usersList).length > 0
                ? usersList.map((user)=>(
                    <ProfileCard name={user.name} email={user.email} phone={user.phone} address={user.address}></ProfileCard>
                ))
                :<p>User info is not available</p>
            }
        </>
    );
}
UserList.propTypes = {
    usersList: PropTypes.array
}