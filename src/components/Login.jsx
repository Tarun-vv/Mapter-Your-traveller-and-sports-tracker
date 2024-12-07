import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("test@123");

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "test@example.com" && password === "test@123") {
      navigate("/app");
    }
  }

  return (
    <form
      className="absolute w-[500px] bg-stone-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <p className="text-3xl text-center">Login</p>
      <div>
        <label className="block text-lg">Email</label>
        <input
          type="email"
          required
          className="block w-full p-2"
          defaultValue={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-lg">Password</label>
        <input
          type="password"
          required
          className="block w-full p-2"
          defaultValue={password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="w-full py-2 text-xl font-semibold text-center bg-blue-400">
        Log in
      </button>
    </form>
  );
}

export default Login;
