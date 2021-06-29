import React from 'react';
import BackgroundV from '../../assets/video.mp4'
import '../../stylesheets/Video.css';
import Timer from "./Timer";
import {Button, Col, Row} from "react-bootstrap";
import {Box} from "@material-ui/core";



function Vid() {
    return (


<div className={""}>
            <video  className="video-bg" autoPlay muted loop>
                <source src={BackgroundV} type="video/mp4"/>
            </video>
<div className={"caption text-center"}>
    <h1>Conference Title </h1>
    <Button size={"lg"} variant="outline-warning">Apply Now</Button>

</div>
    <div className={"justify-content-around pb-5"}>
    <Timer/>
    </div>

</div>



    );
}

export default Vid;