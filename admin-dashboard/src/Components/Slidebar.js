import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './Field.css'
import Navbar from './Navbar';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  

  const drawer = (
    <div style={{backgroundColor:"#2196f3", height:"100vh"}}>

    <img style={{borderRadius:"50%", width:"150px", marginBottom:"0px",marginTop:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljdQMeG4OEqZZ84Qif2-pcoELCkWk1dzReQ&usqp=CAU" alt="" />
      <Toolbar />
      <Divider />
      <List>
        {['Admins', 'Contacts', 'Manage Team', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{color:"white"}}>
              <ListItemIcon style={{color:"white"}}>
                {index % 2 === 0 ? <InboxIcon style={{color:"white"}}/> : <MailIcon style={{color:"white"}} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Trash'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{color:"white"}}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon style={{color:"white"}}/> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  


  const [name,setName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [address,setAddress] = useState("");
  const [data,setData] = useState([]);

  const addData = ()=>{
    if(name===""){
      alert("Please Enter First Name");
      return;
    }

    if(lastName===""){
      alert("Please Enter Last Name");
      return;
    }

    if(email===""){
      alert("Please Enter a valid email");
      return;
    }

    if(contact===""){
      alert("Please Enter contact no");
      return;
    }

    if(contact.length<8){
      alert("Please Enter a valid ContactNo");
      return;
    }

    if(address.length<7){
      alert("Please Enter a valid address");
      return;
    }


      setData([...data,{ name,lastName,email,contact,address}]);
      setName("");
      setLastName("");
      setEmail("");
  }

  

  const removeItem = (index) =>{
      let arr = data;
      arr.splice(index,1);
      setData([...arr]);
  }

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Navbar/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Button style={{height:"10vh", width:"80vw",fontSize:"50px",padding:"20px", marginBottom:"15px",textShadow:"10px 10px 10px black"}} variant="contained">CREATE USER</Button>
        <h5 style={{color:"blue"}}>Create a New User Profile</h5>
          <form action="">
          <Stack spacing={2} direction="column">
          
          <TextField onChange={(e)=>setName(e.target.value)} value={name}  id="filled-basic" label="First Name" variant="filled" />
          <TextField onChange={(e)=>setLastName(e.target.value)} id="filled-basic" label="Last Name" variant="filled" />
          <TextField onChange={(e)=>setEmail(e.target.value)} id="filled-basic" label="Email" variant="filled" />
          <TextField onChange={(e)=>setContact(e.target.value)} id="filled-basic" label="Contact No" variant="filled" />
          <TextField onChange={(e)=>setAddress(e.target.value)} id="filled-basic" label="Address 1" variant="filled" />
          
          <Button onClick={addData} variant="contained">Create new user</Button>
          </Stack>
          </form>

            <br /><br />

          {
            data.map((val,index)=>{
              return(
                <div className="field_val">
                <h5>{val.name+" "}</h5>
                <h5>{val.lastName}</h5>
                <h5>{val.email}</h5>
                <h5>{val.contact}</h5>
                <h5>{val.address}</h5>
                <h5 className='delete-btn' onClick={()=>removeItem(index)}><DeleteForeverIcon fontSize='large'/></h5>
              </div>
              )
            })
      
          }
          
         
        
        <Typography paragraph>
          
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;