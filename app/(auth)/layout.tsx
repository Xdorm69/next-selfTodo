import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <div className="w-full h-[80vh] flex-col flex justify-center items-center">
        <div className="">{children}</div>
        <p className="text-muted-foreground mt-3">
          Welcome to <span className='text-green-500'>Todoz</span>, one stop solution for your problems.
        </p>
      </div>
    </>
  );

}

export default layout