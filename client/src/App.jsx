import React from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layoutes from './layoutes/Layoutes';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layoutes/>}> 
      
      </Route>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
