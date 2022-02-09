import React from 'react';
import {Container, makeStyles} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    container: {
        paddingTop: theme.spacing(10)
    }
}))


const RightBar = () => {
    const classes = useStyles();
  return <Container className={classes.container}>right</Container>;
};

export default RightBar;
