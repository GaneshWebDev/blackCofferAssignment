import Header from './header'
import { useEffect,useState,useRef } from 'react';
import { initFlowbite } from 'flowbite';
import Search from './searchBar';
import Footer from './footer';
import Explore from './explore';
import Network from './network';
import Chat from './chat';
import Intro from './into';
export default function Main() {
  const [headerHeight,setHeaderHeight]=useState(0);
  const [searchBarHeight,setSearchBarHeight]=useState(0);
  const [selectedIcon,setSelectedIcon]=useState('explore');
  const personal=useRef<HTMLDivElement | null>(null);
  const business=useRef<HTMLDivElement | null>(null);
  const merchant=useRef<HTMLDivElement | null>(null);
  const newInvitations=useRef<HTMLDivElement | null>(null);
  const allInvitations=useRef<HTMLDivElement | null>(null);
  const chats=useRef<HTMLDivElement | null>(null);
  const calls=useRef<HTMLDivElement | null>(null);
  const [exploreSelected,setExploreSelected]=useState('personal');
  const [networkSelected,setNetworkSelected]=useState('newInvitation');
  const [chatSelected,setChatSelected]=useState('chats');
   useEffect(()=>{
        initFlowbite();
   },[]);
   /*adding event lsitener to explore conatct groups page*/
   useEffect(() => {
    if (selectedIcon === 'explore' || selectedIcon==='contacts' || selectedIcon=='groups') {
      personal.current?.scrollIntoView({behavior:'smooth'});
      setExploreSelected('personal');
      setNetworkSelected('newInvitation');
      setChatSelected('chats');
      console.log(selectedIcon,'main');
        const exploreElement = document.getElementById('explore');
        if (exploreElement) {
            exploreElement.addEventListener('scroll', handleScrollExplorer);
            return () => {
                exploreElement.removeEventListener('scroll', handleScrollExplorer);
            };
        }
    }
}, [selectedIcon]);
/*adding event lsitener to network page*/
useEffect(() => {
  if (selectedIcon === 'network') {
    setExploreSelected('personal');
    setChatSelected('chats');
    const networkElement = document.getElementById('network');
    if (networkElement) {
    networkElement.addEventListener('scroll', handleScrollNetwork);
    return () => {
        networkElement.removeEventListener('scroll', handleScrollNetwork);
    };
    }
  }
}, [selectedIcon]);
/*adding event listener to chat page */
useEffect(() => {
  console.log(selectedIcon);
  if (selectedIcon === 'chat') {
    setNetworkSelected('newInvitation');
    setExploreSelected('personal');
    const chatElement = document.getElementById('chat');
    if (chatElement) {
      chatElement.addEventListener('scroll', handleScrollChat);
    return () => {
        chatElement.removeEventListener('scroll',handleScrollChat);
    };
    }
  }
}, [selectedIcon]);
/* scroll handling function for network page */
const handleScrollNetwork=()=>{
  const networkElement = document.getElementById('network');
  const newInvitationsRect = newInvitations.current.getBoundingClientRect();
  const allInvitationsRect = allInvitations.current.getBoundingClientRect();
  if (networkElement) {
      const { left: networkLeft } = networkElement.getBoundingClientRect();
      
      // Calculate the left position of each element relative to the explore container
      const newInvitationsLeft = newInvitationsRect.left - networkLeft;
      const allInvitationsLeft =  allInvitationsRect.left - networkLeft;
      if (newInvitationsLeft==0) {
          setNetworkSelected('newInvitation');
        } else if ( allInvitationsLeft==0) {
          setNetworkSelected('allInvitation');
        } 
    
  }
}
/* scroll handling function for explore contacts groups page */
const handleScrollExplorer=()=>{
  const exploreElement = document.getElementById('explore');
  const personalRect = personal.current.getBoundingClientRect();
  const businessRect = business.current.getBoundingClientRect();
  const merchantRect = merchant.current.getBoundingClientRect();
  if (exploreElement) {
      const { left: exploreLeft } = exploreElement.getBoundingClientRect();
      
      // Calculate the left position of each element relative to the explore container
      const personalLeft = personalRect.left - exploreLeft;
      const businessLeft = businessRect.left - exploreLeft;
      const merchantLeft = merchantRect.left - exploreLeft;
      if (personalLeft==0) {
          setExploreSelected('personal');
        } else if (businessLeft==0) {
          setExploreSelected('business');
        } else if (merchantLeft==0) {
          setExploreSelected('merchant');
        }
    
  }
}
/* scroll handling function for chat page */
const handleScrollChat=()=>{
  const chatElement = document.getElementById('chat');
  const chatsRect = chats.current.getBoundingClientRect();
  const callsRect = calls.current.getBoundingClientRect();
  if (chatElement) {
      const { left: chatLeft } = chatElement.getBoundingClientRect();
      
      // Calculate the left position of each element relative to the explore container
      const chatsLeft = chatsRect.left - chatLeft;
      const callsLeft =  callsRect.left - chatLeft;
      if (chatsLeft==0) {
          setChatSelected('chats');
        } else if ( callsLeft==0) {
          setChatSelected('calls');
        } 
    
  }
}
   useEffect(() => {
    console.log(searchBarHeight);
}, [searchBarHeight]);
  return (
    <>
    <div >
      <Header fun={setHeaderHeight} personal={personal} business={business} merchant={merchant} selectedIcon={selectedIcon} newInvitations={newInvitations}  allInvitations={allInvitations} exploreSelected={exploreSelected} networkSelected={networkSelected} chatSelected={chatSelected} calls={calls} chats={chats}/>
      <Search margin={headerHeight} fun={setSearchBarHeight}/>
      {(selectedIcon=='explore'|| selectedIcon=='contacts' || selectedIcon=='groups')&&<Explore header={headerHeight} search={searchBarHeight} personal={personal} business={business} merchant={merchant} newInvitations={newInvitations} selectedIcon={selectedIcon}/>}
      {selectedIcon=='network'&&<Network newInvitations={newInvitations}  allInvitations={allInvitations}/>}
      {selectedIcon=='chat'&&<Chat chats={chats} calls={calls}/>}
      <Footer selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon}/>
    </div>
    </>
  )
}