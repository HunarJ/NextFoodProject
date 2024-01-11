import React from 'react'
import Link from 'next/link'

const MealsPage = () => {
  return (
    <>
    <h1>Meals page</h1>
    <p><Link href="/meals/meal-1">Meal 1</Link></p>
    </>
  )
}

export default MealsPage
