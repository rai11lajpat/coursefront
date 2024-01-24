import React, { useState } from "react";
import { Button, Container, Form, FormGroup,Input } from "reactstrap";
import { useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootApi";
import { toast } from "react-toastify";




function UpdateC(up){
    const [course,setcourse]=useState();
    const ip=up.up.id;
    console.log(ip);

    const add=(course)=>{
        axios.put(`${base_url}/courses`,{
            id:up.up.id,
            title:course.title,
            discription:course.discription
        }).then(
            (response)=>{
                console.log(response.data);
                toast.success("Updated successfully")
                //upt(ip);
            },
            (error)=>{
                console.error(error);
            }
            
        );
    }

    const handleForm=(e)=>{
        console.log(course);
        e.preventDefault();
        add(course);
        
    }
    return(
        <div>
            <h2 className="text-center my-3">
                Update course here
            </h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course id</label>
                    <Input type="text" placeholder="Enter here" id="user-id" onChange={(e)=>{
                        setcourse({...course,id:e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course title</label>
                    <Input type="test" placeholder="Enter title here" id="title" onChange={(e)=>{
                        setcourse({...course,title:e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="disc">Discription</label>
                    <Input type="textarea" placeholder="Enter Discription here" id="disc" style={{height:150}} onChange={(e)=>{
                        setcourse({...course,discription:e.target.value})
                    }}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Update</Button>
                    <Button type="reset" color="warning m-2">Clear</Button>
                </Container>

            </Form>

        </div>
    );
}

export default UpdateC;