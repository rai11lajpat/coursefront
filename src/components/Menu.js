import React from "react";
import { Link } from "react-router-dom";
import { ListGroup} from "reactstrap";
 const Menu=()=>{
    return(
        <>
      <ListGroup className="mt-4">
        <Link className="list-group-item list-group-item-action"  tag="a" to="/" action >Home</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action >View courses</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/delUp-course" action >Update/Delete course</Link>
        
      </ListGroup>
        </>
    );
 }

 export default Menu;