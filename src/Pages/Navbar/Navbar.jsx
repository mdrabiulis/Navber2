import Log from "./Log/Log";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <Log></Log>
      <nav className="">
        <ul className="">
          <li className="hover:bg-red-300 w-20 rounded-md p-2">Home</li>
          <li className="hover:bg-red-300 w-20 rounded-md p-2">Blog</li>
          <li className="hover:bg-red-300 w-20 rounded-md p-2">About</li>
          <li className="hover:bg-red-300 w-20 rounded-md p-2">Contact</li>
          <li className="hover:bg-red-300 w-20 rounded-md p-2">Utility</li>
          <li className="hover:bg-red-300 w-20 rounded-md p-2 hover:drop-shadow-md ">Account</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
