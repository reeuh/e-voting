// import { MdDashboard } from "react-icons/md"

const AdminDashboard = () => {
  return (
    <div id="dashboard" className="w-full h-screen flex">
      <div className="w-1/4 h-screen justify-center items-center py-10 bg-[#BB3333]">
      <div className="flex px-5">
        <img src="/images/wmsu_logo.png" alt="" className="w-15 h-15 flex space-x-2 items-center" />
        <h1 className="text-2xl font-bold py-5 px-2">ADMIN DASHBOARD</h1>
      </div>
      <ul className="py-5">
        <p className="font-bold text-2xl py-5">Reports</p>
        <li className="flex justify-center items-center">
         <a href="" >Dashboard</a></li>
        <li><a href="">Votes</a></li>
      </ul>
      <ul className="py-5">
        <p className="font-bold text-2xl py-5">Manage</p>
        <li>Voters</li>
        <li>Positions</li>
        <li>Candidates</li>
      </ul>
      <ul className="py-5">
        <p className="font-bold text-2xl py-5">Settings</p>
        <li>Ballot Position</li>
        <li>Election Title</li>
      </ul>
      <div>
        <button className="px-5 py-3 border rounded-md bg-[#BB3333]">
          <a href="/login">Logout</a>
        </button>
      </div>
      <div className="w-3/4 h-screen"></div>
      </div>
    </div>
  )
}

export default AdminDashboard