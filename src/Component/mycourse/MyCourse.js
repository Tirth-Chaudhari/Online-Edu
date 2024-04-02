import { useNavigate } from "react-router-dom";


const MyCourse=()=>
{
    const CourseList=[
        {
            id:1,
            Name:'HTML Tutorial',
            link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoRS8_GQ4JJoTPipqgS9jWlOHY2K6sr1bUrtDVgpXZQ&s'
        },
        {
            id:1,
            Name:'React Tutorial',
            link:'https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
        },
        {
            id:1,
            Name:'CSS Tutorial',
            link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcc0UCiSKu_1ZE_m9QICMrenyt7LHhP-JofAmEY8n0g&s'
        },

        ]
        const navigate=useNavigate();
        const getTutorial=()=>
        {
            navigate("/course/mycourse/videos")
        }
    let width=window.innerWidth;
    return (
        

            <div className= {`w-full h-full ${width>=500 ? 'ml-16' :''}`}  >

            
            <div className={`flex flex-wrap mt-8 ml-4 mb-4 ${width<=514 ? 'justify-center items-center':''}  `} >
                {
                    CourseList.map((course,index)=>
                    {
                            return (<>                                
                                
                                <div className={`flex flex-col  items-center justify-end shadow-md h-56 w-48 bg-blue-300 rounded-lg m-4 mr-0 cursor-pointer`} >
                                <div><img src={course.link} className="w-32 h-32 mb-2 "></img></div>
                                    <div className=" hover:text-gray-600">{course.Name}</div>
                                    <div className="mb-2 hover:text-gray-600">{course.description}</div>
                                    <button className="mb-2 bg-red-600 text-white rounded-md p-1 pl-2 pr-2 hover:bg-red-400" onClick={getTutorial}>View PlayList</button>

                                </div>
                                </>

                                
                            )
                    })
                }


            </div>



            </div>


        
    )

}

export default MyCourse