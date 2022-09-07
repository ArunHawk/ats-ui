import { styled } from "@mui/material/styles";
import { Button,TextField } from "@mui/material";
import { createTheme } from "@mui/material";

export const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    marginTop:14,
    padding: '10px 12px 0px,0px',
    border: '1px solid',
    borderRadius:3,
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      'Montserrat',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  export const AtsTextField = styled(TextField)({
    marginTop:10,
    width:200,
    padding: '0px 12px 0px 0px',
    
    "& .MuiInputBase-root": {
        height: 40, 
        fontFamily:'Montserrat',        
    },
  }) 

  export const theme = createTheme({
      typography:{
        fontFamily:'Montserrat',
        fontSize:12,
      }
  })