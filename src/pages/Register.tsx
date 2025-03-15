const Register = () => {
  return (
    <div
      id="register"
      className="w-full max-w-[1440px] !mx-auto flex justify-center items-center h-full bg-[#918478]"
    >
      <div className="border rounded-md">
        <div className="w-[25rem] h-[30rem] flex flex-col justify-center items-center gap-5 text-[#FFFFFF]">
          <div>
            <img
              src="/images/wmsu_logo.png"
              alt="logo"
              className="w-30 h-30 object-cover object-top"
            />
          </div>
          <p className="text-4xl font-bold text-balance">
            Register to start voting
          </p>
        </div>
      </div>
      {/* Form */}
      <div className="w-[25rem] h-[20rem] w-full justify-center flex flex-col rounded-md gap-2 bg-[#FFFFFF]">
        <p className="text-left text-[#918478]">Email Address</p>
        <input
          type="email"
          placeholder="name@wmsu.edu.ph"
          className="border py-2 rounded-md w-full pl-5 outline-none text-[#918478]"
        />
        <p className="text-left text-[#918478]">Password</p>
        <input type="password" placeholder="Password" className="border py-2 rounded-md w-full pl-5 outline-none text-[#918478]" />

        {/* Create account */}
        <button className="w-full py-2 rounded-full bg-[#918478] font-semibold ">Create account</button>
      </div>
    </div>
  );
};

export default Register;
