import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
          userInput: '',
          filteredArray: [],  
          array: [
            'react is cool',
            'Alex is an idjit',
            'Jason is way cooler',
            'Im clearly going crazy'  ]
        }
    }
    handleChange(val) {
        this.setState({userInput: val }) 
    }
   
    filterArray(userInput) {
        var array = this.state.array;
        var filteredArray = [];
        
        for ( var i = 0; i < array.length; i++ ) {
          if ( array[i].includes(userInput) ) {
            filteredArray.push(array[i]);
          }
        }
    
        this.setState({ filteredArray: filteredArray });
      }



    
        
    render() {
            return(
                <div className='puzzleBox filterStringPB' >
                    <h4>'Filter String'</h4>
                    <span className='puzzleText' >array: {JSON.stringify(this.state.array, null, 10)} </span>
                    <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                    <button className='confirmationButton'  onClick={ () => { this.filterArray(this.state.userInput) }}>Filter</button>
                    <span className='resultsBox filterStringRB' >Filtered: {JSON.stringify(this.state.filteredArray, null, 10)} </span>
    
                </div>
    
                  
            )
    }
}