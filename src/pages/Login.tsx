const Login = () => {
  return (
    <div className="w-full max-w-[1440px] !mx-auto flex justify-center items-center h-full bg-[#918478]">
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
            className="border py-2 rounded-md w-full pl-5 outline-none" required
          />
        </div>
        <div className="relative w-full text-[#918478]">
          <input
            type="password"
            placeholder="Password"
            className="border py-2 rounded-md w-full pl-5 pr-10 outline-none" required
          />
        </div>

        {/* Login button */}

        <button className="px-10 py-2 rounded-md border border-[#918478] bg-[#918478] font-semibold text-[#FFFFFF]">
          Login
        </button>

        {/* Forgot Password */}
        <div className="flex flex-col gap-1">
          <a href="" className="text-sm hover:underline">
            No account yet? Click to register.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
