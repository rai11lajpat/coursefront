import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import { Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootApi";
import { toast } from "react-toastify";
import UpdateC from "./UpdateC";

import { MDBDataTable } from 'mdbreact';
import { Row } from "react-bootstrap";


const Allcourse = () => {
    useEffect(() => {
        document.title = "All courses";
    }, []);


    //server calling
    const getAllCourseFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                toast.success("coursese has been loaded");
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something wents wrong");
            }
        )
    }

    useEffect(() => {
        getAllCourseFromServer();
    },[]);


    const [courses, setCourses] = useState([]);

    const updateCourse = (id) => {
        setCourses(courses.filter((c) => c.id != id));
    }



    //update Apu 
    const [update, setUpdate] = useState(false);

    const [c, setC] = useState();
    const setUp = (c) => {
        setUpdate(true);
        setC(c);
        console.log(c);
    }

    return (

        <div>
            <div>
                {
                    update && (
                        <>
                            <UpdateC up={c} upt={updateCourse} />
                        </>
                    )
                }
            </div>

            <Container>
                <div className="text-center">
                <h2>All courses</h2>
            <p>list of all courses are felllow</p>
                </div>
            

            {
                courses.length>0? courses.map((c)=>
                <div>
                    
                        
                        <div className="p-2">
                        <Courses course={c} update={updateCourse} onUpdate={setUp}/>
                        </div>
                            
                </div>
                    
                ):"No courses"
            }
            </Container>
            {/* <MDBDataTable
                striped
                bordered
                small
                data={data}
            /> */}

        </div>
    );
}
export default Allcourse;