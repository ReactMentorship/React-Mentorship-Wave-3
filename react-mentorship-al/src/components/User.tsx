import ProfileCard from './profilecard';
import PropTypes from 'prop-types';


export default function User(props) {
    let user = props.userProfile

    return(
        <>
            {Object.keys(user).length > 0
                ?<ProfileCard name={user.name} email={user.email} phone={user.phone} address={user.address}></ProfileCard>
                :<p>User info is not available</p>
            }
        </>
    )
}

User.propTypes = {
    userProfile: PropTypes.object
}