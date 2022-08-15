import React from 'react'
// import './styles.css'
const InputField = () => {
  return (
    <form className="input">
        <input type="text" placeholder='Enter a Task' className='input__box' />
        <button className='btn__submit'>Add</button>
    </form>
  )
}

export default InputField