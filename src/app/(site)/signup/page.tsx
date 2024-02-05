import { Button } from '@nextui-org/react'
import React from 'react'

type Props = {}

const Signup = (props: Props) => {
  return (
    <div className="flex min-h-screen justify-center flex-col items-center  p-24">
    <h1 className='bg-slate-600 p-2 text-white rounded-lg mb-3'>XD This is a Test Cicero XD SignUp</h1>
    <Button>Test for GIGA SHADCN</Button>
    <div className='text-4xl  font-bold mt-5'>Test Merge Branch!</div>
    
    <div className='text-4xl font-bold mt-5'>I want to update this branch with changes from Main branch.</div>
  </div>
  )
}

export default Signup