import React, { useState, useEffect} from 'react'
import { v4 as uuid } from 'uuid' // Cria uma key totalmente diferente toda vez que é chamada!
import {Container, ToDoList, Input, Button, ListItem, Trash, Check} from './styles.js'
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc"
// SINTAXE JSX

import { Fragment } from "react"

function App() {

  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function inputChange(event) {
   setTask(event.target.value)

  }

  function clickButton() {
    if (task.trim() === '') return
      setList([ ...list, { id: uuid(), task, finished:false}])
    
  }

  function endTask(id) {

    const newList = list.map( item => (
      item.id == id ? { ...item, finished: !item.finished} : item
    ))

    setList(newList)
     
  }

    function deleteTask(id) {
      const filterList = list.filter(list => list.id !== id)

      setList(filterList)
    }


    function handleKeyPress(event) {
        if(event.key === 'Enter') {
          clickButton()
        }
    }


  return (
    // Fragment
    <>
      <Container >
        <ToDoList>
        <Input onChange={inputChange} onKeyPress={handleKeyPress}  required placeholder="O que tenho para fazer..."  />
        <Button onClick={clickButton}>Adicionar</Button>

        <ul>
        {
          list.length > 0 ? (
        
        list.map((item) => (
          <ListItem isFinished={item.finished} key={item.id}>
          <Check onClick={ () => endTask(item.id)}/>
          <li >{item.task}</li>
         <Trash onClick={() => deleteTask(item.id)}/>
         </ListItem>
        ))
      ) : (
        <h3>Não há itens na lista</h3>
      )
    }
        </ul>
        </ToDoList>
      </Container>
      </>
  )
}

export default App
