import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles({
    root: {
      minWidth: 200,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    titleRed: {
      fontSize: 20,
      color:"#dc004e",
    },
    pos: {
      marginBottom: 12,
    },
  });


export default function DataCard(prop) {
    const classes = useStyles();
  let countvalue=new Intl.NumberFormat('en-IN').format(prop.Counts) ;
    console.log(countvalue);
    return (
      <Card className={classes.root} >
        <CardContent>
          <Typography className={prop.Titlecss}  gutterBottom style={{ color:  prop.color } }>
            {prop.Titletext}
          </Typography>
          <Typography variant="h3" style={{ color:  prop.color } } >
           <NumberFormat value={ prop.Counts } displayType={'text'} thousandSeparator={true} />
          </Typography>
        </CardContent>
        </Card>
    );
  }