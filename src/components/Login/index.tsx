export const Login = () => {
  function onLogin() {
    localStorage.setItem("token", "abc123");
  }

  return <button onClick={onLogin}>Fazer Login!</button>;
};
