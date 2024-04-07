
import axios from "axios";
import { Card, CardBody, CardSubtitle, CardText, Container,Button } from "reactstrap";
import base_url from "../api/bootApi";
import { toast } from "react-toastify";


function Courses({course,update,onUpdate}){
    const deleteCourse=(i)=>{
        axios.delete(`${base_url}/courses/${i}`).then(
            (response)=>{
                toast.success("deleted Successfully");
                update(i);
            },
            (Error)=>{
                console.log(Error);
                toast.error("something wents wrong");
            }
        )
    
        
    } 
    return(
        <div>
            <Card>
                <CardBody className="text-center">
                    <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                    <CardText>{course.discription}</CardText>
                    <Container className="text-center">
                        <Button color="danger" onClick={()=>{
                            deleteCourse(course.id);
                        }}>Delete</Button>
                        <Button color="warning m-3" onClick={
                            ()=>{
                                onUpdate(course);
                            

                            }
                        }>Update</Button>
                    </Container>
                </CardBody>
            </Card>
           
        </div>
    );
}
export default Courses;