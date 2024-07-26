import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleQuantityChange = (item, quantity) => {
    if (quantity > 0) {
      updateQuantity(item, quantity);
    } else {
      removeFromCart(item);
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTaxes = () => {
    return calculateSubtotal() * 0.1; // Assuming 10% tax rate
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxes();
  };

  return (
    <>
      <Banner />
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg">Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <div className="flex flex-col gap-4">
                    {cart.map((item, index) => (
                      <div key={index} className="flex flex-col md:flex-row items-start md:items-center border-t py-4">
                        <div className="flex-1 mb-2 md:mb-0">
                          <div className="flex items-center">
                            <img className="h-16 w-16 mr-4" src={item.img} alt={item.title} />
                            <span className="font-semibold">{item.title} x{item.quantity}</span>
                          </div>
                        </div>
                        <div className="flex-1 mb-2 md:mb-0">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                              <button
                                className="border rounded-md py-2 px-4 mr-2"
                                onClick={() => handleQuantityChange(item, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="text-center w-8">{item.quantity}</span>
                              <button
                                className="border rounded-md py-2 px-4 ml-2"
                                onClick={() => handleQuantityChange(item, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <div className="flex items-center md:hidden">
                              <span className="ml-4 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                              <button
                                className="bg-red-500 text-white py-2 px-2 rounded-md ml-2"
                                onClick={() => handleRemove(item)}
                              >
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 mb-2 md:mb-0 hidden md:flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="font-semibold">Total:</span>
                            <span className="ml-2">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                          <button
                            className="bg-red-500 text-white py-2 px-2 rounded-md ml-2"
                            onClick={() => handleRemove(item)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">Summary</h2>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes</span>
                    <span>${calculateTaxes().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
                  </div>
                  <Link to="/checkout">
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

