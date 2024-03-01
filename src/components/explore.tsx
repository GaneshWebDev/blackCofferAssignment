import Personal from "./personal"
import Business from "./Business"
import Merchant from "./merchant"
interface ExploreProps{
    header:number,
    search:number,
    personal:HTMLDivElement,
    business:HTMLDivElement,
    merchant:HTMLDivElement,
    selectedIcon:string
}
export default function Explore({header,search,personal,business,merchant,selectedIcon}:ExploreProps){
    console.log(selectedIcon,'explore')
    return(
        <div className="grid grid-flow-col grid-cols-[100vw] overflow-x-auto overscroll-x-contain snap-x snap-mandatory w-screen  z-0 scroll-smooth" id='explore'>
            <div className="snap-center w-screen" ref={personal}>
                <Personal header={header} search={search} selectedIcon={selectedIcon}/>
            </div>
            <div className="snap-center w-screen " ref={business}>
                <Business header={header} search={search} selectedIcon={selectedIcon}/>
            </div>
            <div className="snap-center w-screen " ref={merchant}>
                <Merchant header={header} search={search} selectedIcon={selectedIcon}/>
            </div>
        </div>
        
         

    )
}