import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <div className='h1'>
            <h1>{title}</h1>
            </div>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <div className='calories'>
                <h3>Calories</h3>
            </div>
            <p> {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe