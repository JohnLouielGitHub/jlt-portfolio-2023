import { useState, useContext } from "react";
import loginRequest from "../api/loginRequest";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../App";

function LoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [token, setToken] = useContext(TokenContext)
  const navigate = useNavigate()
  
  const handleLogin = (e) => {
    e.preventDefault()
    loginRequest(password)
    .then(({token}) => {
      setToken(token)
      navigate('/')
    }).catch( err => {
      setError(err.message)
    })
  }

  return (
    <>
      <div>LoginPage</div>
      <div style={{color: 'red'}}>{error}</div>
      <form onSubmit={handleLogin}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
      </form>
    </>
  )
}

export default LoginPage
