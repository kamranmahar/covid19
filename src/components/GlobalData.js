import React ,{ useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
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
  
 

export default function GlobalData() {
        const classes =useStyles();
        //const classesTopography =useStylesForTopography();

        const [globaldata,setGlobalData] = useState([]);
        const [isLoading,setisLoading] = useState(true);
    
        useEffect(() => {
            async function fetchGlobalData (){
              setisLoading(true);
                const apiresponse = await fetch("https://api.thevirustracker.com/free-api?global=stats");
                //console.log(apiresponse);
                const jsondata= await apiresponse.json();
                //console.log(jsondata);
                
                setGlobalData(jsondata);
               // console.log(jsondata.value);
                setisLoading(false);
            }
    
            fetchGlobalData();
    
        } ,[1])

    const loading ="Loading";
   // console.log(globaldata);
    //
        if(isLoading)
        {
            return (
              <Grid container className={classes.root}  spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <DataCard key="1"  Titletext="Total Cases" 
                    CardCount=  { loading }
                    Titlecss="titleRed"
                    color="Red"
                    ></DataCard>
                </Grid>
                <Grid item xs={12}sm={6} md={3}>
                    <DataCard key="2" Titletext="Active Cases" 
                    CardCount=  { loading }
                    color="Orange"
                    classcss=""></DataCard>
                </Grid> 
                <Grid item xs={12} sm={6} md={3}>
                    <DataCard key="3" Titletext="Recovered Casses" 
                    CardCount=  { loading }
                    color="green"
                    classcss=""></DataCard>
                </Grid>
                <Grid item xs={12} sm={6}md={3}>
                    <DataCard key="4" Titletext="Fatalities" 
                   color="Red"
                    CardCount=  { loading }
                    classcss=""></DataCard>
                </Grid>
            </Grid>
              
            );
        }else
        {
          let gdata =globaldata.results[0];
         return  (
          <Grid container className={classes.root}  spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
              <DataCard key="1" Titletext="Total Cases" 
              Counts=  { globaldata && globaldata.results && gdata.total_cases }
              color="Red"
              Titlecss="titleRed"></DataCard>
          </Grid>
          <Grid item xs={12}sm={6} md={3}>
              <DataCard key="2" Titletext="Active Cases" 
              Counts=  { globaldata && globaldata.results && gdata.total_active_cases }
              color="Orange"
              classcss=""></DataCard>
          </Grid> 
          <Grid item xs={12} sm={6} md={3}>
              <DataCard key="3" Titletext="Recovered Casses" 
              Counts=  { globaldata && globaldata.results && gdata.total_recovered }
              color="green"
              classcss=""></DataCard>
          </Grid>
          <Grid item xs={12} sm={6}md={3}>
              <DataCard key="4" Titletext="Fatalities" 
              Counts=   { globaldata && globaldata.results && gdata.total_deaths }
              color="Red"
              classcss=""></DataCard>
          </Grid>
      </Grid>
          )
        }

    }
        