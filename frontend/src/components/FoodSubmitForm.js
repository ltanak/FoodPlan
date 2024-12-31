import React, { useState, useEffect, useRef} from 'react';
import './FoodSubmitForm.css';
import BulletpointForm from './BulletpointForm';

function FoodSubmitForm({setTrigger}) {
    const [inputs, setInputs] = useState({ name: "", portions: 1 }); // Initialize state with matching keys
    const [ingredients, setIngredients] = useState([""]);
    const [recipe, setRecipe] = useState([""]);
    const [tags, setTags] = useState([""]);
    const inputRefs = useRef([]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name: inputs.name,
                portions: inputs.portions,
                ingredients: ingredients.filter(bp => bp.trim() !==""),
                recipe: recipe.filter(bp => bp.trim() !== ""),
                tags: tags.filter(bp => bp.trim() !== "")
            }
            const response = await fetch("/addMeal", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
          const result = await response.json();
          console.log("Response from server:", result);
        } catch (error) {
          console.error("Error submitting bullets:", error);
        }

        setInputs({name: "", portions: 1});
        setIngredients([""]);
        setRecipe([""]);
        setTags([""]);

        setTrigger(false)
      };

    const handleChange = (event) => {
        const name = event.target.name; // Get the name attribute
        const value = event.target.value; // Get the value from input
        setInputs((values) => ({ ...values, [name]: value }));
    };  

    return (
        <form onSubmit={handleSubmit} className='bdy' style={{overflowY:"auto", maxHeight:"100vh"}}>

            {/* <label for="name">meal name</label> */}
            <div className='input-group'>
                <input name="name" type="text" class = "form-control lgFont" value={inputs.name}
                id="name" placeholder="meal name" required onChange={handleChange}>
                </input>
            </div>

            <br></br>

            <label htmlFor="ingredients" style={{fontWeight: "bold"}}>ingredients</label>
            <BulletpointForm bullets={ingredients} 
            onChange={(newBullets) => setIngredients(newBullets)}
            bulletType={1}
            placeholderText={"the next ingredient is..."}/>
            <br></br>
            <label for="recipe" style={{fontWeight: "bold"}}>recipe</label>
            <BulletpointForm bullets={recipe} 
            onChange={(newBullets) => setRecipe(newBullets)}
            bulletType={0}
            placeholderText={"the next step is..."}/>
            <br></br>

            <label htmlFor="portions" style={{fontWeight: "bold"}}>portions</label>
            <div className='input-group'>
                <input name="portions" type="number" class = "form-control" value={inputs.portions}
                id="portions" min="1" max="999" placeholder="count" required onChange={handleChange}>
                </input>
            </div>

            <br></br>
            <label for="tags" style={{fontWeight: "bold"}}>tags</label>
            <BulletpointForm bullets={tags} 
            onChange={(newBullets) => setTags(newBullets)}
            bulletType={1}
            placeholderText={"this meal is..."}/>
            <br></br>

            <div className='ctr'>
                <button type="submit" className='ctr btn bgs'>add meal</button> 
            </div>
            {/* dont forget to put type "submit" or smnt */}
            <br></br>
            <br></br>
        </form>

        
    );
}

export default FoodSubmitForm;
