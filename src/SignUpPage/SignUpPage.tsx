import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './SignUpPage.css';

interface signForm {
    username : string;
    code : string;
    password:string;
    password2:string;
}

function SignUp() {

  const navigate = useNavigate();
  const signUrl = 'http://localhost:8000/api/accounts/'
  const Adcode = 'Asd23'


  const [signForm, setSignForm] = useState<signForm>({
    username: "",
    code: "",
    password: "",
    password2: "",
  })
  const [error, setError] = useState()

  const { username, code, password, password2 } = signForm

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setSignForm({
      ...signForm,
      [name]: value
    })
  }

  const onClickSignUpBtn = () => {
    // axios.post(signUrl, signForm)
    //   .then(res => {
    //     alert("회원가입 성공")
    //     localStorage.setItem('access_token', res.data.access_token)
    //     localStorage.setItem('refresh_token', res.data.refresh_token)
    //     navigate("/");
    //   })
    //   .catch(error => {
    //     setError(error.response.data)
    //     alert("입력값이 잘못됐어요!")
    //   })
    if(password !== password2){
        alert("비밀번호가 다릅니다")
    }else if(code !== Adcode){
        alert("코드가 틀렸습니다")
    }else if(username === ""){
        alert("사용자 명을 입력해주세요")
    }else{
        alert("회원가입 성공!")
        navigate("/main")
    }
    
  }

  return (
    <div className="wrapper_SignUp">
      <div className="SignUP">
        <div className="SignUp_Title">
          your Welcome !
        </div>
      </div>
        <div className="SignUp_Form">
          <label>사용자 명</label>
          <input className="signup_inputname"
            onChange={handleChangeInput}
            placeholder="Name"
            type="name"
            name="username"
            value={username} />
          {error && error.username !== undefined && (
            <span>이미존재하는 이름입니다.</span>
          )}

          <label>코드</label>
          <input className="signup_inputemail"
            onChange={handleChangeInput}
            placeholder="Admin Code"
            name="code"
            value={code} />
          

          <label>비밀번호</label>
          <input className="signup_inputpassword"
            onChange={handleChangeInput}
            placeholder="Password"
            type="password"
            name="password"
            value={password} />
             {/* {error && error.password !== undefined && (
            <span>이메일과 비슷한단어가 포함됐거나 8글자 이상 영어와 숫자를 포함되지않앗습니다</span>
          )} */}

          <label>비밀번호 확인</label>
          <input className="signup_inputpassword_confirm"
            onChange={handleChangeInput}
            placeholder="Confrim Password"
            name="password2"
            type='password'
            value={password2} />
             {/* {error && error.code !== undefined && (
            <span>위 패스워드와 동일한 패스워드를 입력해주세요.</span>
          )} */}

        </div>
      <div className="SignUp_btn">
        <button
          onClick={() => onClickSignUpBtn()}
          className="SignUp_text"
          type="submit">
          가입하기
        </button>
      </div>
    </div>
  )
}

export default SignUp
