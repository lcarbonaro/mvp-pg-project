import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {

  return (
    <>
    <Banner />
    <Navbar />
	<div className="grid lg:grid-cols-2 gap-3">
	<div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
		<figure className="relative w-full h-60">
		<img className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="images/pizza.jpg" alt="pizza image" loading='lazy' />
		</figure>
		<figure className="relative w-full h-60">
		<img className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="images/igrejapreta.jpg" alt="pizza image" loading='lazy'/>
		</figure>
 </div>
	<figure className="relative w-full h-72 sm:h-96 lg:h-full">
	<img className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="images/pizzatrio2.jpg" alt="pizza image" loading='lazy' />
	</figure>
	</div>
    <section className="p-6 dark:text-gray-800">
	<form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-10 bg-red-500 text-white">Send</button>
		</div>
	</form>
</section>
<Footer />
    </>
  )
}

export default Contact
