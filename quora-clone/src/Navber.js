import React from "react";
import './Navber.css'
import {Home} from "@meterial-ui/icons"

function Navber(props){
    return(
        <div className="navber">
            <div className="qHeader_Logo">
                <img src="C:\Users\ssmin\Desktop\react\quora-clone\img\Quora_logo_2015.svg.png" alt=""/>
            </div>
            <div className="qHeader_icons">
                <div className="qHeader_icon">
                    <Home/>
                </div>
                <div className="qHeader_icon">
                    <BorderAllRounded/>
                </div>
                <div className="qHeader_icon">
                    <AssigmentIndOutlined/>
                </div>
                <div className="qHeader_icon">
                    <PeopleAltOutlined/>
                </div>
                <NotificationsOutlined/>
                <div className="qHeader_icon">
                </div>
            </div>
        </div>
    );
}

export default Navber;