import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provaider/AuthProvaider";
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to="/order/salad">Order Now</Link></li>
        <li><Link to="/">
            <button className="btn">
                <FaShoppingCart className="text-xl mr-2"></FaShoppingCart>
                <div className="badge badge-secondary">+0</div>
            </button>
        </Link>
        </li>




    </>


    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-center items-center gap-4">
                        {
                            user ? <>
                                <span>{user?.displayName}</span>
                                <img className="w-[30px] h-[30px] rounded-2xl" src={user?.photoURL} alt="" />
                                <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
                            </> : <>
                                <li><Link to="/login">Login</Link></li>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;