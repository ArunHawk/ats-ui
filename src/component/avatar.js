import React from 'react'
import Popover from '@mui/material/Popover';
import Image from '../assert/image.jpg'
import {Avatar,
    Paper,
    Grid,
    ButtonBase,
    Typography

} from '@mui/material'
import { styled } from "@mui/material/styles";

import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  
  export default function Userlogo() {

    const Navi=useNavigate();

    const ASignout=()=>{
      if (window.confirm("Do you want to Logout ?")) {
        Navi("/")
      } else {
        Navi("/home")
      }
    }
    
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div >
            <Avatar variant="contained" {...bindTrigger(popupState)}
        alt="Remy Sharp"
        src={Image}
        sx={{ width: 33, height: 33,cursor:"pointer", marginTop:"3px" }}
      />
        
         
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
          

<Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 60, height: 100 }}>
           
            <Avatar alt="complex" src={Image} sx={{height:80, width:80}}/>
            

            
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <div >
            <p style={{float: "right" ,cursor:"pointer", fontSize:"12px"}} onClick={ASignout}>Sign Out</p>

            </div>
            
            <Grid item>
            <Typography gutterBottom variant="subtitle1" component="div">
                Mono Cane
              </Typography>
             
              <Typography variant="body2" color="text.secondary">
              monocane@gmail.com
              </Typography>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <a href='#'>Account Setting</a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              <a hre></a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
          </Popover>
        </div>
      )}
    </PopupState>











  )
}

