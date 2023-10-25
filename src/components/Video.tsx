import React from "react";
import styled from "styled-components";
import Layout from "./Layout";


export default function Video () {
    return (
        <Layout>
            <IFrame src="https://www.youtube.com/embed/M7FIvfx5J10?si=jvZT-0_5TTk79y0x&autoplay=1"
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </IFrame>
            <div id="player"></div>
        </Layout>

    );
}


const IFrame = styled.iframe`
width: 100%;
height: 100%;
`