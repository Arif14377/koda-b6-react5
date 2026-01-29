import { useState, useEffect } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormPage from './pages/FormPage.jsx'
import Submission from './pages/Submission.jsx'

function App() {
  const [submitHistory, setSubmitHistory] = useState([])

  useEffect(() => {
    const pullHistory = JSON.parse(localStorage.getItem("submitHistory"))
    if(pullHistory){
      setSubmitHistory(pullHistory)
    }
  }, [])

  const router = createBrowserRouter([
    { path: "/",
      element: <FormPage setSubmitHistory={setSubmitHistory}/>
    },
    { path: "/submission",
      element: <Submission submitHistory={submitHistory}/>
    }
  ])

  return <RouterProvider router={router} />
}

export default App
