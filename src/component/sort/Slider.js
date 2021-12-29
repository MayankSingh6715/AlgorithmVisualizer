import React from 'react';
import { useEffect } from 'react';
import '../../static/style/menu-item.css';

export default function Slider(props) {

    useEffect(() => {
        const ele = document.querySelector('.buble');
        if (ele) {
            ele.style.left = `${props.arraySize}px`;
        }
    })

    const changeArraySize = (event) => {
        props.handleArraySize(event.target.value);
    }


    return (
        <div className='slider-parent'>
            <input 
                type="range" 
                id='slider'
                value={props.arraySize} 
                onChange={changeArraySize} 
                min="20" 
                max="100" 
            />
            <div className="buble">
                {props.arraySize}
            </div>
        </div>
    )
}
