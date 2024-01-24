import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import { Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootApi";
import { toast } from "react-toastify";

const Allcourse=()=>{
    useEffect(()=>{
        document.title="All courses";
    },[]);


      //server calling
      const getAllCourseFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response.data);
                toast.success("coursese has been loaded");
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("something wents wrong");
            }
        )
    }

    useEffect(()=>{
        getAllCourseFromServer();
    },[]);


    const [courses,setCourses]=useState([]);
    return(
        <div>
            
            <Container>
                <div className="text-center">
                <h2>All courses</h2>
            <p>list of all courses are felllow</p>
                </div>
            

            {
                courses.length>0? courses.map((c)=>
                    <Courses course={c}/>
                ):"No coueses"
            }
            </Container>
            
        </div>
    );
}
 export default Allcourse;