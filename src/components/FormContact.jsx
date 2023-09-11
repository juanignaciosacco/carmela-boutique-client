import React, { useState } from 'react'

export const FormContact = () => {

  const [formState, setFormState] = useState({
    nombre: '',
    apellido: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const onChangeHandler = ({ target: { name, value }}) => {
    setFormState({ 
      ...formState,
      [name]: value
    })
  }

  return (
    <div className='w-25'>
      <form className='text-center FormContact-form'>
          <label htmlFor='nombre' className='form-label mt-2'>Nombre</label>
          <input type='text' name='nombre' id='nombre' className='form-control' onChange={ (ev) => onChangeHandler(ev) }/>
          <label htmlFor='apellido' className='form-label mt-2'>Apellido</label>
          <input type='text' name='apellido' id='apellido' className='form-control' onChange={ (ev) => onChangeHandler(ev) }/>
          <label htmlFor='email' className='form-label mt-2'>Email</label>
          <input type='email' name='email' id='email' className='form-control' onChange={ (ev) => onChangeHandler(ev) }/>
          <label htmlFor='asunto' className='form-label mt-2'>Asunto</label>
          <input type='text' name='asunto' id='asunto' className='form-control' onChange={ (ev) => onChangeHandler(ev) }/>
          <label htmlFor='mensaje' className='form-label mt-2'>Mensaje</label>
          <input type='text' name='mensaje' id='mensaje' className='form-control' onChange={ (ev) => onChangeHandler(ev) }/>
          <button type='submit' className='btn btn-primary mt-2'>Enviar</button>
      </form>
    </div>
  )
}
