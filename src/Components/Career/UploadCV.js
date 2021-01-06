import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
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

export const UploadCV = (props) => {
  const classes = useStyles();
  const [jobPos, setJobPos] = useState("");

  function JobField(e){
    setJobPos(e.target.children[0].innerHTML);
    console.log(e.target.children[0].innerHTML)
  }

  return (
    <Fragment>
      <section class="bodypanelmian aboutseller text-left">
          <div className="sellerlocation" style={{backgroundColor:"#fff"}}>
              { props.btn ? 
                    <span>
                        <h3>DIDN'T FIND ANY JOB</h3>
                        <p>Don't worry send us your CV we will contact you when we have any position matching your profile</p>
                    </span>
                :
                    <h3>APPLY FOR THIS POSITION</h3>
                
                }
              <form className={classes.root} noValidate autoComplete="off" type="">
                  <CssTextField
                      className={classes.margin}
                      required="true"
                      label="Full Name"
                      variant="outlined"
                      id="custom-css-outlined-input"
                      size="small"
                  />   
                  <CssTextField
                      className={classes.margin}
                      required="true"
                      label="Email ID"
                      variant="outlined"
                      id="custom-css-outlined-input"
                      size="small"
                  />  
                  <CssTextField
                      className={classes.margin}
                      required="true"
                      label="Contact No"
                      variant="outlined"
                      id="custom-css-outlined-input"
                      size="small"
                  />
                  {props.btn ? 
                    <CssTextField
                        className={classes.margin}
                        required="true"
                        label="--Select-Job Position"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        data-toggle="modal" 
                        data-target="#exampleModal"
                        size="small"
                        value = {jobPos}
                    />
                    :null}

                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog jobs-modal" role="document" style={{width: '80%', left:'2rem'}}>
                          <div class="modal-content">
                              <div class="modal-body">
                                  <div class="container">
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          UI/UX Designer
                                      </div>
                                  </button>
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          UX Designer
                                      </div>
                                  </button>
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          UI Developer
                                      </div>
                                  </button>
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          Automation Tester
                                      </div>
                                  </button>
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          Dev-Ops
                                      </div>
                                  </button>
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          React Developer
                                      </div>
                                  </button>
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          Node.js
                                      </div>
                                  </button>
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          PHP Developer
                                      </div>
                                  </button>
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          Graphic Designer
                                      </div>
                                  </button>
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          UI/UX Designer
                                      </div>
                                  </button>
                                  <button class="transparent-btn" data-dismiss="modal" onFocus={JobField}>
                                      <div class="row">
                                          UX Designer
                                      </div>
                                  </button>
                              </div>
                              </div>
                          </div>
                      </div>
                      </div>

                  <button className="btn btn-outline-danger">Upload Your CV</button>
                  <div className="submit-button" style={{position:"relative", display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column", top: '0rem !important'}}>
                      <button type="button" data-toggle="modal" data-target="#exampleModal2" class="btn btn-danger" style={{backgroundColor:" #c2172e",width:"30%", marginBottom: '2rem'}}>Send</button>
                  </div>
                  <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-upload-success" role="document" style={{top: '30%', left: '0.35rem'}}>
                        <div class="modal-content">
                            <div class="modal-body" style={{position:"relative", display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column", top: '0rem !important'}}>
                                <i class='bx bx-check-circle' style={{color:'green', fontSize: '8rem'}}></i>
                                <h3>Application Submitted</h3>
                                <p>Good Luck For Your Future</p>
                            </div>
                        </div>
                    </div>
                    </div>
              </form>

          </div>
      </section>
    </Fragment>
  )
}
