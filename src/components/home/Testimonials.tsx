
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Disamina offers robust candidate validation through timed photo/video capture, reducing impersonation risks. Its high customization and quick enhancement turnaround stand out. The software is user-friendly, minimizing training time. However, base reporting lacks detail, and some list management still requires developer support, limiting full administrative control.",
    author: "Darwin C.",
    title: "Engineering - IT & Smart Systems (R&D)",
    company: "Information Technology and Services",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover how companies are transforming their hiring process with Disamina AI.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div
              className={`transition-transform duration-500 ease-in-out flex`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-xl p-6 md:p-8 text-gray-800 shadow-lg">
                    <div className="mb-6">
                      {Array(5).fill(0).map((_, i) => (
                        <Star
                          key={i}
                          className={`inline-block w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl mb-8 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-600 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                        <p>{testimonial.author.split(" ")[0][0] + testimonial.author.split(" ")[1][0]}</p>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
