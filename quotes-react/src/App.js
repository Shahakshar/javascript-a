import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

    const ref = useRef(null);


    const [advice, setAdvice] = useState('')

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=> {
            if (response.status === 200) {
                const {advice} = response.data.slip
                
                setAdvice(advice)
            } else {
                alert('somthing wrong')
            }
        
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    fetchAdvice()

    useEffect(() => {
        const handleClick = event => {
          fetchAdvice()
        };
    
        const element = ref.current;
    
        element.addEventListener('click', handleClick);
    
        return () => {
          element.removeEventListener('click', handleClick);
        };
      }, []);

    return(
        <>
            <div className="app">
                <div className="card">
                    <h1 className='heading'> {advice} </h1>
                    <button className='button' ref={ref}>
                        <span>Change Quotes</span>
                    </button>
                </div>
            </div>
        </>    
    ) 
        
}

export default App;
