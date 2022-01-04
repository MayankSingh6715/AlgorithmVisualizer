import React from 'react';
import { useState, useEffect } from 'react';
import Visualizer from '../visualizer/Visualizer';
import Nav from './Nav';

export default function Menu() {

    const [arraySize, setArraySize] = useState(20);

    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, [resetArray]); // eslint-disable-line react-hooks/exhaustive-deps

    const resetArray = () => {
        const tempArray = [];
        for(let i = 0; i < arraySize; i++) {
            tempArray.push(Math.floor(Math.random() * (250 - 20) + 20));
        }     
        setArray(tempArray);
    }

    const handleArraySize = (value) => {
        setArraySize(value);
        resetArray();
    }

    return (
        <>
            <Nav arraySize={arraySize} handleArraySize={handleArraySize} />
            <Visualizer arraySize={arraySize} array={array} resetArray={resetArray} />
        </>
    )
}
