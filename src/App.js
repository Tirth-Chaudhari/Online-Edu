import { useState } from "react";
import NavigationBar from "./Navigation/NavigationBar";

import { Router,Route, Routes,useLocation } from "react-router-dom";
import DashBoard from "./Component/dashboard/DashBoard";
import Course from "./Component/course/Course";
import Assignment from "./Component/assignment/Assignment";
import LiveStream from "./Component/livestream/LiveStream";
import { search } from "./Icons/icon";
import Tirth from './img/Tirth.jpg';
import { useRef,useEffect } from "react";
import TirthLogo from './img/Tirth_transparent.png';

const App=()=>
{
  const dashboardRef = useRef(null);
  const courseRef = useRef(null);
  const assignmentRef = useRef(null);
  const liveStreamRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/course':
        courseRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/assignment':
        assignmentRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/livestream':
        liveStreamRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }, [location.pathname]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
   
    return (
     <> 
      
      <div className="flex h-screen">
      <nav className="flex items-center justify-between bg-gray-800 p-1 fixed w-full top-0 mb-4">
    <button onClick={toggleSidebar} className="text-white m-2">
      <span>&#9776;</span>
    </button>
    <div className="flex items-center justify-center flex-grow">
      <div className="text-white text-xl flex items-center">
        <img src={TirthLogo} alt="Tirth Logo" className="h-28 w-28 mr-2 rounded-full" />
        <span className="font-bold">T|</span>Tirth
      </div>
    </div>
    <div className="flex-shrink-0 m-2">
      <img
        className="h-24 w-24 rounded-full"
        src={Tirth} // Replace with your image URL
        alt="Profile"
      />
    </div>
  </nav>

     
        <NavigationBar  isOpen={isOpen} toggleSidebar={toggleSidebar}/>
          
          {/* <main className="w-full">
            <Routes>
              <Route path="/" element= {<DashBoard/>}/>
              <Route path="/course" element= {<Course/>}>
              </Route>
              
              <Route path="/assignment" element= {<Assignment/>}/>
              <Route path="/livestream" element= {<LiveStream/>}/>
          </Routes>

        </main> */}
        <main className="w-full">
        <Routes>
          <Route path="/" element={<DashBoard ref={dashboardRef} />} />
          <Route path="/course" element={<Course ref={courseRef} />} />
          <Route path="/assignment" element={<Assignment ref={assignmentRef} />} />
          <Route path="/livestream" element={<LiveStream ref={liveStreamRef} />} />
        </Routes>
        </main>

        
       </div>
      </>
    )
}


export default App;