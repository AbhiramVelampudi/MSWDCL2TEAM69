import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import o1 from './p2.jpg';
import o2 from './p3.jpg';
import p from './p4.jpg';
import a from './p1.jpg';
import { Button } from '@mui/material';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Id2() {

  return (<div  >
    <b/><h2 style={{ color: "cyan" }}>Choose a service of your Liking from below</h2>
    <div style={{display:'flex',flexWrap:'Wrap'}}>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :6}}>
      
      <CardMedia
      
        sx={{ maxWidth: 300 }}
        component="img"
        alt="man"
        height="300"
        image={o1}
      />
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
        <b>Oil change</b><br></br>
        <b>Interim Service </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Price: 500/-</b><br></br>
          <b>Available: Yes</b>
          <br></br>
          <Link to="/add">
          <Button variant="contained">Book Now</Button>
        </Link>
        <br/>
        <br/>
        <Link to="/fb">
          <Button variant="error">Feedback</Button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :6}}>
      <CardMedia
        sx={{ maxWidth: 300 }}
        component="img"
        alt="man"
        height="300"
        image={p}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>Painting</b><br></br>
        <b>Interim Service</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Price: 3000/-</b><br></br>
          <b>Available: Yes</b><br></br>
          <Link to="/add">
          <Button variant="contained">Book Now</Button>
        </Link>
        <br/>
        <br/>
        <Link to="/fb">
          <Button variant="error">Feedback</Button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :6}}>
      <CardMedia
        sx={{ maxWidth: 300 }}
        component="img"
        alt="man"
        height="300"
        image={o2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>Oil Filter Change</b><br></br>
        <b>Interim Service</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Price: 400/-</b><br></br>
                    <b>Available: Yes</b>
          <br></br>
          <Link to="/add">
          <Button variant="contained">Book Now</Button>
        </Link>
        <br/>
        <br/>
        <Link to="/fb">
          <Button variant="error">Feedback</Button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <br/>
     <Card sx={{ maxWidth: 350, minHeight: 400, margin :6}}>
      <CardMedia
        sx={{ maxWidth: 300 }}
        component="img"
        alt="man"
        height="300"
        image={a}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>Air Condisioning</b><br></br>
        <b>Full Service</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Price: 800/-</b><br></br>
          <b>Available: Yes</b><br></br>
          <Link to="/add">
          <Button variant="contained">Book Now</Button>
        </Link>
        <br/>
        <br/>
        <Link to="/fb">
          <Button variant="error">Feedback</Button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    
    </div>
    <h3>Copy Rights Reserved By Cluster-2(Team-69)</h3>
    </div>
    
  );
}