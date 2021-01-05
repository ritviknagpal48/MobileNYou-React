import React, { Fragment } from 'react';

export const JobDesc = () => {
    return (
        <Fragment>
            <div class="sellerlocation" style={{backgroundColor:"white"}}>
                <p style={{fontSize:"13px"}}><span >Business Intelligence</span><span style={{float:"right"}}><i class='bx bxs-chevron-right'></i></span></p>
                
                <p style={{marginTop:"-0.3rem",fontSize:"10px"}}>Position: 6</p>
        
                <p style={{marginTop:"0.3rem",color:"lightgrey"}}>Required Skills</p>
                
                <ul style={{marginLeft:"1rem"}}>
                    <li style={{fontSize:"9px"}}>Connecting the dots by synthesizing data from various sources to indicate</li>
                    <li style={{fontSize:"9px",opacity:"0.2",color:"grey"}}>Analysis of customer behaviour in order ro provide insight and</li>
                </ul>
            </div>
        </Fragment>
    )
}
