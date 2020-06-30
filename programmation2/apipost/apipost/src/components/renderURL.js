import React from 'react';
import {Col} from 'react-bootstrap';




export class RenderURL extends React.Component{

    render() {
        return(
                <Col lg='6'>
                Votre Lien : {this.props.grandURL}
                <br/>
                Votre nouveau lien plus court : <a href='{this.props.petitURL}'>{this.props.petitURL}</a>
                </Col>
        )
    }
}


