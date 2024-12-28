import { REVIEWS } from "../constants"

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="reviews">
        <div className="my-20">
            <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
                Reviews
            </h2>
            <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
                {REVIEWS.text}
            </p>
            <div className="flex flex-wrap justify-center">
                {REVIEWS.reviews.map((reviews, index) => (
                    <div key={index} className="mt-10 flex flex-col items-center justify-center 
                    rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs">
                        <p className="mb-4 ">{reviews.review}</p>
                        <div className="flex items-center mt-4">
                            <img src={reviews.image} alt={reviews.name} className="w-12 h-12 rounded-full mr-4"/>
                            <p className="text-sm font-bold">{reviews.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Reviews