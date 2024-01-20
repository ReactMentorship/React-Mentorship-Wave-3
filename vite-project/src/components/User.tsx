
import { CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';

interface ProfileProps {
    name: string,
    email: string,
    phone: number,
    address: string,
    openCalendar: boolean,
}

/*const DisplayCalendar = ({openCalendar}) => { 
    return openCalendar ? <EventAvailableIcon color="success"/> : <EventBusyIcon color="disabled"/>
}*/

const User = ({ name, email, phone, address, openCalendar }: ProfileProps) => {
    return(
        <><Typography variant="h3" component="div">
                {name}
            </Typography>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Information
                    </Typography>
                    <Typography variant="body2">
                        Email: {email}
                    </Typography>
                    <Typography variant="body2">
                        Phone: {phone}
                    </Typography>
                    <Typography variant="body2">
                        Address: {address}
                    </Typography>
                </CardContent>
                <CardActions sx={{display:'flex', justifyContent: 'center'}}>
                    {!openCalendar ? <EventAvailableIcon color="success"/> : <EventBusyIcon color="disabled"/>}
                </CardActions>
            </Card>
        </>
    );
};

export default User;
