import React from 'react'
import { Navigate } from 'react-router-dom'
//kif nabda connecte maghir maybanouli login et register
const ForceRedirect = ({user, children}) =>{
    if(user.isConnected){
        return <Navigate to="/" replace/> 
      } 
      return children
}

export default ForceRedirect