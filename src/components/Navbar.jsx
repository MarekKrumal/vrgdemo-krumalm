import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="fixed w-full h-[90px] flex justify-between items-center p-1 z-30">
        <Link className="text-xl" to="/">
          <h1 className="p-3 text-3xl font-bold ">VRG Demo</h1>
        </Link>
        <ul className="hidden md:flex">
          <li className="p-[1rem]">
            <Link className="text-2xl" to="/">
              Home
            </Link>
          </li>
          <li className="p-[1rem]">
            <Link className="text-2xl" to="/navod">
              Navod
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
