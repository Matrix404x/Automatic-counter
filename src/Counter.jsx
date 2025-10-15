import React, { useState, useEffect } from "react";
import './Counter.css';

function AutoCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Set an interval to increase count every second
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
       <div><div className='container border border-4 ' style={{marginTop:'200px', borderRadius:"20px"}}>
        <div className='text-center'>
            <h1 className="text-success m-4 p-3">Automatic Counter-App</h1>
            <h2 className='fw-bolder'>{count}</h2>
            <div>
            <button  className="m-4 btn btn-danger" onClick={() => setCount(0)}>Reset</button>
            </div>
            
        </div>
       </div>
      </div>

    );
}

export default AutoCounter;
