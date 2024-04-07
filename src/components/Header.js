import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name}){
    return(
<div>
    <Card>
        <CardBody className="my-2 bg-primary">
        <h4 className="text-center my-2 text-white">Welcome to Course Registration Application</h4>

        </CardBody>
    </Card>
        </div>
    );
}

export default Header;