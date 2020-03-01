import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, description}) => {
  return(
    <div className ={style.recipe}>
    <h1>{title}</h1>
    <p><strong>Calories: </strong> {calories}</p>
    <strong>Ingredients: </strong>
    <ul>
    {ingredients.map(ingredient =>(
      <li>{ingredient.text}</li>
    ))}
    </ul>
  <strong>Directions:</strong><a href={description} target ="_blank">Here</a>

    <img src={image} alt="" />
    </div>
  )
}

export default Recipe
