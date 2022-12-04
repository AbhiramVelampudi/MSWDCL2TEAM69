import {AppBar,Toolbar,styled} from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import p1 from './car.jpg';
import Avatar from '@mui/material/Avatar';
import './Nav.css';
const Header =styled(AppBar)`
background: #00000000
`;
const Tabs =styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`
function Navbar() {
  return (
    <div>
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>HOME</Tabs>
                <Tabs to='/ha'>SERVICES</Tabs>
                <Tabs to='/add'>SDETAILS</Tabs>
                <Tabs to='/adds'>RENEWED</Tabs>
                <Tabs to='/all'>SREQUEST</Tabs>
                <Tabs to='/alls'>RENEWD</Tabs>
                <Tabs to='/a'>API CON</Tabs>
                <Tabs to='/fb'>FEEDBACK</Tabs>
                <Tabs to='/ViewResult1'>Reviews</Tabs>

                <Tabs to='/login'>Log Out</Tabs><br/><br/>
                <Avatar src={p1}alt='car.jpg' width={40} height="40"></Avatar>
                
            </Toolbar>
        </Header>
    </div>
  )
}

export default Navbar;