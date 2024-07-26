import closeicon from '/images/closeicon.png';
import hamburgermenu from '/images/hbmenuicon.png';
import { useState, useContext } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { CartContext } from '../context/CartContext';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'About', url: '/about' },
  { id: 4, title: 'Contact', url: '/contact' },
];

function MenuIcons() {
  const { cart } = useContext(CartContext);
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <img
        src={open ? closeicon : hamburgermenu}
        alt="icons to open and close menu"
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer z-20"
      />
      {open && (
        <div className="bg-red-500 text-white fixed left-0 top-12 w-full h-[calc(100vh-3rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <a href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </a>
          ))}
          <a href='/cart' onClick={() => setOpen(false)} className='flex items-center gap-3'>
            <div className='relative w-8 h-8 md:w-5 md:h-5'>
              <GiShoppingCart />
            </div>
            {totalCount > 0 && <span>cart({totalCount})</span>}
          </a>
        </div>
      )}
    </div>
  );
}

export default MenuIcons;

