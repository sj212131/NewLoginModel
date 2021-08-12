import "./App.css";

function App() {
  return (
    <div className="App" id="LoginModel">
      <h1>New Login Model</h1>
      <div className="form">
        <div className="usernameInput">
          <p>Username</p>
          <input name="username" placeholder="Username"></input>
        </div>
        <br />
        <div className="passwordInput">
          <p>Password</p>
          <input name="password" placeholder="Password"></input>
        </div>
      </div>
      <div className="buttomForm">
        <button type="button" className="btn btn-primary btn-lg" id="loginBtn">
          Login
        </button>
        <button type="button" className="btn btn-primary btn-lg" id="signUpBtn">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default App;
