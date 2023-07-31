import React, { useState } from 'react'

export default function Login() {

  const [isLogin , setIsLogin] = useState(false);

  const handler = () => {
    setIsLogin(prev => !prev);
  }

  return (
    <button onClick={handler}>{isLogin ? "logout" : "login"}</button>
  )
}
