import {React} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function SearchPage() {
  const classes = useStyles();
  
  return (
   <div> 
    <div>
    <div className={classes.root}>
    </div>
  <img height={75} width={50} src="/images/uncut-gems.jpg" alt="uncutgems"/>
  <img height={75} width={50} src="/images/sorcerer.jpg" alt="sorcerer"/>
  <img height={75} width={50} src="/images/robocop.jpg" alt="robocop"/>
  <img height={75} width={50} src="/images/sword-of-doom.jpg" alt="swordofdoom"/>
</div>
<div>
  <img height={75} width={50} src="/images/akira.jpg" alt="akira"/>
  <img height={75} width={50} src="/images/blade-runner.jpg" alt="bladerunner"/>
  <img height={75} width={50} src="/images/blow-out.jpg" alt="blowout"/>
  <img height={75} width={50} src="/images/they-live.jpg" alt="blowout"/>
  <SearchBar />
</div>
</div>

  );
}

// this allows us to use <App /> in index.js
export default SearchPage;
