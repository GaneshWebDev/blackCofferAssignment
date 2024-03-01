import { useEffect,useState } from "react"
interface ExploreProps{
    header:number,
    search:number,
    selectedIcon:string
}
export default function Business({header,search,selectedIcon}:ExploreProps){
    const [topM,setTop]=useState(0);
    /* using dynamic heights of header and search bar for top of this page */
    useEffect(()=>{
        setTop(header+search+5);
        console.log(search,header)
    },[header,search]);
    useEffect(()=>console.log(topM,'ii'),[topM])
    const userArray=[
        {
            name:'Farooq',
            city:'Vijayawada',
            image:'https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR7,0,140,209_AL_.jpg',
            role:'Business Man',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        },{
            name:'Manoj',
            city:'Vijayawada',
            image:'https://m.media-amazon.com/images/M/MV5BMTI3MDc4NzUyMV5BMl5BanBnXkFtZTcwMTQyMTc5MQ@@._V1_UY209_CR13,0,140,209_AL_.jpg',
            role:'Business Man',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        },{
            name:'Mahesh',
            city:'Vijayawada',
            image:'https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_UX140_CR0,0,140,209_AL_.jpg',
            role:'Business Man',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        },{
            name:'Mukesh',
            city:'Vijayawada',
            image:'https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UX140_CR0,0,140,209_AL_.jpg',
            role:'Business Man',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        },{
            name:'Bonnie Green',
            city:'Vijayawada',
            image:'data:image/jpeg;base64,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',
            role:'Business Man',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        },{
            name:'Kranthi paul',
            city:'Vijayawada',
            image:'data:image/jpeg;base64,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',
            role:'Business Man',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        },{
            name:'varun shane',
            city:'Vijayawada',
            image:'https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UY209_CR1,0,140,209_AL_.jpg',
            role:'Business Man',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        },{
            name:'Praneeth',
            city:'Vijayawada',
            image:'https://m.media-amazon.com/images/M/MV5BMTQyMTExNTMxOF5BMl5BanBnXkFtZTcwNDg1NzkzNw@@._V1_UX140_CR0,0,140,209_AL_.jpg',
            role:'Business Man',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        },{
            name:'Balu',
            city:'Vijayawada',
            image:'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY209_CR7,0,140,209_AL_.jpg',
            role:'Business Man',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        },{
            name:'pavan',
            city:'Vijayawada',
            image:'https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR7,0,140,209_AL_.jpg',
            role:'Business Man',
            intrest:['Coffee','Business','Friendship'],
            message:'Hi community! I am open to new connection'
        },
    ]
    return(
    <>
    {selectedIcon=='explore'&&<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-[90%] mx-auto overflow-y-auto" style={{marginTop:topM }}>
       {userArray.map((user)=>{
            return(
                <div className="p-1 cursor-pointer">
                <div className=" h-auto max-w-full rounded-lg  bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5 font-bold" type="button">
                            + Invite
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.image} alt="Bonnie image"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user.city} | {user.role}</span>
                        <div className="flex flex-col items-center text-center mt-4 md:mt-6">
                            <span className="text-gray-500">Coffee | Business | Friendship</span>
                            <p className="w-[60%] text-gray-900 dark:text-white">{user.message}</p>
                        </div> 
                    </div>
                </div>
    
            </div>
            )
        })}
        
    </div>}
      {selectedIcon=='contacts'&&<div className="flex flex-col gap-6 justify-center items-center h-[100vh]" >
        <img src='contact-list.png' className="w-20 h-20"/>
        <p className="font-bold">Your contact list is <span className="text-orange-500">EMPTY</span></p>
      </div>}
      {selectedIcon=='groups'&&<div className="flex flex-col gap-6 justify-center items-center h-[100vh]" >
        <img src='search.png' className="w-20 h-20"/>
        <p className="font-bold">Your explore list is <span className="text-orange-500">EMPTY</span></p>
      </div>}
    </>
    )
}