/*import Personal from "./personal"
import Business from "./Business"
import Merchant from "./merchant"
import { RefObject } from "react"
interface ExploreProps{
    header:number,
    search:number,
    personal:RefObject<HTMLDivElement>,
    business:RefObject<HTMLDivElement>,
    merchant:RefObject<HTMLDivElement>,
    selectedIcon:string
}
export default function Explore({header,search,personal,business,merchant,selectedIcon}:ExploreProps){
    console.log(selectedIcon,)
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
}*/
import Personal from "./personal"
import Business from "./Business"
import Merchant from "./merchant"
import { RefObject } from "react"

interface ExploreProps {
    header: number,
    search: number,
    personal: RefObject<HTMLDivElement>,
    business: RefObject<HTMLDivElement>,
    merchant: RefObject<HTMLDivElement>,
    selectedIcon: string
}

export default function Explore({ header, search, personal, business, merchant, selectedIcon }: ExploreProps) {
    console.log(selectedIcon)
    return (
        <div className="grid grid-flow-col grid-cols-[100vw] overflow-x-auto overscroll-x-contain snap-x snap-mandatory w-screen z-0 scroll-smooth" id='explore'>
            <div className="snap-center w-screen" ref={personal}>
                <Personal header={header} search={search} selectedIcon={selectedIcon} />
            </div>
            <div className="snap-center w-screen" ref={business}>
                <Business header={header} search={search} selectedIcon={selectedIcon} />
            </div>
            <div className="snap-center w-screen" ref={merchant}>
                <Merchant header={header} search={search} selectedIcon={selectedIcon} />
            </div>
        </div>
    )
}
