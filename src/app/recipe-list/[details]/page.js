import RecipeDetailsItem from '@/components/recipe-details';
import React from 'react'

async function fetchRecipeDetails(currentRecipeId){
  try{
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
    const data = await apiResponse.json();
    return data;
  }catch(e){
    throw new Error(e)
  }
}
export default async function RecipeDetails({params}) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details)
  return (
   <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
  )
}
