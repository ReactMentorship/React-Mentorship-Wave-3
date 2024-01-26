import ProfileCard from './ProfileCard';
import PropTypes from 'prop-types';


export default function UserList(props) {
    let userList = props.userProfile;
    let user = userList[0];

    return(
        <>
            {Object.keys(userList).length > 0
                ?<ProfileCard name={user.name} email={user.email} phone={user.phone} address={user.address}></ProfileCard>
                :<p>User info is not available</p>
            }
        </>
    )
}

UserList.propTypes = {
    userProfile: PropTypes.object
}