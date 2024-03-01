import { EyeIcon,CubeTransparentIcon,ChatBubbleBottomCenterIcon,ClipboardDocumentListIcon,HashtagIcon } from "@heroicons/react/16/solid";
interface footerProps{
    selectedIcon:string;
    setSelectedIcon:(selectedIcon: string) => void;
}
export default function Footer({selectedIcon,setSelectedIcon}:footerProps){
    return(
            <footer className="fixed bottom-0 h-[10vh] left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow flex items-center  justify-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <div className="flex flex-wrap gap-6 md:gap-28 lg:gap-46 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <div className={`flex flex-col items-center justify-center text-center  cursor-pointer ${selectedIcon=='explore'&&'text-blue-700 animate-pulse'}`} onClick={()=>setSelectedIcon('explore')}>
                        <EyeIcon className="h-6 w-6"/>
                        <span >Explore</span>
                        
                    </div>
                    <div className={`flex flex-col items-center justify-center text-center  cursor-pointer  ${selectedIcon=='network'&&'text-blue-700 animate-pulse'}`} onClick={()=>setSelectedIcon('network')}>
                        <CubeTransparentIcon className="h-6 w-6"/>
                        <span>Network</span>
                    </div >
                    <div className={`flex flex-col items-center justify-center text-center  cursor-pointer  ${selectedIcon=='chat'&&'text-blue-700 animate-pulse'}`} onClick={()=>setSelectedIcon('chat')}>
                        <ChatBubbleBottomCenterIcon className="h-6 w-6"/>
                        <span>Chat</span>
                    </div>
                    <div className={`flex flex-col items-center justify-center text-center  cursor-pointer  ${selectedIcon=='contacts'&&'text-blue-700 animate-pulse'}`} onClick={()=>setSelectedIcon('contacts')}>
                        <ClipboardDocumentListIcon className="h-6 w-6"/>
                        <span>Contacts</span>
                    </div>
                    <div className={`flex flex-col items-center justify-center text-center  cursor-pointer  ${selectedIcon=='groups'&&'text-blue-700 animate-pulse'}`} onClick={()=>setSelectedIcon('groups')}>
                        <HashtagIcon className="h-6 w-6"/>
                        <span>Groups</span>
                    </div>
                </div>
            </footer>

    )
}