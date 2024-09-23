import { useState, useEffect } from 'react'
import axios from 'axios'
import { CatsIndex } from './CatsIndex';
import { CatsNew } from './CatsNew';

export function CatsPage() {

  const [cats, setCats] = useState([])

  const handleIndex = () => {
    axios.get("http://localhost:3000/cats.json").then(response => {
      setCats(response.data)
      console.log(response.data);
    })
  }

  const handleCreate = (params, successCallback) => {
    axios.post("http://localhost:3000/cats.json", params).then(response => {
      setCats([...cats, response.data]);
      successCallback();
    })
  }

  useEffect(handleIndex, [])

  return (
    <main>
      <CatsNew onCreate={handleCreate}/>
      <CatsIndex cats={cats} />
    </main>
  )
}