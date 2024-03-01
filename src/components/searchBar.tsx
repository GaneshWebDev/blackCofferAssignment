import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import {useRef,useLayoutEffect,Dispatch, SetStateAction} from 'react';
interface SearchProps {
    margin: number;
    fun:  Dispatch<SetStateAction<number>>
}
export default function Search({margin,fun}:SearchProps){
    const elementRef = useRef<HTMLDivElement>(null);
        /* getting height of search bar dynamically so that it below elements can auto automatically adjust margin tops to avoid overlapping */
        /* as you can see we use marign as for top so it adjust automatically */
    useLayoutEffect(() => {
        function handleResize() {
          if (elementRef.current !== null && elementRef.current !== undefined) {
            const height = elementRef.current.offsetHeight;
            fun(height);
          }
        }
    
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [elementRef])
    return(
    <div className="flex gap-7 w-screen items-center justify-center z-40  fixed   border-b p-2 bg-white border-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-400 " style={{ top: margin }}  ref={elementRef}>
        <form className="max-w-md  w-[50%]">   
            <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ...." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        <AdjustmentsHorizontalIcon className="h-8 w-8 cursor-pointer"/>
    </div>
    )
}