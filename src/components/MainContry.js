import React ,{ useEffect , useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

import CountryData from './CountryData';
import MainGraph from './MainGraph';
import { AllCountries } from '../../src/api/data';

const useStyles = makeStyles((theme) => ({
  root :{
      flex:1,  
      
  },
  paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBottom:10,
      margin: 10,
    },
  }));
export default function MainContry() {
    const classes =useStyles();
    const [countryCode, setCountryCode] = React.useState('US');
    const [countries,setCountries]=React.useState([]);
    const [countryData,setCocuntryData]=React.useState([]);
    
    const [isstart,setStart]=React.useState(0);

    const handleChange = (event) => {
      setStart(1);
        setCountryCode(event.target.value);
        let code=event.target.value;
        var filtereddata =  countries.filter(function(country) {
          return country.code == String(code);
        });
        
        setCocuntryData(filtereddata[0].data);
       
    };
    

    useEffect(() => {
     
      const fetchApi = async() => {
        setCountries(await AllCountries());
      }
    
     fetchApi();
  }, [setCountries]);



    return (
        <Grid container className={classes.root}  spacing={2}>
              <Grid item  container xs={12} backgroundColor="primary">
                        <Grid item container xs={3} backgroundColor="primary">
                        <FormControl >
                            <NativeSelect
                            id="demo-customized-select-native"
                            value={countryCode}
                            onChange={handleChange}                   
                            >                      
                              { countries.map((item, i) => <option key={i} value={item.code}>{item.title}</option>)}
                            
                            </NativeSelect>
                        </FormControl>
                        </Grid>
                        <Grid item container xs={9} backgroundColor="secondry">
                            <CountryData data={countryData}></CountryData>
                        </Grid> 
                </Grid>
                <Grid item container xs={12} backgroundColor="primary">
                   <MainGraph countryCode={countryCode} isstart={isstart} data={countryData} ></MainGraph>
                </Grid>
        </Grid>
      );
};