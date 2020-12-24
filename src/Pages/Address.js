/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
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
          borderColor: 'gainsboro',
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
            width: '90%',
        },
    },
}));


export const Address = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{backgroundColor:"#f5f5f5", height:"calc(100vh)"}}>
                    <div class="container" style={{ backgroundColor: "white" }}></div>
                    <Navbar />
                    <section class="bodypanelmian" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                            <section className="aboutseller">
                                <div className="sellerlocation" style={{ backgroundColor: "white" }}>
                                    <p style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        fontSize:"18px",
                                    }}>Enter Your Shipping Address</p>
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <CssTextField
                                            className={`${classes.margin}`}
                                            required="true"
                                            label="Phone No"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                        
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Email"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                         
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Full Name"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                         
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Address"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />                                         
                                        <CssTextField
                                            className={classes.margin}
                                            required="true"
                                            label="Pin code"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                        />         
                                                        
                                    </form>
                                    <div class="container" style={{ width: '93%' }}>
                                        <div class="row" style={{marginTop:"10px", marginBottom:"10px"}}>
                                            <div class="col-6">
                                                <CssTextField
                                                className={classes.margin}
                                                required="true"
                                                label="Locality"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                style={{marginRight:"-0.5rem"}}
                                            />                                                
                                        </div>
                                            <div class="col-6">
                                                <CssTextField
                                                className={classes.margin}
                                                required="true"
                                                label="City"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                style={{marginLeft:"-0.5rem"}}
                                            />                                               
                                         </div>
                                        </div>
                                        <div class="row" style={{marginTop:"10px", marginBottom:"10px"}}>
                                            <div class="col-6">
                                                <CssTextField
                                                    className={classes.margin}
                                                    required="true"
                                                    label="State"
                                                    variant="outlined"
                                                    id="custom-css-outlined-input"
                                                    style={{marginRight:"-0.5rem"}}
                                                />                                                
                                            </div>
                                            <div class="col-6">
                                                <CssTextField
                                                className={classes.margin}
                                                required="true"
                                                label="Landmark"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                style={{marginLeft:"-0.5rem"}}
                                            />    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container">
                                        <div class="row">
                                             <p style={{fontSize:"14px",color:"grey",margin:"0.5rem 1rem"}}>Address Type</p>
                                         </div>
                                         <div class="row">
                                             <div class="col-4" style={{marginRight:"0.3rem"}}>
                                                <button className="btn" style={{ padding: "4% 3%", border: "#c2172e solid 2px", borderRadius:"3px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", backgroundColor: "white", color: "#c2172e",width:"120%" }}><b>Home</b></button>
                                             </div>
                                             <div class="col-4">
                                                <button className="btn" style={{ padding: "4% 3%", border: "gainsboro solid 2px", borderRadius:"3px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", backgroundColor: "white", color: "grey",width:"120%" }}><b>Office</b></button>
                                             </div>
                                         </div>
                                    </div>
                                    <button type="button" class="btn btn-danger" style={{marginTop:"1.5rem",width:"100%"}}>SAVE THIS ADDRESS</button>
                                </div>
                            </section>
                    </section>
                </div>
            </div>
        </Fragment>
    );
};