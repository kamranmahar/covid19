import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DataCard from './DataCard';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
     
        width: "100%",
        height: theme.spacing(16),
      },
    },
   
  }));
export default function CountryData(prop) {
    const classes =useStyles();
    const loading ="Loading";
      console.log(prop.data.code);
        return (
          <div>
        
            <Grid container className={classes.root}  spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                  <DataCard key="1"  Titletext="Total Cases" 
                  Counts=  { prop.data.total_cases }
                  Titlecss="titleRed"
                  color="Red"
                  ></DataCard>
              </Grid>
              <Grid item xs={12}sm={6} md={3}>
                  <DataCard key="2" Titletext="Active Cases" 
                   Counts=  { prop.data.total_active_cases }
                  color="Orange"
                  classcss=""></DataCard>
              </Grid> 
              <Grid item xs={12} sm={6} md={3}>
                  <DataCard key="3" Titletext="Recovered Casses" 
                  Counts=  { prop.data.total_recovered }
                  color="green"
                  classcss=""></DataCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                  <DataCard key="3" Titletext="Fatalities" 
                  Counts=  { prop.data.total_deaths }
                  color="Red"
                  classcss=""></DataCard>
              </Grid>
          </Grid>
          </div>
          );
    
};