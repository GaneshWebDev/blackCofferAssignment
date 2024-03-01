import NewInvitations from "./newInvitations";
import AllInvitations from "./allInvitations";
import { RefObject } from "react";
interface NetworkProps{
    newInvitations:RefObject<HTMLDivElement>,
    allInvitations:RefObject<HTMLDivElement>,

}
export default function Network({newInvitations,allInvitations}:NetworkProps){
    return(
    <div className="grid grid-flow-col grid-cols-[100vw] overflow-x-auto overscroll-x-contain snap-x snap-mandatory w-screen  z-0 scroll-smooth" id='network'>
        <div className="snap-center w-screen" ref={newInvitations}>
            <NewInvitations/>
        </div>
        <div className="snap-center w-screen" ref={allInvitations}>
            <AllInvitations/>
        </div>
    </div>
    )
}