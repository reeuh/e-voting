import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="/login" className="w-screen h-screen flex justify-center items-center bg-[#BB3333] pl-20">
      <div className="w-[30rem] h-[30rem] flex flex-col justify-center items-center gap-5 bg-[#FFFFFF] text-[#918478] rounded-md px-10 py-12">
        <div>
          <img
            src="/images/wmsu_logo.png"
            alt="logo"
            className="w-30 h-30 object-cover object-top"
          />
        </div>
        <p className="text-2xl font-bold py-5">Member Login</p>

        {/* Username and password */}

        <div className="w-full flex flex-col text-[#918478]">
          <input
            placeholder="User ID or Email"
            className="border py-2 rounded-md w-full pl-5 outline-none"
          />
        </div>
        <div className="relative w-full text-[#918478]">
          <input
            type="password"
            placeholder="Password"
            className="border py-2 rounded-md w-full pl-5 pr-10 outline-none" 
          />
        </div>

        {/* Login button */}

        <Link to="/dashboard">
        <button className="px-10 py-2 rounded-md border border-[#918478] bg-[#BB3333] hover:bg-[#8E3333] font-semibold text-[#FFFFFF]">
          Login
        </button>
        </Link>

        {/* Register */}
        <Link to="/register" >
        <div className="flex flex-col gap-1">
          <a href="" className="text-sm hover:underline">
            No account yet? Click to register.
          </a>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
