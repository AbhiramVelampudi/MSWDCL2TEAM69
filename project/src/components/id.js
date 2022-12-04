import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import one from './CA.jpg'
import FIVE from './EL1.png'
import two from './bmw.jpg'
import three from './benz.jpg'
import { Button } from '@mui/material';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Id() {

  return (<div  >
    <h1>Some men take good care of a car, others treat it like one of the family </h1>
    <div style={{display:'flex',flexWrap:'noWrap'}}>
    <Card sx={{ maxWidth: 650, minHeight: 350, margin :8}}>
      
      <CardMedia
      
      sx={{ maxWidth: 450 }}
      component="img"
      alt="man"
      height="250"
        image={one}
      />
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
        <b>-SELL CARS-</b><br></br>
        <b> AUTOMOBILE SERVICES</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>email: ams67@gmail.com</b><br></br>
                    <b>mobile: 89465619163</b><br></br>
          <b>Status: Active</b>
          <br></br>
          <Link to="/adds">
          <Button variant='error'>select</Button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 650, minHeight: 350, margin :8}}>
      
      <CardMedia
      
        sx={{ maxWidth: 450 }}
        component="img"
        alt="man"
        height="250"
        image={FIVE}
      />
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
        <b>-SERVICES-</b><br></br>
        <b>AUTOMOBILE SERVICES </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>email: ams67@gmail.com</b><br></br>
                    <b>mobile: 89465619163</b><br></br>
          <b>Status: Active</b>
          <br></br>
          <Link to="/ha">
          <Button variant='error'>select</Button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <br/>
    
    </div>
    <h3>💗THANK YOU FOR CHOOSING US💗</h3>
    </div>
    
  );
}