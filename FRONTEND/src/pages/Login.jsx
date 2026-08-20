import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  let [login, setlogin] = useState({
    email: "",
    password: ""
  })

  console.log(login)

  

  async function handlesubmit() {
    try {
      let response = await axios.post("http://localhost:9000/registration/loginapi", login)
      console.log(response.data)
    }


    catch (error) {
      console.log(error, "the error is the frontend of login")
    }
  }



  return (

    <div className='flex items-center justify-center min-h-screen flex-col'>

      <div className='bg-fuchsia-400 h-96 p-8 rounded-2xl' >

        <div >
          <h1 className=' text-center text-3xl text-gray-950 font-bold mb-5'>
            Login
          </h1>
        </div>

        <div className='mb-5  '>
          <label
            className='block mb-2 text-gray-800 font-bold'
            htmlFor="Email">Email</label>
          <input onChange={function (event) {
            setlogin({
              ...login, eamil: event.target.value
            })
          }}
            className='w-full p-2 pl-2 rounded-2xl border-2'
            type="text" placeholder='Enter your Email' />
        </div>

        <div className='mb-5 '>
          <label className='block mb-2 text-gray-800 font-bold' htmlFor="password">Password</label>
          <input
            onChange={function (event) {
              setlogin({
                ...login, password: event.target.value
              })
            }}

            className='w-full p-2 pl-2 rounded-2xl border-2'
            type="text" placeholder='Enter your Password' />
        </div>


        <button onClick={handlesubmit}
          className='w-full bg-white  rounded-2xl p-1 hover:bg-blue-800 transition duration-350'>
          Register
        </button>



      </div>


    </div>
  )
}

export default Login