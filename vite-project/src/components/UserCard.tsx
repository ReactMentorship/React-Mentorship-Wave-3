import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function UserCard({ user }) {
    return (
      <>
        <div className="card-container">
          <Card sx={{ width: 700}}>
            <CardContent>
              <Typography sx={{ fontSize: 32, }}gutterBottom>
                Information
              </Typography>
              <section className="Information">
                <Typography sx={{ fontSize: 24 }}gutterBottom>
                  Email: {user.email}
                </Typography>
                <Typography sx={{ fontSize: 24 }}gutterBottom>
                  Phone: {user.phone}
                </Typography>
                <Typography sx={{ fontSize: 24 }}gutterBottom>
                  Address: {user.address}
                </Typography>          
              </section>                               
            </CardContent>
          </Card>
        </div>
      </>
    )
}
export default UserCard