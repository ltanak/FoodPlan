import React, { useState, useRef, useEffect } from "react";

function BulletpointForm({ bullets = [], onChange, bulletType, placeholderText}) {
    const [bulletPoints, setBulletPoints] = useState(bullets);
    const inputRefs = useRef([]);

    // useEffect(() => {
    //     // Only update bulletPoints state if the props actually change
    //     if (JSON.stringify(bullets) !== JSON.stringify(bulletPoints)) {
    //         setBulletPoints(bullets);
    //     }
    // }, [bullets, bulletPoints]);

    const handleInputChange = (index, value) => {
        const newBulletPoints = [...bulletPoints];
        newBulletPoints[index] = value;
        setBulletPoints(newBulletPoints);
        onChange(newBulletPoints.filter(bp => bp.trim() !== ""));
    };

    const handleKeyPress = (e, index) => {
        console.log("hello");
        if (e.key === "Enter" && bulletPoints[index].trim().length > 0) {
            e.preventDefault();
            const newBulletPoints = [...bulletPoints, ""];
            setBulletPoints(newBulletPoints);
            onChange(newBulletPoints.filter(bp => bp.trim() !== ""));
            setTimeout(() => {
                const nextInput = inputRefs.current[index + 1];
                if (nextInput) nextInput.focus();
            }, 0);
        }
        if (e.key === "Backspace" && bulletPoints.length > 1 && bulletPoints[index].trim().length <= 0){
            e.preventDefault();
            const newBulletPoints = [...bulletPoints];
            newBulletPoints.pop();
            setBulletPoints(newBulletPoints);
            onChange(newBulletPoints.filter(bp => bp.trim() !== ""));
            setTimeout(() => {
                const nextInput = inputRefs.current[index - 1];
                if (nextInput) nextInput.focus();
            }, 0);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {bulletPoints.map((bullet, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center" }}>
                    <span>{bulletType === 1 ? "\u2022" : index + 1}</span>
                    <input className="form-control"
                    style={{marginLeft: "8px"}}
                    ref={(el) => (inputRefs.current[index] = el)} 
                    type="text" value={bullet} 
                    onChange={(e) => handleInputChange(index, e.target.value)} 
                    onKeyDown={(e) => handleKeyPress(e, index)}
                        // placeholder={`Bullet point ${index + 1}`}
                        placeholder={placeholderText}
                    />
                </div>
            ))}
        </div>
    );
}

export default BulletpointForm;
