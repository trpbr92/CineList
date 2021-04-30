import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function AboutPage() {
    const classes = useStyles();

  return (

    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Search for films!" />
          <Button size="medium" variant="contained" color="primary">
      Hello World
    </Button>
    </form>


  );
}
export default AboutPage;
