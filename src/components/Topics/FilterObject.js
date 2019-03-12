import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
          userInput: '',
          filteredVehicles: [],  
          vehicles : [
              {make: 'ford', model: 'car'},
              {make: 'chevy', year: '6'},
              {make: 'dodge', color: 'white'}


          ]
        }
    }
    handleChange(val) {
        this.setState({userInput: val }) 
    }
   
    filterVehicles(prop) {
        var vehicles = this.state.vehicles;
        var filteredVehicles = [];
        
        for ( var i = 0; i < vehicles.length; i++ ) {
          if ( vehicles[i].hasOwnProperty(prop) ) {
            filteredVehicles.push(vehicles[i]);
          }
        }
    
        this.setState({ filteredVehicles: filteredVehicles });
      }



    
        
    render() {
            return(
                <div className='puzzleBox filterObjectPB' >
                    <h4>'Filter Object'</h4>
                    <span className='puzzleText' >Vehicles: {JSON.stringify(this.state.vehicles, null, 10)} </span>
                    <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                    <button className='confirmationButton'  onClick={ () => { this.filterVehicles(this.state.userInput) }}>Filter</button>
                    <span className='resultsBox filterObjectRB' >Filtered: {JSON.stringify(this.state.filteredVehicles, null, 10)} </span>
    
                </div>
    
                  
            )
    }
}



        


