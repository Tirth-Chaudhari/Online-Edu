import { useState } from "react";
import NavigationBar from "./Navigation/NavigationBar";

import { Router,Route, Routes } from "react-router-dom";
import DashBoard from "./Component/dashboard/DashBoard";
import Course from "./Component/course/Course";
import Assignment from "./Component/assignment/Assignment";
import LiveStream from "./Component/livestream/LiveStream";
import { search } from "./Icons/icon";
import MyCourse from "./Component/mycourse/MyCourse";
import Video from "./Component/mycourse/Videos";
import Videos from "./Component/mycourse/Videos";

const App=()=>
{
  const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const closeSidebar=()=>
    {
      if(isOpen)
      {
        setIsOpen(!isOpen);
      }
    }
    return (
     <> 
      
      <div className="flex h-screen">
      <button onClick={toggleSidebar} className="fixed top-0 m-2"><span>&#9776;</span></button>

        <NavigationBar  isOpen={isOpen} toggleSidebar={toggleSidebar}/>
          
          <main className="w-full">
            <Routes>
              <Route path="/" element= {<DashBoard/>}/>
              <Route path="/course" element= {<Course/>}>
              </Route>
              <Route  path="/course/mycourse"  element={<MyCourse/>} />
              <Route path="/course/mycourse/videos" element={<Videos/>}/>

              <Route path="/assignment" element= {<Assignment/>}/>
              <Route path="/livestream" element= {<LiveStream/>}/>
          </Routes>

        </main>

        
       </div>
      </>
    )
}


export default App;