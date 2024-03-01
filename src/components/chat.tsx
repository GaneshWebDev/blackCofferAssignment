import Chats from "./chats"
import Calls from "./calls"
import { RefObject } from "react"
interface ChatProps{
    chats:RefObject<HTMLDivElement>,
    calls:RefObject<HTMLDivElement>,

}
export default function Chat({chats,calls}:ChatProps){
    return(
    <div className="grid grid-flow-col grid-cols-[100vw] overflow-x-auto overscroll-x-contain snap-x snap-mandatory w-screen  z-0 scroll-smooth" id='chat'>
        <div className="snap-center w-screen" ref={chats}>
            <Chats/>
        </div>
        <div className="snap-center w-screen" ref={calls}>
            <Calls/>
        </div>
    </div>
    )
}