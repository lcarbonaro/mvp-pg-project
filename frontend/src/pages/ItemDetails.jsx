import { useParams } from 'react-router-dom';
import { getItemById } from '../hooks/getProductList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getItemById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const { img, desc, title, price } = product;

  const handleSizeClick = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity > 0 ? newQuantity : 1);
  };

  const handleAddToCart = () => {
    let selectedPrice;
    if (Array.isArray(price)) {
      if (title.toLowerCase().includes('pizza')) {
        if (size === null || size >= price.length) {
          console.error('Invalid size:', size);
          toast.error('Please select a size before adding to cart');
          return;
        }
        selectedPrice = price[size];
      } else {
        selectedPrice = price[0];
      }
    } else {
      selectedPrice = price;
    }

    if (isNaN(selectedPrice) || selectedPrice === undefined || selectedPrice === null) {
      console.error('Invalid price:', selectedPrice);
      toast.error('Invalid price, cannot add to cart');
      return;
    }

    addToCart({ ...product, size, quantity, price: selectedPrice });
    toast.success('One item added to cart', { autoClose: 2000 });
  };

  const handleRemoveFromCart = () => {
    let selectedPrice;
    if (Array.isArray(price)) {
      selectedPrice = title.toLowerCase().includes('pizza') ? price[size] : price[0];
    } else {
      selectedPrice = price;
    }

    if (isNaN(selectedPrice) || selectedPrice === undefined || selectedPrice === null) {
      console.error('Invalid price:', selectedPrice);
      toast.error('Invalid price, cannot remove from cart');
      return;
    }

    removeFromCart({ ...product, size, quantity, price: selectedPrice });
    toast.info('Item removed from cart', { autoClose: 2000 });
  };

  const isPizza = title.toLowerCase().includes('pizza');
  const selectedPrice = Array.isArray(price) && size !== null ? price[size] : price;

  return (
    <>
      <Navbar />
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4 py-6">
              <div className="h-[360px]">
                <img className="object-contain w-96 h-96" src={img} alt={title} />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <div className="py-2 font-bold text-xl">
                Price: ${typeof selectedPrice === 'number'
                  ? selectedPrice.toFixed(2)
                  : Array.isArray(selectedPrice)
                    ? selectedPrice.map((p) => p.toFixed(2)).join(', ')
                    : 'N/A'}
              </div>

              {isPizza && (
                <div className="mb-4">
                  <div className="font-bold">Select Size:</div>
                  <div className="flex items-center justify-start">
                    <div onClick={() => handleSizeClick(0)} className={`flex items-center mt-2 mr-2 cursor-pointer ${size === 0 ? 'border border-blue-500' : ''}`}>
                      <img src="/images/pizzasize.png" className="w-12 h-12" alt="Small size" />
                      <span className="py-2 px-2 font-bold">S</span>
                    </div>
                    <div onClick={() => handleSizeClick(1)} className={`flex items-center mt-2 mr-2 cursor-pointer ${size === 1 ? 'border border-blue-500' : ''}`}>
                      <img src="/images/pizzasize.png" className="w-16 h-16" alt="Medium size" />
                      <span className="py-2 px-2 font-bold">M</span>
                    </div>
                    <div onClick={() => handleSizeClick(2)} className={`flex items-center mt-2 cursor-pointer ${size === 2 ? 'border border-blue-500' : ''}`}>
                      <img src="/images/pizzasize.png" className="w-20 h-20" alt="Large size" />
                      <span className="py-2 px-2 font-bold">L</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-4">
                <span className="font-bold">Quantity:</span>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border rounded px-2 py-1 ml-2"
                />
              </div>

              <div className="mb-4">
                <span className="font-bold">Product Description:</span>
                <p className="text-sm mt-2">{desc}</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleRemoveFromCart}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ItemDetails;


