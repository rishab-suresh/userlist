import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// import './custom.scss';

import  asvg from  "./images/a.svg"
import  bsvg from  "./images/b.svg"
import  csvg from  "./images/c.svg"
import  dsvg from  "./images/d.svg"
import  esvg from  "./images/e.svg"
import  fsvg from  "./images/f.svg"
import  gsvg from  "./images/g.svg"
import  hsvg from  "./images/h.svg"
import  isvg from  "./images/i.svg"


export default function sidebar() {
  return (
    <ProSidebar>
    <Menu iconShape="square">
      <MenuItem icon = {<img src={asvg}/>}>Dashboard</MenuItem>
      <br/>
      <MenuItem icon = {<img src={bsvg}/>}>Users List</MenuItem>
      <br/>
      <MenuItem icon = {<img src={csvg}/>}>Report Users</MenuItem>
      <br/>
      <MenuItem icon = {<img src={dsvg}/>}>Category List</MenuItem>
      <br/>
      <MenuItem icon = {<img src={esvg}/>}>Send Notification</MenuItem>
      <br/>
      <MenuItem icon = {<img src={fsvg}/>}>Fees</MenuItem>
      <br/>
      <MenuItem icon = {<img src={gsvg}/>}>Transactions</MenuItem>
      <br/>
      <MenuItem icon = {<img src={hsvg}/>}>Featured Users</MenuItem>
      <br/>
      <MenuItem icon = {<img src={isvg}/>}>Featured Collection</MenuItem>
    </Menu>
  </ProSidebar>
  )
}




