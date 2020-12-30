import React, { Fragment } from 'react';

export const RedNavbar = () => {
    return (
      <Fragment>
        <section className="bodypanelmian aboutseller text-left">
            <div style={{width:"100%",height:"3rem",backgroundColor:"#c2172e",color:"white"}}>
                                <i class='bx bx-arrow-back' style={{fontSize: "1.3rem",
                                                                    margin: "0.7rem 0.3rem",
                                                                    position: "relative",
                                                                    top: "0.1rem"}}></i>                    
                                <span style={{fontSize:"1.3rem"}}>Addresses</span>
                            </div>
        </section>
    </Fragment>
    );
};
