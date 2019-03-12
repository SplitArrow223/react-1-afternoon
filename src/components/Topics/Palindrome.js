import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
          userInput: '',
          palindrome: ''
        }
    }
    handleChange(val) {
        this.setState({userInput: val }) 
    }

    reverseCheck(userInput) {
       let reverse = this.state.userInput;
       let after = false;
      let reversed = reverse.split('').reverse().join('') 
      if(reversed === reverse){
          after = true;
      }
      this.setState({palindrome: after})
    }

    render() {
        return(
            <div  className="puzzleBox filterStringPB">
                 <h4>'Palindrome'</h4>
                 <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                 <button className='confirmationButton'  onClick={ () => { this.reverseCheck(this.state.userInput) }}>Filter</button>
                 <span className='resultsBox' >Palindrome: {JSON.stringify(this.state.palindrome, null, 10)} </span>

            </div>
        )
    }
}