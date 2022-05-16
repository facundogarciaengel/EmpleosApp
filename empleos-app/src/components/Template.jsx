import React from 'react'
import NavBar from './NavBar'

export default function Template({children}) {
  return (
    <>
        <NavBar/>
        {children}
    </>
  )
}