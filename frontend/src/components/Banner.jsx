import { IoPizzaOutline } from "react-icons/io5"

function Banner() {
    return (
        <div className='h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer'>For a limited time free delivery <span> <IoPizzaOutline /> </span> on any order!
        </div>
      )
}

export default Banner