import React from "react";
import './Home.css';
import { Button, Container } from "reactstrap";
import { useEffect } from "react";
function Home() {
    useEffect(()=>{
        document.title="Home";
    },[])
    return (
        <div>
            <div className="text-center mt-4">
            <div class="jumbotron">
                
                    <h1 className="display-3">
                        This is Course registration Application
                    </h1>
                    <p>
                        Hy1! this is course apppication by Lajpat Rai. Note.. front with react and backend with spring boot
                    </p>
                    <Container>
                        <Button color="primary" outline="primary">Start Here</Button>
                    </Container>
                </div>
            </div>

        </div>
    );
}

export default Home;