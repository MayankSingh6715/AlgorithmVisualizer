import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider'

export default function Nav(props) {

    const [algoSelect, setAlgoSelect] = useState('bubble sort');

    const handleAlgoSelector = (event) => {
        setAlgoSelect(event.target.value);
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/sort">Sorting Algos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <label htmlFor="arraySize" className="form-label">Array Size</label>
                        <Slider arraySize={props.arraySize} handleArraySize={props.handleArraySize}  />
                    </div>
                </div>
                <select className="form-select d-flex form-select-lg" value={algoSelect} onChange={handleAlgoSelector} style={{ width: '14%' }}>
                    <option value="bubble sort">Bubble Sort</option>
                    <option value="quick sort">Quick Sort</option>
                    <option value="merge sort">Merge Sort</option>
                </select>
                <button type="button" className="btn btn-warning d-flex mx-2">Visulaize</button>
            </div>
        </nav>  
        </>
    )
}
