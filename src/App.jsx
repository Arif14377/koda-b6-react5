import { useState } from 'react'
import './index.css'
import InputText from './components/InputText.jsx'

function App() {

  return (
    <div className='flex flex-col justify-center items-start h-screen max-w-xl mx-auto my-0 gap-4'>
      <div className='flex flex-col gap-0 w-full'>
        <div className='w-full bg-blue-600 h-2.5 rounded-t-lg'></div>
        <div className='rounded-b-lg w-full bg-white shadow-lg'>
          <h1 className='text-4xl font-bold my-6 mx-4'>Form Survey Rokok</h1>
          <div className='border-t border-gray-300'></div>
          <p className='text-red-600 text-sm my-4 mx-4'>*Indicates required question</p>
        </div>
      </div>
      <InputText idName="name" labelInput="Siapa nama Anda?" placeholder="Your answer"/>
    </div>
  )
  
}

export default App
