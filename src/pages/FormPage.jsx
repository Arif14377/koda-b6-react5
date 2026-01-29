import { useEffect } from 'react'
import InputText from '../components/InputText.jsx'
import {useForm} from "react-hook-form"
import Button from '../components/Button.jsx'
import {Link} from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { InputRadio } from '../components/InputRadio.jsx'

const schemaValidation = yup.object({
    name: yup.string().required().min(2),
    age: yup.number().required().min(1)
})

function FormPage(props) {
  const {setSubmitHistory} = props
  const {handleSubmit, register, formState}= useForm({
    defaultValues: {
        name: "",
        age: "",
    }
  })

  function submitForm(values){
    const pullHistory = JSON.parse(localStorage.getItem("submitHistory"))
    let newHistory = []

    if(pullHistory){
      newHistory = [values, ...pullHistory]
    } else {
      newHistory = [values]
    }
    
    setSubmitHistory(newHistory)
    localStorage.setItem("submitHistory", JSON.stringify(newHistory))
  }

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit(submitForm)} className='flex flex-col justify-center items-start max-w-xl mx-auto my-0 gap-4'>
        <div className='flex flex-col gap-0 w-full'>
          <div className='w-full bg-blue-600 h-2.5 rounded-t-lg'></div>
          <div className='rounded-b-lg w-full bg-white shadow-lg'>
            <h1 className='text-4xl font-bold my-6 mx-4'>Form Survey Rokok</h1>
            <div className='border-t border-gray-300'></div>
            <p className='text-red-600 text-sm my-4 mx-4'>*Indicates required question</p>
          </div>
        </div>
        <InputText idName="name" labelInput="Siapa nama Anda?" {...register("name")} placeholder="Your answer"/>
        <InputText idName="age" labelInput="Berapa umur Anda?" {...register("age")} placeholder="Your answer"/>
        <div className="flex flex-col rounded-lg w-full bg-white shadow-lg px-4 py-6 gap-6">
            <label>Apa jenis kelamin Anda? <span className="text-red-600">*</span> </label>
            <InputRadio type="radio" name={"gender"} id={"men"} value={"Laki-laki"} label={"Laki-laki"} className="focus:border-blue-600 focus:outline-hidden"/>
            <InputRadio type="radio" name={"gender"} id={"women"} value={"women"} label={"Perempuan"} className="focus:border-blue-600 focus:outline-hidden"/>
        </div>
        <div className="flex flex-col rounded-lg w-full bg-white shadow-lg px-4 py-6 gap-6">
            <label>Apakah Anda Perokok? <span className="text-red-600">*</span> </label>
            <InputRadio type="radio" name={"isSmoker"} id={"ya"} value={"smoker"} label={"Ya"} className="focus:border-blue-600 focus:outline-hidden"/>
            <InputRadio type="radio" name={"isSmoker"} id={"tidak"} value={"non-smoker"} label={"Tidak"} className="focus:border-blue-600 focus:outline-hidden"/>
        </div>
        <Button/>
      </form>
      <Link to="/submission">Lihat History</Link>
    </div>
  )
  
}

export default FormPage
