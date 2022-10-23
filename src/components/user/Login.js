import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';


  export default function Login(props) {
    const navigate = useNavigate();
    const userName = useRef();
    const  passwordUser = useRef();
   
    const navigateHome = () => {
            const user = userName.current.value;
            const passwordU = passwordUser.current.value;
            if (user !== '' && passwordU !== '') {
                props.setNameUser(user);
                console.log(user);
                userName.current.value = null;
                passwordUser.current.value = null;
                navigate('/');
            } else {
                alert('Log in please!');
                userName.current.value = null;
                passwordUser.current.value = null;
            }
      };
      const navigateSingup = () => {
           navigate('/singup');
        };
   
    return (
        <div >
            <h2> Log in </h2>
            <input type='text' className='input' placeholder='user name' ref={userName}></input>
            <br/>
            <br/>
            <input type='password' className='input' placeholder='password' ref={passwordUser}></input>
            <br/>
            <button className='input' onClick={navigateHome}>Log in</button>
            <br/>
            <div style={{color:'rgb(64,64,64)'}}>Don't have account?</div>
            <button className='typeLink' onClick={navigateSingup}>Sing up</button>
        </div>
    );
}

