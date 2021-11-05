import React from 'react'


function LoginBar(props) {

  return (
    <div className='login-bar'>
      <form 
        className="input-form"
        id="login-form"
        action="" 
      >
        
        <i className="fa fa-user user-icon"></i>
        <input 
          type="text" 
          className='login-input'
          placeholder="Username" 
          name="search"
        >
        </input>
        <i className="fa fa-lock lock-icon"></i>
        <input 
          type="text" 
          className='login-input'
          placeholder="Password" 
          name="search"
        >
        </input>
      </form>
    </div>
  );
}

export default LoginBar;