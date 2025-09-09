import React from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import axios from 'axios';
import Layoutes from './layoutes/Layoutes';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
const App = () => {
  useEffect(()=>{
    axios.get('http://localhost:4000/').then((data)=>{
      console.log(data);
      
    }).catch(err=>{
      console.log('somthing went worng ',err);
      
    })
  })
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
