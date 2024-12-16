import './BaseProgressBar.css'
import React, { useState } from "react";
export default function Progress(){
    const [progress, setProgress] = useState(50);
    const handleChange = (e) => {
        setProgress(e.target.value);
    };
    return(
        <div>
            <div>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleChange}
                className="progress-input-Style"
              />
            </div>
        </div>
    )
}