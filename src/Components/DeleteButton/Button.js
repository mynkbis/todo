import React from 'react'
import './DeleteButton.css'

function DeleteButton(props) {

  const HandleDelete=()=>{
    console.log("deleted")
    alert ("deleted successfully")

    
  }

  return (
    <div className='trashButton'>
        <button onClick={HandleDelete}>Trash</button>
    </div>
  )
}

export default DeleteButton