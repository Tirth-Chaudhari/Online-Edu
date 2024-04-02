
import { useState } from "react";
import { Link } from "react-router-dom";
import  dashboard from '../img/dashboard1.png';
import  Course from '../img/image.png';
import './navigation.css'
const NavigationBar=({isOpen,toggleSidebar})=>
{
    let size=window.innerWidth; 
    {
        if (size >= 500) {
          return (
            <>
              {isOpen && (
                <div className={`h-screen w-1/2 xs:w-1/3 sm:w-1/4 md:w-1/6 bg-blue-900 flex-col rounded-lg z-50 fixed`}>
                  <div className="flex ml-4">
                    <button onClick={toggleSidebar} className="mt-4 mr-2 text-white">X</button>
                  </div>
                  <nav className={`flex flex-col`}>
                    <ul className="mt-32 flex flex-col justify-center mb-4 space-y-8 space-x-4 mr-1 rounded-lg text-gray-100">
                      <li className="ml-4 pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/"} className="flex"><img src={dashboard} alt="Dashboard" className="w-6 mr-2" />DashBoard</Link></li>
                      <li className="pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/course"} className="flex"><img src={Course} alt="Course" className="w-6 mr-2" /> Course  </Link>  </li>
                      <li className="pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/assignment"} className="flex"><img src={Course} alt="Teachers" className="w-6 mr-2" />Assignment</Link></li>
                      <li className="pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/livestream"} className="flex"><img src={dashboard} alt="LiveStream" className="w-6 mr-2" />LiveStream</Link></li>
                    </ul>
                  </nav>
                </div>
              )}
              {!isOpen && (
                <div className={`h-screen w-20 bg-blue-900 flex-col rounded-lg z-50 fixed `}>
                  <div className="flex justify-center">
                    <button onClick={toggleSidebar} className="mt-4 mr-2 text-white">
                      <span>&#9776;</span>
                    </button>
                  </div>
                  <nav className={`flex flex-col`}>
                    <ul className="mt-32 flex flex-col justify-center mb-4 space-y-8 space-x-4 mr-1 rounded-lg text-gray-100">
                      <li className="ml-4 pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/"} className="flex"><img src={dashboard} alt="Dashboard" className="w-6 mr-2" /></Link></li>
                      <li className="pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/course"} className="flex"><img src={Course} alt="Course" className="w-6 mr-2" />   </Link>  </li>
                      <li className="pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/assignment"} className="flex"><img src={Course} alt="Teachers" className="w-6 mr-2" /></Link></li>
                      <li className="pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/livestream"} className="flex"><img src={dashboard} alt="LiveStream" className="w-6 mr-2" /></Link></li>
                    </ul>
                  </nav>
                </div>
              )}
            </>
          );
        } else {
          // handle case when size is less than 500
          return (
                <div className={`h-screen w-1/2 bg-blue-900 flex-col rounded-lg z-50 sidebar ${isOpen? 'open':''} fixed `}>
                  <div className="flex ml-4">
                    <button onClick={toggleSidebar} className="mt-4 mr-2 text-white">X</button>
                  </div>
                  <nav className={`flex flex-col`}>
                    <ul className="mt-32 flex flex-col justify-center mb-4 space-y-8 space-x-4 mr-1 rounded-lg text-gray-100">
                      <li className="ml-4 pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/"} className="flex"><img src={dashboard} alt="Dashboard" className="w-6 mr-2" />DashBoard</Link></li>
                      <li className="pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/course"} className="flex"><img src={Course} alt="Course" className="w-6 mr-2" /> Course  </Link>  </li>
                      <li className="pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/assignment"} className="flex"><img src={Course} alt="Teachers" className="w-6 mr-2" />Assignment</Link></li>
                      <li className="pl-2 hover:bg-gray-500 rounded-lg flex py-2"><Link to={"/livestream"} className="flex"><img src={dashboard} alt="LiveStream" className="w-6 mr-2" />LiveStream</Link></li>
                    </ul>
                  </nav>
                </div>

          )
        }
      }
}


export default NavigationBar;