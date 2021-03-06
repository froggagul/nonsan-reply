import * as React from 'react';
import '../styles/login.scss';
import { GetEmail, Login, Register } from '../components/login';

interface User {
  email?: string,
  password?: string,
  name?: string,
}

export default () => {
  const [userInfo, setUserInfo] = React.useState<User>();
  const [phase, setPhase] = React.useState<'GetEmail' | 'UserExist' | 'UserNExist'>('GetEmail');
  const components = {
    GetEmail: <GetEmail setPhase={setPhase} setUserInfo={setUserInfo} userInfo={userInfo} />,
    UserExist: <Login userInfo={userInfo} />,
    UserNExist: <Register setPhase={setPhase} userInfo={userInfo} />,
  };
  return (
    <div className="main">
      <h1 className="title" onClick={() => { window.location.href = './'; }}>ARMPLY</h1>
      <div className={`container ${phase}`}>
        {components[phase]}
      </div>
    </div>
  );
};
