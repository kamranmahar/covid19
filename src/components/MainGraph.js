import React ,{ useEffect  } from 'react';
import { GetDailyData } from '../../src/api/data';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Grid,Typography } from '@material-ui/core';

export default function MainGraph(prop) {

    const [dailyData,setDailyData]=React.useState([]);
    const [countryCode,setcountryCode]=React.useState(prop.countryCode);

            useEffect(() => {
                setcountryCode(prop.countryCode);

                const fetchApi = async() => {
                    setDailyData(await GetDailyData(prop.countryCode));
                }
            //console.log(dailyData);
            fetchApi();
            }, [prop.countryCode]);

            let confirmedValue = prop.data.total_cases
            let recoveredValue = prop.data.total_recovered;
            let deathsValue = prop.data.total_deaths;

            const pieChart = (
        
                <Pie 
                    data={{
                        labels: ['Confirmed', 'Recovered', 'Deaths'],
                        datasets: [
                            {
                                data: [confirmedValue,recoveredValue,deathsValue],
                                backgroundColor: [
                                    'rgb(0, 0, 255)',
                                    'rgb(0, 255, 0)',
                                    'rgb(255, 0, 0)',
                                ] 
                            }
                        ]
                    }}
                    options={{
                        title: { display: true, text: `(Infected vs Recovered vs Deaths) ${prop.countryCode}`},
                        plugins: {
                            labels: [
                                {
                                    render: 'percentage',
                                    precision: 0,
                                    position: 'outside'
                                }
                            ]
                        }
                    }}
                />
            );
        
           

            const barChart = (
                <Bar 
                    data={{
                        labels: ['Recovery Rate', 'Death Rate'],
                        datasets: [
                            {
                                data: [Math.round(recoveredValue/confirmedValue*100), Math.round(deathsValue/confirmedValue*100)],
                                backgroundColor: [
                                    'rgba(0, 255, 0, 0.6)',
                                    'rgba(255, 0, 0, 0.6)',
                                ]
                            }
                        ]
                    }}
                    options={{
                        plugins: {
                            labels: [
                                {
                                    render: 'value'
                                }
                            ]
                        },
                        legend: {display: false},
                        title: { display: true, text: `(% Recovery vs Death Rate) ${prop.countryCode}`},
                        scales: {
                            yAxes: [{
                                ticks: {
                                    autoSkip: true,
                                    beginAtZero: true,
                                    max: 100
                                }
                            }]
                        }
                    }}
                />
            );
        



const lineChart = (
                dailyData.length ? (
                    <Line 
                        data={{
                            labels: dailyData.map(({ date }) => date),
                            datasets: [
                                {
                                    data: dailyData.map(({ total_cases }) => total_cases),
                                    label: 'infected',
                                    borderColor: '#333fff',
                                    fill: true,
                                }, {
                                    data: dailyData.map(({ total_deaths }) => total_deaths),
                                    label: 'deaths',
                                    borderColor: 'red',
                                    fill: true,
                                }
                                , {
                                    data: dailyData.map(({ total_recoveries }) => total_recoveries),
                                    label: 'Recoviries',
                                    borderColor: 'green',
                                    fill: true,
                                }
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: true,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        autoSkip: true,
                                        beginAtZero: true,
                                        maxTicksLimit: 5
                                    }
                                }]
                            }
                        }}
                    />
                ): null
            );
            console.log("text"+prop.countryCode);
            if(prop.isstart===0)
            {
                return (
                    <Grid container  spacing={2}>
                    <Grid item container xs={12} backgroundColor="secondry">
                        
                        <Typography color="inherit" textAlign="center" variant="h4" >
                           Please select to view Conutry Details
                            </Typography>
                        
                       
                    </Grid> 
                   
                </Grid>
                );
            }else
            {
            return (
               
               
                <Grid container  spacing={2}>
                    <Grid item container xs={12} backgroundColor="secondry">
                        <Grid item container xs={6} backgroundColor="secondry">
                        {barChart}
                        </Grid> 
                        <Grid item container xs={6} backgroundColor="secondry">
                            {pieChart}
                            
                        </Grid> 
                        <Grid item container  xs={12} alignContent="center" backgroundColor="secondry">
                        {lineChart}
                        </Grid> 
                    </Grid> 
                   
                </Grid>

            );
            }
    
};