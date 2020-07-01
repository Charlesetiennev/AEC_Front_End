
import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap'

export class Video extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return(
            <Container>
                <Row>
                    <Col xs='12'>
                    <iframe width="100%" height="100vh" src="https://www.youtube.com/embed/xAb9dWXLxmA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </Col>
                </Row>
            </Container>
        )
        }
    }
