// // Login.tsx
import { useState } from 'react';
import axios from '../../utils/axios';
import { Button, LoginContainer, Title } from './login.styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/redux_slices/user.slice';

const Login = () => {
  const [index, setIndex] = useState(0)
  const [message, setMessage] = useState('')
  const [pin, setPin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userID, setUserID] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value)
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
    if (event.target.name === 'pin') {
      setPin(event.target.value)
    }
  }

  const PasswordVerification = () => {
    return (
      <div>
        a@lol.se secret123%
        <label>
          Email:
          <input onChange={onChangeHandler} name='email' type="text" value={email} placeholder="Enter your email" />
        </label>
        <br />
        <label>
          Password:
          <input onChange={onChangeHandler} name='password' type="password" value={password} placeholder="Enter your password" />
        </label>
        <br />
      </div>
    )
  }
  const PinVerification = () => {
    return (
      <div>
        <label>
          Pin:
          <input onChange={onChangeHandler} type="text" name='pin' value={pin} />
        </label>
      </div>
    )
  }
  const handle2FA = async () => {
    try {
      switch (index) {
        case 0: {
          const response = await axios.post('/login/s1', { email, password });
          if (response.status === 200) {
            setUserID(response.data.payload)
            setIndex(1)
          } else {
            setMessage('Password or Email was wrong, please try again...')
          }
          break;
        }
        case 1: {
          const response = await axios.post(`/login/s2/${userID}`, { pin });
          if (response.status === 200) {
            dispatch(updateUser({name: 'DonaldDuck'}))
            navigate('/')
          } else {
            setMessage('Pin was wrong, please try again...')
          }
          break;
        }
      }
    } catch (err) {
      console.log(err)
    }
  };
  const factor = [PasswordVerification, PinVerification]


  return (
    <LoginContainer>
      <Title>{message}</Title>
      {factor[index]()}
      <Button onClick={handle2FA}>Click</Button>
      <p>Hejhej</p>
    </LoginContainer>
  );
};

export default Login;
