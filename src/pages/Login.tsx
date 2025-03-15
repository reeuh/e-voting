const Login = () => {
  return (
    <div className="w-full max-w-[1440px] !mx-auto flex justify-center items-center h-full bg-[#918478]">
      <div className="w-[30rem] h-[30rem] flex flex-col justify-center items-center gap-5 bg-[#FFFFFF] text-[#918478] rounded-md px-10 py-12">
        <div>
            <img src="/images/wmsu_logo.png" alt="logo" className="w-full h-full object-cover py-[-1rem]"/>
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
      </div>
    </div>
  );
};

export default Login;
