import React from 'react';
import { useState, useEffect } from 'react';
import '../../static/style/menu-item.css';

export default function Slider() {

    const [range, setRange] = useState(20);

    const handleRange = (e) => {
        setRange(e.target.value);
    }

    useEffect(() => {
        const ele = document.querySelector('.buble');
        if (ele) {
            ele.style.left = `${range}px`;
        }
    })


    return (
        <div className='slider-parent'>
            <input 
                type="range" 
                value={range} 
                onChange={({ target: { value: radius } }) => {
                    setRange(radius);
                }} 
                min="20" 
                max="100" 
            />
            <div className="buble">
                {range}
            </div>
        </div>
    )
}
