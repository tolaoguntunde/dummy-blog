import "./App.css";
import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import Add from './components/Add';
import RightBar from "./components/RightBar";
import {makeStyles}  from "@material-ui/core"


const useStyles = makeStyles(theme => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: "none"
    }
  }
}))


function App() {

  const classes = useStyles();
  
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
