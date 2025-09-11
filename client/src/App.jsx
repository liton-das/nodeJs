import React from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layoutes from './layoutes/Layoutes';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
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
