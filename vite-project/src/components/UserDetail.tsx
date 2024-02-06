import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function UserDetail () {
    const location = useLocation();

	return (
		<>
			<h1>User Details</h1>
			<p>{location.state.name.first}</p>
			<p>{location.state.email}</p>
			<p>{location.state.phone}</p>
			<p>{location.state.location.city}, {location.state.location.state}, {location.state.location.country}</p>
			<div>				
				   <Link to={'/home'}>Back to Home</Link>
			</div>
		</>
	)
}