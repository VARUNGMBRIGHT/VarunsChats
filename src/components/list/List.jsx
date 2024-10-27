import "./list.css"

import ChatList from "./ChatList/chatLi";
import Userinfo from "./userinfo/Userinfo";

const List = () => {
    return (
        <div className='list'>
            <Userinfo/>
            <ChatList/>

        </div>
    )
}


export default List