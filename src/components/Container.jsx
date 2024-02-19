import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full my-0 mx-auto py-0 px-[1.5rem] max-w-[1200px] overflow-hidden'>{children}</div>
  )
}

export default Container