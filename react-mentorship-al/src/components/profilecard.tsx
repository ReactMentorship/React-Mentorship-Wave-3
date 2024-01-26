import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';

export default function ProfileCard(props) {
    let nameInitials = props.name.replace(/[a-z]/g,'').replace(' ','');
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{ justifyContent: "center", display: "flex" }}>
                    <Avatar sx={{ width: 130, height: 130 }}>
                        <Typography variant="h2">{nameInitials}</Typography>
                    </Avatar>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">{props.name}</Typography>
                </Grid>
            </Grid>
            <div style={{ justifyContent: "center", display: "flex" }}>
                <Card sx={{width: 400}}>
                    <CardContent>
                        <Typography variant="h5">Information</Typography>
                        <Typography variant="body1">Email: {props.email}</Typography>
                        <Typography variant="body1">Phone: {props.phone}</Typography>
                        <Typography variant="body1">Address: {props.address}</Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

ProfileCard.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    address: PropTypes.string
}