import MessageIcon from "../assets/message_icon.png"
import sendIcon from "../assets/send_icon.png"
import Image from "../components/image"
import ChatIcon from "../assets/chat_icon.png"
import '/chat_bot.css'

function ChatBot(){
return(
    <div className="main_div">
        <div className="header">
         <Image src={ChatIcon} className="chat_icon"/>
         <p>Help Desk</p>
        </div>

        <div className="body">
            <div className="chat1">
                <p>Lorem Ipsum dolor sit amet</p>
            </div>
            <div className="chat2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <Image src={MessageIcon} className="message_icon"/>
            <div className="input_container">
                <input type="text" placeholder="Type your message here..."/>
                <img src={sendIcon} className="send_icon"/>
            </div>
        </div>
    </div>
)
}
export default ChatBot