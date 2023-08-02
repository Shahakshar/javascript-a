import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

    const [state, setState] = useState('')

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=> {
            if (response.status === 200) {
                const {advice} = response.data.slip
                
                setState(advice)
            } else {
                alert('somthing wrong')
            }
        
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    fetchAdvice()

    return(
        <h1 id='advice'> {state} </h1>
    ) 
        
}

export default App;