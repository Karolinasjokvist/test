import React, { Component } from 'react';
import '../../css/registerView.css';

export function RegisterView() {
    return (
        <div className="contentbox">

            <div className="sidebox"><button className="leftarrow">&#10229;</button></div>

            <div className="midbox">

                 <div className="formbox">
                    <div className="row1">Register</div>
                    <div className="row2">Enter new Username</div>
                    <div className="row3"><input className="inputbox" type="text" placeholder="GenericUsername" maxlength="45"></input></div>
                    <div className="row4">Enter new Password</div>
                    <div className="row5"><input className="inputbox" type="password" placeholder="Password123" maxlength="35"></input></div>
                 </div> 

                 <div className="bottombox">
                     <div className="row21">Already have an account? Click the square to login</div>
                     <div className="row22"> <div className="boximg"></div></div>
                 </div>
            </div>

            <div className="sidebox"> <div className="arrow">&#10230;</div> </div>
        </div>
    )
}