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
    <div>
      <h1 className='text-4xl py-20 mb-32 h-full  text-white justify-center text-center'>This is Boxresult</h1>
      <textarea className='w-full bg-slate-800 my-10 text-white border-none ' readOnly={true} value={output}></textarea>
    </div>
  )
}

export default Boxresult

