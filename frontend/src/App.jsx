import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Authroute from './components/Authroute/Authroute';
import ItemDetails from './pages/ItemDetails';
import { CartProvider } from './context/CartContext'; 
import { AuthProvider } from './hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Route */}
            <Route
              path="/checkout"
              element={
                <Authroute>
                  <Checkout />
                </Authroute>
              }
            />
          </Routes>
        </CartProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;