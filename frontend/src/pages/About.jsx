import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <section>
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-red-500">Local Always Fresh</h2>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">Our Commitment</h3>
				<p className="mt-3 text-lg ">Since opening our doors, we have been dedicated to providing the freshest ingredients and the most delicious pizzas to our beloved community. Our passion for pizza drives us to create unique and mouthwatering combinations that keep our customers coming back for more.</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 ">Quality Ingredients</h4>
							<p className="mt-2">We source our ingredients locally to ensure that every pizza we serve is as fresh as possible. From the vine-ripened tomatoes in our sauce to the hand-tossed dough, quality is our top priority.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 ">Community Focused</h4>
							<p className="mt-2">Our pizzeria is more than just a place to eat; it&apos;s a community hub where friends and family gather. We pride ourselves on creating a welcoming environment for everyone.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 ">Innovation and Tradition</h4>
							<p className="mt-2">While we respect the traditional methods of pizza making, we also love to innovate. Our menu features both classic favorites and exciting new creations, ensuring there&apos;s  something for everyone.</p>
						</div>
					</div>
				</div>
			</div>
			
			<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 ">
            <img
              src="https://i.imghippo.com/files/tcnbu1720634623.jpg"
              alt="pizza kitchen"
              className="mx-auto rounded-lg shadow-lg sm:h-96 md:h-124 lg:h-96"
            />
          </div>
					
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">Serving The Community</h3>
					<p className="mt-3 text-lg">We are committed to providing an exceptional dining experience. From the moment you walk through our doors to the last bite of pizza, we strive to exceed your expectations with our service and food quality.</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 ">Customer Satisfaction</h4>
								<p className="mt-2">Our customers are at the heart of everything we do. We listen to your feedback and continuously improve our offerings to meet your needs.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 ">Sustainable Practices</h4>
								<p className="mt-2">We believe in sustainability and take steps to minimize our environmental impact. From using eco-friendly packaging to reducing food waste, we are dedicated to being a responsible business.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 ">Community Involvement</h4>
								<p className="mt-2">We are proud to be part of this community and are committed to giving back. We support local events, charities, and schools to help make our community a better place.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://i.imghippo.com/files/J0UK81720646384.jpg" alt="" className="mx-auto rounded-lg shadow-lg sm:h-96 md:h-124 lg:h-96"/>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer />
    </div>
  );
}

export default About;

