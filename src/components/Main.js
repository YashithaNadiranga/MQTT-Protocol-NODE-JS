import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CardLayout from "./CardLayout";

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

function Main(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        SMART DASHBOARD - MQTT
                    </Typography>
                </Toolbar>
            </AppBar>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <CardLayout />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
