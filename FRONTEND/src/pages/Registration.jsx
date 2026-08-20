import axios from 'axios'
import { useState } from 'react'

const Registration = () => {




  let [createuser, setcreateuser] = useState({
    name: "",
    email: "",
    password: ""
  })

  console.log(createuser)



  async function handlesubmit() {

    try {
      let response = await axios.post('http://localhost:9000/registration/registrationapi',
        createuser)
      console.log(response.data)

    }


    catch (error) {
      console.log("the error is comming from the creation  of users")
      console.log(error)
    }

  }







  return (
    <div className='flex items-center justify-center min-h-screen flex-col bg-gray-400'>
      <div className='w-full bg-emerald-50 max-w-md p-8 rounded-2xl shadow-2xl'>

        <div >
          <h1 className=' text-center text-3xl text-gray-950 font-bold mb-5'>
            Sign up
          </h1>
        </div>

        <div className='mb-5'>
          <label className='block mb-2 text-gray-800 font-bold ' htmlFor="Name">Name</label>
          <input onChange={function (event) {
            setcreateuser({
              ...createuser, name: event.target.value
            })
          }}
            className='w-full p-2 pl-2 rounded-2xl border-2'
            type="text" placeholder='Enter your name' />
        </div>

        <div className='mb-5'>
          <label
            className='block mb-2 text-gray-800 font-bold'
            htmlFor="Email">Email</label>
          <input onChange={function (event) {
            setcreateuser({
              ...createuser, email: event.target.value
            })
          }}
            className='w-full p-2 pl-2 rounded-2xl border-2'
            type="text" placeholder='Enter your Email' />
        </div>

        <div className='mb-5 '>
          <label className='block mb-2 text-gray-800 font-bold' htmlFor="password">Password</label>
          <input onChange={function (event) {
            setcreateuser({
              ...createuser, password: event.target.value
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

export default Registration