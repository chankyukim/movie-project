import React, { useEffect, useRef, useState } from 'react';
import AuthLayout from '../../auth/AuthLayout';
import FormBox from '../../auth/FormBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import Input from '../../auth/Input';
import SubTitle from '../../auth/SubTitle';
import Button from '../../auth/Button';
import BottomBox from '../../auth/BottomBox';
import Error from '../../auth/Error';
import { axiosServer } from '../../../api/axios';
import { REGISTER_URL } from '../../../config/config';
import { useNavigate } from 'react-router-dom';

const NAME_REGEX = /^[가-힣|a-zA-Z|0-9]{2,23}$/;
//한글,영문자a-z,A-z,숫자 가능 2글자 이상, 23글자 이하
const EMAIL_REGEX = /^[0-9a-z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
//5~20자의 영문자, 숫자와 특수기호(_),(-)만 가능합니다.
const PWD_REGEX = /^(?=.*[a-z]|[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,16}$/;
//8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.

const RegisterPage = () => {
  const nameRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
      setErrorMsg('Invalid Entry');
      return;
    }

    try {
      const response = await axiosServer.post(
        REGISTER_URL,
        JSON.stringify({ username: name, email, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      navigate('/signin');
      // setName('');
      // setEmail('');
      // setPwd('');
    } catch (error) {
      if (!error?.response) {
        setErrorMsg('서버에 연결할 수 없습니다.');
      } else if (error.response?.status === 409) {
        setErrorMsg('이미 사용중인 이메일입니다.');
      } else {
        setErrorMsg('Registration failed');
      }
    }
  };

  const handleFocusName = () => {
    const result = NAME_REGEX.test(name);
    setValidName(result);
    // setFocusName(false);
  };

  const handleFocusEmail = () => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
    // setFocusEmail(false);
  };

  const handleFocusPwd = () => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    // setFocusPwd(false);
  };

  const handleFocusMatch = () => {
    const result = pwd === matchPwd;
    setValidMatch(result);
    // setFocusMatch(false);
  };

  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faKey} size="3x" />
        </div>
        <SubTitle text="Sign Up" />
        <form onSubmit={handleSubmit}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            ref={nameRef}
            onBlur={handleFocusName}
            // onFocus={() => setFocusName(true)}
            type="text"
            placeholder="Username"
          />
          {name && !validName ? (
            <Error
              validName={validName}
              ErrorText="한글과 영문 대,소문자를 사용하세요.(특수기호, 공백 사용 불가)"
            />
          ) : null}

          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={handleFocusEmail}
            // onFocus={() => setFocusEmail(true)}
            type="text"
            placeholder="Email"
          />
          {email && !validEmail ? (
            <Error
              validEmail={validEmail}
              ErrorText="5~20자의 영문자, 숫자와 특수기호(_),(-)만 가능합니다."
            />
          ) : null}

          <Input
            value={pwd}
            onChange={e => setPwd(e.target.value)}
            onBlur={handleFocusPwd}
            // onFocus={() => setFocusPwd(true)}
            type="password"
            placeholder="Password"
          />
          {pwd && !validPwd ? (
            <Error
              validPwd={validPwd}
              ErrorText="8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
            />
          ) : null}

          <Input
            value={matchPwd}
            onChange={e => setMatchPwd(e.target.value)}
            onBlur={handleFocusMatch}
            // onFocus={() => setFocusMatch(true)}
            type="password"
            placeholder="Confirm Password"
          />
          {matchPwd && !validMatch ? (
            <Error validMatch={validMatch} ErrorText="비밀번호가 일치하지 않습니다." />
          ) : null}

          <Button disabled={!validName || !validEmail || !validPwd || !validMatch ? true : false}>
            Sign Up
          </Button>
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Sign In" link="/signin"></BottomBox>
    </AuthLayout>
  );
};

export default RegisterPage;
