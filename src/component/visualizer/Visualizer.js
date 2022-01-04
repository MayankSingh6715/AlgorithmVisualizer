import React from 'react';
import { useEffect } from 'react';
import '../../static/style/bar.css';


export default function Visualizer(props) {
    
    useEffect(() => {
        initializeArrayBars();
    }, []);
    
    const initializeArrayBars = () => {
        return props.resetArray;
    }
    
    return (
        <>
        <button type="button" className="btn btn-warning" id='random-button' onClick={props.resetArray} >Randomize</button>
        <div className='array-container'>
            {props.array.map((value, idx) => (
                <div 
                    className="array-bar" 
                    key={idx} 
                    style={{ backgroundColor : 'turquoise', height: `${value}px` }}
                ></div>
            ))}
        </div>
        </>
    )
}
