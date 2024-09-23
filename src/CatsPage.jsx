import { useState, useEffect } from 'react'
import axios from 'axios'
import { CatsIndex } from './CatsIndex';

export function CatsPage() {

  const [cats, setCats] = useState([])

  const handleIndex = () => {
    axios.get("http://localhost:3000/cats.json").then(response => {
      setCats(response.data)
      console.log(response.data);
    })
  }

  // useEffect(handleIndex)

  return (
    <main>
      <CatsIndex cats={cats} />
    </main>
  )
}