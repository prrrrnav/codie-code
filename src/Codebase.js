import React from 'react'
import { useState } from 'react';
import Boxresult from './Boxresult';


const Codebase = () => {


  const [userCode, setUserCode] = useState('')
  const [apiOutput, setApiOutput] = useState(null)

  function updateUserCode(event) {
    event.preventDefault();
    setUserCode(event.target.value)
    console.log(userCode)
  }

  const myFunction = (event) => {
    event.preventDefault();
    fetching_outputFile(url, options)
    console.log('Input code:', userCode);
  };

  const url = 'https://online-code-compiler.p.rapidapi.com/v1/';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '0cb3aa0239msh26ff201a0d9de33p14a1c1jsn482083ce508a',
      'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
    },
    body: JSON.stringify({
      language: 'java',
      version: 'latest',
      code: userCode,
      // code: 'print("Hello, World!");',
      input: null
    })
  };

  function fetching_outputFile(url, options) {
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // console.log(data);
        data.output ? setApiOutput(data.output) : setApiOutput(data.error);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  return (
    <div className='h-screen'>
      <div className='text-4xl pt-10  text-white justify-center text-center'>
        codebase
      </div>

      <form className='w-80 my-10 mx-auto' onSubmit={myFunction}>
        <label className='text-white'>code Java here:
          <pre>
            <textarea
              className='text-white bg-slate-800 h-40 p-4 w-40 scrollbar-thin scrollbar-thumb-gray-400'
              value={userCode}
              onChange={updateUserCode}
              rows={40} // Set the number of rows to 40
              style={{ width: '100%', scrollbarColor: 'gray black' }} // Adjust the width as needed
              placeholder="Enter your code here..."
            />

          </pre>
        </label>

        <button className='bg-black w-auto px-10 py-3  text-white border border-white' type="submit">Run</button>
      </form>


      <Boxresult result={apiOutput} />


    </div>

  )
}

export default Codebase
