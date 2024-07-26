function FeaturedItems() {
  return (
	
	<div className="w-full relative bg-white shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] overflow-hidden flex flex-col items-start justify-start tracking-[normal] mt-12">
	<section className="p-4 lg:p-36 dark:text-gray-100">
<div className="container mx-auto space-y-12">
	<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-fuchsia-50">
	<img src="/images/trio.jpg" alt="" className="h-80  aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				
			<h3 className="text-3xl font-bold text-red-500">Best Pizza In Town </h3>
			</div>
</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse bg-fuchsia-50">
		<img src="/images/firewood.jpg" alt="" className="h-80 aspect-video" />
<div className="flex flex-col justify-center flex-1 p-6 shadow-xl">
			<h3 className="text-3xl text-red-500 font-bold">Baked Fresh Daily In Our Brick Oven</h3>
		</div>
		</div>
	<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
		<img src="images/pizzaforone.jpg" alt="" className="h-80  dark:bg-gray-500 aspect-video" />
		<div className="flex flex-col justify-center flex-1 p-6  animate-fade-right animate-once bg-fuchsia-50">
			<h3 className="text-3xl font-bold text-red-500 bg-f">Family recipes, modern touch</h3>
			</div>
		</div>
</div>
 </section>
      
    <div className="w-full relative bg-white shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] overflow-hidden flex flex-col items-start justify-start tracking-[normal]"> 
    </div>
    <section className="py-12 mx-auto ">
    <img src="/images/slices.jpg" className='w-full h-[300px] object-cover' alt="" />
<div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
<div className="flex flex-col space-y-4 text-center lg:text-left">
    
			<h1 className="text-5xl font-bold leading-tight animate-fade-right text-red-500">Stay in the loop</h1>
      
			<p className="text-lg">Monthly Deals, Discounts, Promotions and more don&apos;t miss out on these amazing offers straight to your inbox!</p>
</div>
	<div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
		<div className="flex flex-row">
			<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-red-500 text-white">Subscribe</button>
</div>
</div>
</div>
</section>

</div>

  )
}

export default FeaturedItems;







