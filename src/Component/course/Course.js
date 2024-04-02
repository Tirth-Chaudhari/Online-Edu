import { Link, useNavigate } from "react-router-dom";
import { icon, search } from "../../Icons/icon";

const Course=()=>
{
    let width=window.innerWidth;
    const navigate=useNavigate();
    const getCourse=async () => 
    {
        navigate('/course/mycourse');
    }

    const CourseList=[
        {
        id:1,
        Name:'Harshad b prajapati',
        description:'IT Course',
        link:'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg'

        },
        {
            id:2,
            Name:'Alak pandey',
            description:'JEE and NEET preparation',
            link:'https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book.png'
        },
        {
            id:1,
            Name:'Harshad b prajapati',
            description:'IT Course',
            link:'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg'
    
            },
            {
                id:2,
                Name:'Alak pandey',
                description:'JEE and NEET preparation',
                link:'https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book.png'
            },
            {
                id:1,
                Name:'Harshad b prajapati',
                description:'IT Course',
                link:'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg'
        
                },
                {
                    id:2,
                    Name:'Alak pandey',
                    description:'JEE and NEET preparation',
                    link:'https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book.png'
                }]
    return(
        <div className= {`w-full h-full ${width>=500 ? 'ml-16' :''}`}   >
        
            <div className="flex justify-center  p-2 w-full shadow-md">
                
                <div  className="border border-gray-300 p-2 rounded-md w-64 bg-gray-200">
                <input
                    type="text"
                    placeholder="Search Course..."
                    className="rounded-md bg-gray-200  focus:outline-none"
                />
                <div className="w-2">{search}</div>
                </div>
                
            </div>

            <div className={`flex flex-wrap mt-8 ml-4 mb-4 ${width<=514 ? 'justify-center items-center':''}  `} >
                {
                    CourseList.map((course,index)=>
                    {
                            return (<>                                
                                
                                <div className={`flex flex-col  items-center justify-end shadow-md h-56 w-48 bg-blue-300 rounded-lg m-4 mr-0 cursor-pointer`} onClick={getCourse}>
                                <div><img src={course.link} className="w-32 h-32 mb-2 "></img></div>
                                    <div className=" hover:text-gray-600">{course.Name}</div>
                                    <div className="mb-4 hover:text-gray-600">{course.description}</div>
                                </div>
                                </>

                                
                            )
                    })
                }



            </div>
         </div>

        
    )
}

export default Course;