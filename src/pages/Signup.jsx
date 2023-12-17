import React from 'react'

const Stepper=()=>
{
    return (
        <div className=' flex justify-between w-1/3 mt-5 mb-16'>
            <aside className='bg-red-500   h-1 flex-grow mx-2 hover:cursor-pointer'> </aside>
            <aside className='bg-gray-200  h-1 flex-grow mx-2 hover:cursor-pointer'> </aside>
            <aside className='bg-gray-200  h-1 flex-grow mx-2 hover:cursor-pointer'> </aside>
            <aside className='bg-gray-200  h-1 flex-grow mx-2 hover:cursor-pointer'> </aside>
        </div>
    )
}

const Email=()=>
{
    return (
        <div className='bg-transparent flex-grow'>
            <h1>Watashiga kita!</h1>
        </div>
    )
}

const Signup = () => {
  return (
    <div className="relative flex justify-end items-center bg-[url(https://github.blog/wp-content/uploads/2020/12/102573561-8e872300-40a3-11eb-9feb-b480aeae0564.png)] bg-cover bg-center  w-screen h-screen">Signup
        <h1 className='text-white text-7xl max-w-sm bottom-1/3 left-[10%] absolute font-black'>CREATE AN ACCOUNT</h1>
        <main className='mx-10  bg-white h-[80%] rounded-lg shadow-md w-5/12 flex flex-col items-center'>
            <Stepper />
            <Email />
        </main>
    </div>
  )
}

export default Signup