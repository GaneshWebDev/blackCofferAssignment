
export default function NewInvitations(){
    return(
        <div className="flex flex-col gap-6 justify-center items-center h-[100vh]" >
            <img src='binoculars.png' className="w-20 h-20"/>
            <p className="font-bold">Your connections list is <span className="text-orange-500">EMPTY</span></p>
            <button className="font-bold border px-5 py-2 dark:text-white dark:bg-gray-800 rounded-lg">Explore More</button>
        </div>
    )
}