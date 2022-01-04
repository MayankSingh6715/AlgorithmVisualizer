import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Visualizer from '../visualizer/Visualizer';
import Nav from './Nav';

export default function Menu() {

    const [arraySize, setArraySize] = useState(20);

    const [array, setArray] = useState([]);

    const resetArray = useCallback(() => {
        const tempArray = [];
        for(let i = 0; i < arraySize; i++) {
            tempArray.push(Math.floor(Math.random() * (250 - 20) + 20));
        }     
        setArray(tempArray);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        resetArray();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


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
