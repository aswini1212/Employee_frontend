import Navbar from "./navbar";
import Aside from "./aside";
import chatIcon from "../assets/chat_icon.png"
import "/create_employee.css"
import { Outlet } from "react-router";
import { useState } from "react";
import ChatBot from "../pages/ChatBot";

function Layout() {
    const[showbot,setChatBot]=useState(false)
    function handleChatBot()
    {
        return(
            setChatBot((showbot)=>!showbot)
        )
    }

    return (
        <>
            <Navbar />

            <div className="entire_body">
                <Aside />

                <div className="entire_body_right_section">

                    <Outlet/>

                    {/* //CONDITIONAL RENDERING */}
                    {showbot && <ChatBot/>} 
                    
                    <button className="chat-btn" onClick={handleChatBot}>
                        <img src={chatIcon} className="chat-icon-image" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Layout;