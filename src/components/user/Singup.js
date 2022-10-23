import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';


const Singup = (props) => {
    const navigate1 = useNavigate();
    const user = useRef();
    const password= useRef();
    const nameUser = useRef();
    const navigateHome1 = () => {
        const userConfirm = user.current.value;
        const passwordConfirm = password.current.value;
        const nameConfirm = nameUser.current.value;
        if (userConfirm !== '' && passwordConfirm !== '' && nameConfirm !== '') {
            props.setNameUser(userConfirm);
            console.log(userConfirm);
            navigate1('/');
            user.current.value = null;
            password.current.value = null;
            nameUser.current.value = null;
        } else {
            user.current.value = null;
            password.current.value = null;
            nameUser.current.value = null;
            alert('Please sing up!');
        }
  };
  return (
    <div> 
        <h2>Create your account</h2>
        <input type='text' className='input' placeholder='name' ref={nameUser}/>
        <br></br>
        <br/>
        <input type='text' className='input' placeholder='user name' ref={user}/>
        <br/>
        <br/>
        <input type='password' className='input' placeholder='password' ref={password}/>
        <br></br>
        <button onClick={navigateHome1}>Sing up</button>
    </div>

  )
}

export default Singup;