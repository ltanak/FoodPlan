import React, { useState, useEffect } from "react";
import TestingComponent from "./components/testingComponent";
import Popup from "./components/Popup";

function App() {
    const [buttonPopup, setButtonPopup] = useState(false)
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    // Using useEffect for single rendering
    // useEffect(() => {
    //     // Using fetch to fetch the api from 
    //     // flask server it will be redirected to proxy
    //     fetch("/data").then((res) =>
    //         res.json().then((data) => {
    //             // Setting a data from api
    //             setdata({
    //                 name: data.Name,
    //                 age: data.Age,
    //                 date: data.Date,
    //                 programming: data.programming,
    //             });
    //         })
    //     );
    // }, []);

    return (
        <div className="App" style={{overflowY:"auto"}}>
            <main>
                
                <h1>FoodPlan</h1>
                <br></br>
                <br></br>
                
                {/* <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.date}</p>
                <p>{data.programming}</p>
                <p>hello!</p>
                <p>hi</p> */}
                {/* <TestingComponent/> */}


                <button className="btn bgp" onClick={() => setButtonPopup(true)}>generate your shopping list</button>
                <br></br>
                <button className="btn bgp" onClick={() => setButtonPopup(true)}>create a new meal</button>
                <br></br>
                <button className="btn bgp" onClick={() => setButtonPopup(true)}>scan an online recipe</button>
                <br></br>
                <button className="btn bgp" onClick={() => setButtonPopup(true)}>browse your meals</button>



                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
            </main>
        </div>
    );
}

export default App;