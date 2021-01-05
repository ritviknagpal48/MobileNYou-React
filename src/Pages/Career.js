import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import {JobDesc} from "../Components/Career/JobDesc"

export const Career = () => {
    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{ backgroundColor: "#F5F5F5" }}>
                    <Navbar />
                    <div className="strike-color" style={{ textAlign: "center", marginTop: "10px" }}>
                        <h6 className="strike-through-heading"><span style={{ margin: '0 0.2rem',fontSize:"18px" }}>Opening Position</span></h6>
                    </div>
                    <div style={{whiteSpace:"nowrap", overflowX:"scroll",height:"2rem",marginBottom:"-0.5rem"}}>
                        <button style={{color:"grey",border:"none",backgroundColor:"white",fontSize:"12px",padding:"0.2rem 0.4rem",width:"3rem",borderRadius:"0.2rem",margin:"0.2rem 0.3rem 0.2rem 0.8rem",display: "inline-block", whiteSpace: "break-spaces"}}>All</button>
                        <button style={{color:"grey",border:"none",backgroundColor:"white",fontSize:"12px",padding:"0.2rem 0.4rem",width:"6rem",borderRadius:"0.2rem",margin:"0 0.3rem",display: "inline-block", whiteSpace: "break-spaces"}}>Developer</button>
                        <button style={{color:"grey",border:"none",backgroundColor:"white",fontSize:"12px",padding:"0.2rem 0.4rem",width:"5rem",borderRadius:"0.2rem",margin:"0 0.3rem",display: "inline-block", whiteSpace: "break-spaces"}}>Marketing</button>
                        <button style={{color:"grey",border:"none",backgroundColor:"white",fontSize:"12px",padding:"0.2rem 0.4rem",width:"5rem",borderRadius:"0.2rem",margin:"0 0.3rem",display: "inline-block", whiteSpace: "break-spaces"}}>Designer</button>
                        <button style={{color:"grey",border:"none",backgroundColor:"white",fontSize:"12px",padding:"0.2rem 0.4rem",width:"3rem",borderRadius:"0.2rem",margin:"0 0.3rem",display: "inline-block", whiteSpace: "break-spaces"}}>All</button>
                    </div>
                    <section class="bodypanelmian aboutseller text-left">
                        <JobDesc></JobDesc>
                        <JobDesc></JobDesc>
                        <JobDesc></JobDesc>
                        <JobDesc></JobDesc>
                    </section>
                    <Footer></Footer>
                </div>
            </div>
        </Fragment>
    )
}
 