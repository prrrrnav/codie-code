import React from 'react'
import { useEffect, useState } from 'react'

const Boxresult = (props) => {
  const [output, setOutput] = useState('null')
  useEffect(() => {
    console.log('props.result', props.result)
    function outputUpdate() {
      const data =  props.result
      console.log(data)
      setOutput(data)
    }
    outputUpdate()

  }, [props.result])
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl   h-full  text-white justify-center text-center'>Output:</h1>
      <textarea className='w-80 mx-auto bg-slate-800 my-10 text-white border-none ' readOnly={true} value={output}></textarea>
    </div>
  )
}

export default Boxresult

