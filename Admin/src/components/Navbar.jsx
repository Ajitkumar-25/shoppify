import logo from "../assets/logo.svg";
import profileImg from "../assets/profile.png";

function Navbar() {
  return (
    <nav className="max_padd_container flexBetween bg-white py-2 ring-1 ring-slate-900/5">
      <div>
        <img src={logo} alt="not found" />
      </div>
      <div className="uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 mx-xs:px-1">Admin panel </div>
      <div>
        <img src={profileImg} alt="" className="h-12 w-12 rounded-full" />
      </div>
    </nav>
  );
}

export default Navbar;
