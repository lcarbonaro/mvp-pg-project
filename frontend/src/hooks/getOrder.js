import axiosInstance from "../axiosInstance";
// create order gets the order passed from checkout page send the data to post address we create backend route
const createOrder = async (order) => {
  try {
    const response = await axiosInstance.post('/orders/create', order);
    return response.data;
  } catch (error) {
    console.error("There was an error creating the order!", error);
    throw error;
  }
}

export default createOrder;