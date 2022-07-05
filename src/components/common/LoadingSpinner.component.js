import React from "react";
import "../../styles/scss/app.style.scss";
import ReactLoading from 'react-loading';

export default function LoadingSpinner({ loading }) {
    return (
        loading ?
            <div className="virtual-background flex-center" style={{zIndex:'99999999999'}}>
                < ReactLoading type="spinningBubbles" color="#fff" />
            </div >
            :
            <></>
    );
}