import React from 'react';
import { Grid ,makeStyles,Typography} from '@material-ui/core';
import HeaderBar from './HeaderBar';
import GlobalData from './GlobalData';
import MainContry from './MainContry';


const backgroundImage =
  'https://images.unsplash.com/photo-1584582868981-38dbd5d1a86e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';

const useStyle =makeStyles((theme) => ({
root :{
    flex:1,  
    
},
paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom:10,
   
  },
  header: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom:10,
    alignContent:"center",
    height:400,
   
    
  },
  
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
      height:400,
    },
  },
}));


export default function Main () {
    const classes = useStyle();
return (
    <Grid container className={classes.root} spacing={2} >
    <Grid item container xs={12} ><HeaderBar></HeaderBar> </Grid>
    <Grid item container xs={12} className={classes.header}  style={{ backgroundImage: `url(${backgroundImage})` }} >
       
        <Typography color="inherit" textAlign="center" variant="h4" >
           Covid 19 
        </Typography>
       
            <Grid item container className={classes.paper}   xs={12} >
            <GlobalData></GlobalData>
            </Grid>
       </Grid>
       
        <Grid item container xs={12} className={classes.paper}>
           
            <MainContry></MainContry>
        
        </Grid>
    </Grid>
);
};