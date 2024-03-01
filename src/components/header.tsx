import {useState,useEffect,useRef,useLayoutEffect,RefObject} from 'react';
import { MoonIcon,SunIcon,UserIcon,UserGroupIcon,BriefcaseIcon,BuildingStorefrontIcon ,HeartIcon, ShoppingBagIcon, IdentificationIcon,HashtagIcon,PencilSquareIcon,MapPinIcon,ChatBubbleOvalLeftEllipsisIcon,PhoneIcon} from '@heroicons/react/16/solid';
interface HeaderProps {
    fun: (height: number) => void,
    selectedIcon:string,
    personal:RefObject<HTMLDivElement>,
    business:RefObject<HTMLDivElement>,
    merchant:RefObject<HTMLDivElement>,
    newInvitations:RefObject<HTMLDivElement>,
    allInvitations:RefObject<HTMLDivElement>,
    exploreSelected:string,
    networkSelected:string,
    chatSelected:string,
    chats:RefObject<HTMLDivElement>,
    calls:RefObject<HTMLDivElement>
  }
export default function Header({ fun,personal,business,merchant,selectedIcon,newInvitations,allInvitations,exploreSelected,networkSelected,chatSelected,chats,calls }: HeaderProps){
    const [theme,setTheme]=useState('light');
    const elementRef = useRef<HTMLDivElement>(null);
    console.log('header',selectedIcon);
    /* getting height of header dynamically so that it below elements can auto automatically adjust margin tops to avoid overlapping */
    useLayoutEffect(() => {
        function handleResize() {
          if (elementRef.current) {
            const height = elementRef.current.offsetHeight;
            fun(height);
          }
        }
    
        handleResize(); // initial call to get width and height of the element
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [elementRef])
    /* handling dark and light functions */
    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[theme]);
   /* dark and light function */
    const handleThemeSwitch=()=>{
        setTheme(theme==='dark'?'light':'dark');
    }
    
    return(
        <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full fixed top-0 z-50 border-b" ref={elementRef}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="download.png" className="h-8 rounded-full" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Netclan Explorer</span>
                {theme==='light'&&<MoonIcon className=' w-6 h-6 cursor-pointer' onClick={handleThemeSwitch}/>}
                {theme==='dark'&&<SunIcon  className='w-6 h-6 text-white cursor-pointer' onClick={handleThemeSwitch}/>}
            </div>
           
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="avatar.webp" alt="user photo"/>
                </button>
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Ganesh Gangula</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">GANANDgmrozo9</span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><UserIcon className='w-5 h-5'/> Profile</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><UserGroupIcon className='w-5 h-5'/>My Network</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><BriefcaseIcon className='w-5 h-5'/> Switch to Business</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><BuildingStorefrontIcon className='w-5 h-5'/>Switch to Merchant</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><HeartIcon className='w-5 h-5'/>Dating</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><img src='diamond-ring.png' className='w-5 h-5'/>Matrimony</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><ShoppingBagIcon className='w-5 h-5'/>Buy-Sell-Rent</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><BriefcaseIcon className='w-5 h-5'/>Jobs</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><IdentificationIcon className='w-5 h-5'/>Bussines Cards</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><HashtagIcon className='w-5 h-5'/>Netclan Group</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><PencilSquareIcon className='w-5 h-5'/>Notes</a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><MapPinIcon className='w-5 h-5'/>Live Location</a>
                    </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                {(selectedIcon=='explore'||selectedIcon=='contacts' || selectedIcon=='groups') &&<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li><a href="#" className={exploreSelected === 'personal' ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500": "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}  onClick={()=>{personal.current?.scrollIntoView({behavior:'smooth'}); }}>{selectedIcon=='groups'?'All':'Personal'}</a>
                    
                </li>
                <li>
                    <a href="#" className={exploreSelected === 'business' ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500": "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}  onClick={()=>{business.current?.scrollIntoView({behavior:'smooth'}); }}>{selectedIcon=='groups'?'My Groups':'Business'}</a>
                </li>
                <li>
                    <a href="#" className={exploreSelected === 'merchant' ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500": "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} onClick={()=>{merchant.current?.scrollIntoView({behavior:'smooth'}); }}>{selectedIcon=='groups'?'Events':'Merchant'}</a>
                </li>
                </ul>}
                {selectedIcon=='network'&&<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" className={networkSelected === 'newInvitation' ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500": "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}  onClick={()=>{newInvitations.current?.scrollIntoView({behavior:'smooth'}); }}>New Ivitations</a>    
                </li>
                <li>
                    <a href="#" className={networkSelected=== 'allInvitation' ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500": "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}  onClick={()=>{allInvitations.current?.scrollIntoView({behavior:'smooth'}); }}>All Invitations</a>
                </li>
                </ul>}
                {selectedIcon=='chat'&&<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" className={chatSelected === 'chats' ? "flex gap-1 items-center justify-center  py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500": "flex items-center justify-center gap-1 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}  onClick={()=>{chats.current?.scrollIntoView({behavior:'smooth'}); }}><ChatBubbleOvalLeftEllipsisIcon className='h-5 w-5'/>Chats</a>    
                </li>
                <li>
                    <a href="#" className={chatSelected=== 'calls' ? "flex gap-1 items-center justify-center  py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500": "flex items-center justify-center gap-1 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}  onClick={()=>{calls.current?.scrollIntoView({behavior:'smooth'}); }}><PhoneIcon className='h-5 w-5'/>Calls</a>
                </li>
                </ul>}
            </div>
        </div>
        </nav>

    )
}