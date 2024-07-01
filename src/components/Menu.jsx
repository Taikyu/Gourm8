import React, { useEffect, useState } from 'react'
import MealItem from './MealItem';

function Meals ()  {
    const [fetchedMeals , setFetchedMeals] = useState([])

    useEffect(()=>{
        async function fetchMeals () {
          const response = await fetch('http://localhost:3000/meals')
    
          if (response.ok) {
            // ...
          }
          const mealsData = await response.json()
          setFetchedMeals(mealsData)
       }
       fetchMeals()

    }, []);

  

  return (
    <ul id='meals'>
        {fetchedMeals.map((meal)=>{
           return <MealItem key={meal.id} meal={meal}/>
        })}
    </ul>
  )
}

export default Meals;