
import axios from "axios";
import { Card, CardBody, CardSubtitle, CardText, Container,Button } from "reactstrap";
import base_url from "../api/bootApi";

const deleteCourse=(i)=>{
    axios.delete(`${base_url}/courses/${i}`).then(
        ()=>{
            console.log(`${i}`);
        },
        (Error)=>{
            console.log(Error);
        }
    )

    
}
function Courses({course}){
    
    return(
        <div>
            <Card>
                <CardBody className="text-center">
                    <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                    <CardText>{course.disc}</CardText>
                    <Container className="text-center">
                        <Button color="danger" onClick={deleteCourse(course.id)} >Delete</Button>
                        <Button color="warning m-3">Update</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
}
export default Courses;