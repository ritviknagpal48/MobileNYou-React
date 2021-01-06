import React, { Fragment } from 'react';
import {RedNavbar} from "../Components/RedNavbar";
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import {
    fade,
    ThemeProvider,
    withStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#c2172e',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'gray',
        },
        '&:hover fieldset': {
          borderColor: 'gainsboro',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#c2172e',
        },
      },
    },
  })(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1.5),
            width: '94%',
            backgroundColor:"white",
            padding: '-100px'
        },
    },
}));


export const Password = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{height: '100vh', backgroundColor: '#f5f5f5'}}>
                    <RedNavbar navbar="Change Password"></RedNavbar>
                    <section className="bodypanelmian aboutseller text-left">
                      <div style={{height:"5rem"}}>
                        <div class="row" style={{height:"100%", width: '100%'}}>
                            <div class="col-2" style={{display:"flex",padding:"none"}}>
                            <div class="customer-account-image">N</div>                          
                        </div>
                        <div class="col-6 customer-account-details" style={{marginLeft:"1.4rem"}}>
                            <p style={{fontSize:"18px",marginTop:"0.3rem"}}>NEERAJ</p>
                            <p style={{fontSize:"14px"}}>nesh.28feb@gmail.com</p>
                            <p style={{fontSize:"13px"}}>+91-9123410101</p>
                        </div>
                            
                        </div>
                      </div>
                      <form className={classes.root} noValidate autoComplete="off">
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="New Password"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                        
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Confirm Password"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                                        
                                    </form>
                        <div style={{position:"relative",top:"24rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <button type="button" class="btn btn-danger" style={{backgroundColor:" #c2172e",width:"90%"}}>Save Changes</button>

                        </div>

                    </section>
                </div>
            </div>
        </Fragment>
    )
}