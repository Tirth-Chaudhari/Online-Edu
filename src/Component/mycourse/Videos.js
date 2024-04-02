
import { useState } from 'react';
import ReactPlayer from 'react-player'
import { useSearchParams } from 'react-router-dom';
const Videos=()=>
{
    let width=window.innerWidth;

    const CourseList=[
        {
            id:1,
            Name:'HTML Tutorial build you 15x faster',
            url:'https://www.youtube.com/watch?v=HbNfCM4ilBQ'
        },
        {
            id:1,
            Name:'React Tutorial build you best designer',
            url:'https://www.youtube.com/watch?v=iu-LBY7NXD4&t=636s'
        },
        {
            id:1,
            Name:'This Css Tutorial buile you 10x faster',
            url:'https://www.youtube.com/watch?v=iu-LBY7NXD4&t=636s'
        },
        {
            id:1,
            Name:'This Css Tutorial buile you 10x faster',
            url:'https://www.youtube.com/watch?v=iu-LBY7NXD4&t=636s'
        },
        {
            id:1,
            Name:'This Css Tutorial buile you 10x faster',
            url:'https://www.youtube.com/watch?v=iu-LBY7NXD4&t=636s'
        },
        {
            id:1,
            Name:'This Css Tutorial buile you 10x faster',
            url:'https://www.youtube.com/watch?v=iu-LBY7NXD4&t=636s'
        },
        {
            id:1,
            Name:'This Css Tutorial buile you 10x faster',
            url:'https://www.youtube.com/watch?v=iu-LBY7NXD4&t=636s'
        },
        {
            id:1,
            Name:'This Css Tutorial buile you 10x faster',
            url:'https://www.youtube.com/watch?v=iu-LBY7NXD4&t=636s'
        },
        {
            id:1,
            Name:'This Css Tutorial buile you 10x faster',
            url:'https://www.youtube.com/watch?v=iu-LBY7NXD4&t=636s'
        },


        ]
        const [isHovered,setIsHovered]=useState(false);
    return(

        <div className= {`w-full h-full ${width>=500 ? 'ml-32' :''}`}  >
           
           
            <div className={`flex flex-wrap mt-8 ml-4 mb-4 ${width<=514 ? 'justify-center items-center':''}  `} >
                {
                    CourseList.map((course,index)=>
                    {
                            return (<>                                
                                <div className='overflow-hidden m-4'>
                                <div className='w-1/6 m-4 mt-4 mb-1 shadow-md rounded-md   items-center' >
                                    <ReactPlayer url={course.url} width='300px' height='250px' light={true} controls={true}/>
                                  
                                </div>
                                <div className='p-4   mb-4 bg-gray-300 rounded-md'>{course.Name} </div>
                                </div>
                                </>

                                
                            )
                    })
                }


            </div>

        </div>
    )
}

export default Videos;