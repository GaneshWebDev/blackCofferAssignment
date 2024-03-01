import NewInvitations from "./newInvitations";
import AllInvitations from "./allInvitations";
interface NetworkProps{
    newInvitations:HTMLDivElement,
    allInvitations:HTMLDivElement,

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