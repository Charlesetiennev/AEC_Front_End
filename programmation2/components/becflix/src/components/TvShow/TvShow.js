import React from 'react'; 
import Col from 'react-bootstrap/Col';

 

export class TvShow extends React.Component{
    constructor(props){
        super(props);
        this.state =  {hovered : false};
       
    }
    onMouseOver(){
        const MouseOver = this.state.hovered === false ? true : false;
        this.setState = ({MouseOver : true});
    };
    

  

    render() {
        return (
            <>
            <Col lg='2'>
                 <img              
    src= {this.props.src}
    alt= {this.props.alt}
    title={this.props.title}
    className="img-fluid"
    onMouseOver ={this.MouseOver}
        style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`}}
        >
            </img>
            </Col>
            </>    );
    }
};

