import { useQuery } from 'react-query';
import { getAllItems } from '../hooks/getProductList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { IoPizzaOutline } from 'react-icons/io5';

const Menu = () => {
  const { data, isLoading, error } = useQuery('items', getAllItems);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Banner />
      <Navbar />
      <div className="flex justify-center items-center gap-3 mt-12">
        <IoPizzaOutline className="animate-fade-down animate-once text-5xl text-red-500 flex " />
        <h1 className='font-bold text-red-500 text-5xl'>Menu</h1>
      </div>
      
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {data.map(item => (
          <div key={item.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link to={`/item/${item.id}`}>
              <img className="h-80 w-96 object-fit rounded-t-xl" src={`${item.img} `}
               alt={item.title} />
               {console.log(item.img)}
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">{item.title}</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">{item.price[0] !== undefined ? `$${item.price[0].toFixed(2)}` : `$${item.price.toFixed(2)}`}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Menu; 

