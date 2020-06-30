import React from 'react'; 

// import Parent from '../demoEtats/Parent'
 
 

export class Child extends React.Component { 

  constructor(props) {     

    super(props); 

    this.handleChange = this.handleChange.bind(this); 

} 

 

  handleChange(e) { 

    const name = e.target.value; 

    this.props.onChange(name); 

  } 

 
  render() { 

    return ( 

      <> 

        <select id="great-names" onChange = {this.handleChange}> 

          <option value="Shany">Shany</option> 

          <option value="Jonathan">Jonathan</option> 

          <option value="Carle">Carle</option> 

        </select> 

     </> 

    ); 

  } 

} 