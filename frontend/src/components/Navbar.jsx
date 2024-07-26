import { Link } from 'react-router-dom';
import MenuIcons from './MenuIcons';
import { GiShoppingCart } from 'react-icons/gi';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const { cart } = useContext(CartContext);
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* Left Links */}
      <nav className='hidden md:flex gap-4 flex-1'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link to="/">Mia&apos;s Pizzeria</Link>
      </div>

      {/* MOBILE NAVIGATION MENU */}
      <div className='md:hidden'>
        <MenuIcons />
      </div>

      {/* Right Links */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        {user ? (
          <>
            <span className="text-red-500">{user.name}</span>
            <button
              onClick={handleLogout}
              className="text-white bg-red-400 hover:bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-white bg-red-400 hover:bg-red-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
        <Link to="/cart" className='flex items-center gap-3 text-2xl cursor-pointer'>
          <GiShoppingCart />
          {totalCount > 0 && <span>cart({totalCount})</span>}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
