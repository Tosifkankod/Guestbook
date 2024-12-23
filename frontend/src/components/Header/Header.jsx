import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="p-2 sticky top-0 w-full bg-white px-6 border-2 items-center flex-col md:flex-row text-blue-600 justify-between shadow-md flex ">
      <div className="left">
        <NavLink to='/' className="text-2xl">Guestbook</NavLink>
      </div>
      <div className="right flex items-center justify-center gap-4 text-xl">
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/entries' >Entries</NavLink>
       
        <NavLink to='/entries/new' className="p-2 border-2 hover:bg-blue-600 hover:text-white transition  text-blue-600  border-blue-600 rounded-md">Write in the Guestbook</NavLink>
      </div>
    </div>
  )
}

export default Header