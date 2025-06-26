import React from 'react'

const page =async ({params}) => {
    let {newId} = await params
  return (
    <div>{newId}</div>
  )
}

export default page