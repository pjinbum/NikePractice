import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div style={{display : 'flex' , justifyContent : 'center'}}>
      <div className='logDiv' style={{width : '500px' , height : '500px', marginTop : '100px'}}>
        <div>
          <img width={50} src="https://blog.kakaocdn.net/dn/o2k2o/btqwR37aRMc/imACexBUQZJms7mQRkQck1/img.jpg" alt="logo" />
        </div>
        <div>
          <h2>가입 또는 로그인을 위해 이메일을 입력하세요.</h2>
          <span>대한민국</span>  <span><a href="">변경</a></span>
        </div>
        <div>
          <input style={{height : '50px', width : '490px'}} type="text" placeholder='  이메일'/>
        </div>
        <div>
          계속 진행하면 나이키의 <a href="">개인 정보 처리 방침</a> 및 이용약관에 동의하게 됩니다.
        </div>
        <div style={{ textAlign : 'end'}}>
          <button style={{width : '100px' , height : '50px' , border : 'none' , borderRadius : '30px' , backgroundColor : 'black' , color : '#fff' }}>계속</button>
        </div>
      </div>


    </div>
  )
}

export default Login