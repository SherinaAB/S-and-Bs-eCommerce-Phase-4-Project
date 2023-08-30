import React from "react";
import { Link } from "react-router-dom";

///need to go back to complete the correct unqiue requirements for each box, right now they are all for passwords as I copy and pasted

/// line 124 - {/* would like to add box here for kind of user and accepting terms and conditions */}
// need to finish adding items to form for first name, last name, email and password

export default function CreateAccount() {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  
  // function handleUsername(e){
  //   setUsername(e.target.value)
  // }

  // function handlePassword(e){
  //   setPassword(e.target.value)
  // }
  
  // function handleSubmit(e){
  //   e.preventDefault()
  //   fetch("/api/users", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({username: username, password: password})
  //   })
  //   .then(res => res.json())
  //   .then(data => setUsername(data))
  // }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Join Fun Times
          </h1>
        </div>
        
        {/* this is for the already have an account */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/login" className="link link-primary mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Already have an account? Login</Link>
        </div>


        {/* this if for the form */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form 
          // onSubmit={handlesubmit} 
          className="space-y-6" action="#" method="POST">
            {/* div for first name */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  First Name*
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* div for last name */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name*
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* div for email address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address*
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                  // value={email}
                  // onChange={handleUsername}
                />
              </div>
            </div>

            {/* div used for password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password*
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* signup button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Sign up
              </button>
            </div>
          </form>

          {/* would like to add box here for kind of user and accepting terms and conditions */}
          <div class="flex items-center">
            {/* will be removing these items, adding space there for now */}
            <br></br>
            <br></br>
            <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
        </div>

        </div>
      </div>
    </>
  )
  }





  