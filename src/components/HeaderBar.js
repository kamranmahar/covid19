import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  
export default function HeaderBar () {
    const classes = useStyles();
return (
    <div className={classes.root}>
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            Covid -19 Tracker
          </Typography>
         <AccountCircle></AccountCircle>
        </Toolbar>
    </AppBar>
    </div>
);
};

