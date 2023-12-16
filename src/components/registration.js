import styles from './All.module.css'
import {
  TextField,
  Button
} from "@material-ui/core";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import {Link}  from "react-router-dom";

const Registration = () =>{
    return(
       <div className={styles.registration}>
        <h1>Registration</h1>
        <div >
      

      <form>
        <TextField
          style={{ width: "90%", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "90%", margin: "5px" }}
          type="text"
          label="Surname"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "90%", margin: "5px" }}
          type="text"
          label="email(gmail)"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "90%", margin: "5px" }}
          type="password"
          label="parol"
          variant="outlined"
        />
        <br />
        
        <br />
        <Link to="/basket" className={styles.nav__link}>
        <Button variant="contained" color="primary"
        sx={{width:'90%'}}>
          save
        </Button>
        </Link>
      </form>
    </div>
       </div>
    )
}
export default Registration;