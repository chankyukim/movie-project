import React, { useContext, useEffect, useRef, useState } from 'react';
import AuthLayout from '../../auth/AuthLayout';
import BottomBox from '../../auth/BottomBox';
import FormBox from '../../auth/FormBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Input from '../../auth/Input';
import Button from '../../auth/Button';
import SubTitle from '../../auth/SubTitle';
import Seperator from '../../auth/Seperator';
import { axiosServer } from '../../../api/axios';
import { LOGIN_URL } from '../../../config/config';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { auth, setAuth } = useAuth();

  const emailRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axiosServer.post(LOGIN_URL, JSON.stringify({ email, pwd }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pwd, roles, accessToken });
      setEmail('');
      setPwd('');
      navigate('/', { replace: true });
    } catch (error) {
      if (!error?.response) {
        setErrorMsg('서버 에러');
      } else if (error?.response?.status === 400) {
        setErrorMsg('이메일과 비밀번호는 필수입니다.');
      } else if (error?.response?.status === 401) {
        setErrorMsg('존재하는 이메일이 없거나 비밀번호가 틀렸습니다.');
      } else {
        setErrorMsg('로그인에 실패하셨습니다.');
      }
    }
  };

  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faRightToBracket} size="3x" />
        </div>
        <SubTitle text="Sign In" />
        {errorMsg ? <ErrorMessage errorMsg={errorMsg} /> : null}

        <form onSubmit={handleSubmit}>
          <Input
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            ref={emailRef}
          />
          <Input onChange={e => setPwd(e.target.value)} type="password" placeholder="Password" />
          <Button>Sign In</Button>
        </form>
        <Seperator />
      </FormBox>
      <BottomBox cta="Don't have an account" linkText="Sign Up" link="/signup"></BottomBox>
    </AuthLayout>
  );
};

export default LoginPage;
