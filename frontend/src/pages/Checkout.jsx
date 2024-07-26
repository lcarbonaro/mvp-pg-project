import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Checkout() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/cart'); 
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="absolute top-4 left-4">
                <button 
                    onClick={handleBackClick} 
                    className="bg-red-500 text-white text-xl py-2 px-4 rounded-lg "
                >
                    Back
                </button>
            </div>
            <PayPalScriptProvider options={{ clientId: "test" }}>
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <PayPalButtons style={{ layout: "vertical" }} />
                </div>
            </PayPalScriptProvider>
        </div>
    );
}
