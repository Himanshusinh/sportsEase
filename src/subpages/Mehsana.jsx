// Mehsana.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Mehsana = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "src/assets/homepage/peter-robbins-n6jr1PxRsRc-unsplash.jpg",
    "src/assets/homepage/sports-center.jpg",
    "src/assets/homepage/igor-batista-HQ6iybaKvF4-unsplash.jpg",
    "src/assets/homepage/pexels-unknown6user-1646735.jpg",
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleAcademy = () => {
    navigate('/aboutus');
  };

  const handleSeeAll = () => {
    navigate('/drill');
  };

  return (
    <main className="p-8 mt-20">
      <h1 className="text-4xl font-bold mb-6">Guni Sports Academy</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Academy Announcement</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Cursus senectus pulvinar <br />
          amet arcu quam non. Ut non magna non quam vitae id blandit egestas <br />
          varius.
        </p>
      </section>

      <section className="flex">
        <div className="w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Drills & Sessions</h2>
            <button onClick={handleSeeAll} className="text-blue-600">
              See All
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="src/assets/homepage/Rectangle 154.svg"
                alt="Full Body Training"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold">Full Body Training</h3>
                <p className="text-gray-600">
                  7:00 AM - 9:00 AM
                  <br />
                  Venue: Gym
                </p>
              </div>
              <span className="ml-auto text-gray-400">4 Nov</span>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="src/assets/homepage/Rectangle 159.png"
                alt="Football Drill"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold">Football Drill</h3>
                <p className="text-gray-600">
                  10:00 AM - 11:00 AM
                  <br />
                  Venue: Football Ground
                </p>
              </div>
              <span className="ml-auto text-gray-400">5 Nov</span>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="src/assets/homepage/Rectangle 161.png"
                alt="Full Body Training"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold">Full Body Training</h3>
                <p className="text-gray-600">
                  6:30 AM - 7:30 AM
                  <br />
                  Venue: Football Ground
                </p>
              </div>
              <span className="ml-auto text-gray-400">5 Nov</span>
            </div>
          </div>
        </div>

        <section className="w-86 h-96 ml-24 flex justify-center items-center -mt-44">
          <div className="relative w-full h-full">
            {/* Current Image */}
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="rounded-lg w-[800px] h-[400px] object-cover"
            />

            {/* Left Arrow */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={goToPrevious}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                ◀
              </button>
            </div>

            {/* Right Arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={goToNext}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                ▶
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    currentIndex === index ? "bg-white" : "bg-gray-400 opacity-50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>

            <button
              className="font-bold text-2xl ml-64 mt-5 bg-black text-white p-3 rounded-2xl"
              onClick={handleAcademy}
            >
              GUNI Academy
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Mehsana;