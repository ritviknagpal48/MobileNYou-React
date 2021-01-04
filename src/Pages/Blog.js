import React, { Fragment } from 'react';
import { Navbar } from '../Components/Navbar';
import { Card } from '../Components/Blogs/Card';
import { HorizontalCard } from '../Components/Blogs/HorizontalCard';

export const Blog = () => {


    return (
        <Fragment>
            <div class="badydiv">
                <div class="universalDiv" style={{ backgroundColor: "#F5F5F5" }}>
                    <Navbar></Navbar>
                    <section className="bodypanelmian aboutseller text-left">
                        <div className="strike-color" style={{ textAlign: "center", marginTop: "10px", marginBottom: "24px" }}>
                            <h6 className="strike-through-text"><span style={{ margin: '0 0.2rem' }}>Blogs</span></h6>
                        </div>
                        <div style={{ margin: "12px 12px 12px 12px", whiteSpace: "nowrap", overflowX: "scroll", paddingBottom: "20px" }}>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                        <div>
                            <h5 className="text-muted" style={{ margin: "10px 25px" }}><b>More Blogs</b></h5>
                        </div>
                        <div style={{paddingBottom:"10px"}}>
                            <HorizontalCard></HorizontalCard>
                            <HorizontalCard></HorizontalCard>
                            <HorizontalCard></HorizontalCard>
                        </div>
                    </section>
                </div>
                </div>
        </Fragment>
    )
}
