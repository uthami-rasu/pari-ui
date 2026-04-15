import LoginLeftPanel from '../../components/login/LoginLeftPanel';
import LoginRightPanel from '../../components/login/LoginRightPanel';

const LoginPage = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden bg-[#f0f4f8]">
      <LoginLeftPanel />
      <LoginRightPanel />
    </div>
  );
};

export default LoginPage;
