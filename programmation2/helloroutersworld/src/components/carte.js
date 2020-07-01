
import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap'

export class Carte extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return(
        <Container fluid>
            <Row>
                <Col>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4816162351976!2d-72.72617168417686!3d45.41979197910043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9ce70928f7b4f%3A0x93a1e93494de8bfd!2sZoo%20de%20Granby!5e0!3m2!1sfr!2sca!4v1593561212368!5m2!1sfr!2sca" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                </Col>
            </Row>
        </Container>
            
        )
        }
    }
