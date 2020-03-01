import React,{useEffect, useState} from 'react'
import './App.css'
import Recipe from './Recipe'


const App = () => {
  const API_ID = '1c15437d'
  const API_KEY = '7b65e10c7764b6ecec6f6c78adbb5d08'

//STATES
 
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

//USE EFFECT
 
 useEffect(() => {
 getRecipes()
}, [query] )

 const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
   const data = await response.json()
   setRecipes(data.hits)


 }
//get the value inputted by user in the search input
 const updateSearch = e => {
   setSearch(e.target.value)
 }

//get the final query which only runs onSubmit
 const getQuery = e =>{
   e.preventDefault()
   setQuery(search)
   setSearch('')
 }

  return(
    <div className = "App">
     <h1 className = "tagline">Get the recipes you need HERE and NOW</h1>
    <form className = "search-form" onSubmit = {getQuery}>
    <input type = "text"
           className = "search-bar"
           placeholder = "Type an ingredient"
           value = {search}
           onChange ={updateSearch}   />
    <button type = "submit" className = "search-button">Search</button>
    </form>
   <div className ="recipes">
    {recipes.map(recipe => (
      <Recipe title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients ={recipe.recipe.ingredients}
              description ={recipe.recipe.url}
              key={recipe.recipe.label}/> // unique key

    )
    )}
    </div>

    </div>
  )
}
export default App;
