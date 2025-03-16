import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const Register = () => {
  return (
    <div id="register" className="w-full h-screen flex">
      <div className="w-1/2 h-full flex justify-center items-center bg-[#BB3333]">
        <div className="w-[40rem] h-[40rem] flex flex-col items-center gap-5 bg-[#FFFFFF] text-[#918478] rounded-md px-10 py-12">
          <Link to="/login" className="w-full flex justify-start items-center space-x-2">
          <button className="flex items-center">
          <IoMdArrowBack className="text-3xl"/>
          </button>
          </Link>
          <p className="text-2xl font-bold py-5">REGISTER TO VOTE</p>

          {/* Username and password */}
          <div className="w-full flex gap-x-2">
            <div className="w-1/2 h-full py-5">
              <p className="text-left">First Name</p>
              <input
                type="text"
                className="border py-2 rounded-md w-full pl-5 outline-none"
              />
            </div>
            <div className="w-1/2 h-full py-5">
              <p className="text-left">Last Name</p>
              <input
                type="text"
                className="border py-2 rounded-md w-full pl-5 outline-none"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-left">Email address</p>
            <input
              type="email"
              placeholder="xt2020-XXXXX@wmsu.edu.ph"
              className="border py-2 rounded-md w-full pl-5 outline-none"
            />
            <div className="w-full flex flex-col gap-2">
              <p className="text-left">Password</p>
              <input
                type="password"
                placeholder="Password"
                className="border py-2 rounded-md w-full pl-5 outline-none"
              />
            </div>

            {/* Register button */}

            <button className="bg-[#BB3333] text-[#FFFFFF] py-2 rounded-md hover:border hover:border-white">
              Register Account
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#A33333]">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="/images/WMSU.png"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
