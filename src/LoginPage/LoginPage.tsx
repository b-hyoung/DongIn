import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'

interface LoginInput {
    email : string;
    password : string
}

function LoginPage() {

  const navigate = useNavigate();
  const loginUrl =  'http://localhost:8000/api/accounts/login/'

  const [loginForm  , setLoginForm] = useState<LoginInput>({
    email : "",
    password  : ""
  })

  const {email , password} = loginForm

  const handleChangeInput = (e) => {

    const {name , value} = e.target
    setLoginForm({
      ...loginForm,
      [name] : value
    })
  }
  const handleEnterPress = (e) => {
    if(e.key === 'Enter'){
      handleClickLogin()
    }
  }

  const handleClickLogin = () => {
    // axios.post(loginUrl,loginForm)
    // .then(res => {
    //   navigate("/")
    //   localStorage.setItem('access_token' , res.data.access_token)
    //   localStorage.setItem('refresh_token' , res.data.refresh_token)
    // })
    // .catch(error => {
    //   alert("이메일 또는 비밀번호가 잘못됐습니다.")
    //   console.log(error)
    // })
    alert("로그인 성공")
    navigate("/main")
  }
  

  return (
    <div className='Wrapper_Login'>
      <div className='Login'>
        <div className='Login_Title'>
          WelCome !
        </div>
        <div className='Login_Form'>
          <input className='Id'
            name='email'
            onChange={handleChangeInput}
            onKeyDown={handleEnterPress}
            value={email}
          />
          <input className='Password'
            name='password'
            type='password'
            onChange={handleChangeInput}
            onKeyDown={handleEnterPress}
            value={password}
            />
        </div>
          {/* <div className='Login_Status'>
          {/* <span class="material-symbols-outlined">
            check_box
          </span>
          <span className='Login_statustext'>
            로그인 상태유지
          </span>
          </div> */} 
          <div className='Clover_login'>
            <button className='login_btn' onClick={() => handleClickLogin()}>Login</button>
            <button className='sign_up' onClick={() => navigate("/signup")}>회원가입</button>
          </div>
      </div>
    </div>
  )
}

export default LoginPage