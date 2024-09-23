import { useState, useEffect } from 'react'
import axios from 'axios'
import { CatsIndex } from './CatsIndex';
import { CatsNew } from './CatsNew';
import { Modal } from './Modal';
import { CatsShow } from './CatsShow';

export function CatsPage() {

  const [cats, setCats] = useState([]);
  const [showIsVisible, setShowIsVisible] = useState(false);
  const [currentCat, setCurrentCat] = useState({});

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

  const handleShow = (cat) => {
    console.log(cat);
    setShowIsVisible(true);
    setCurrentCat(cat);
  }

  const handleClose = () => {
    setShowIsVisible(false);
  }

  useEffect(handleIndex, [])

  return (
    <main>
      <CatsNew onCreate={handleCreate}/>
      <CatsIndex cats={cats} onShow={handleShow}/>
      <Modal show={showIsVisible} onClose={handleClose}>
        <CatsShow cat={currentCat}/>
      </Modal>
    </main>
  )
}