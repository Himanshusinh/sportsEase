import React from "react";

const Aboutus = () => {
  const reviews = [
    {
      name: "Jerome Bell",
      daysAgo: "5 Days ago",
      rating: 5,
      review:
        "The academy is amazing! The coaches are very supportive, and the facilities are top-notch.",
      likes: 816,
      comments: 877,
      reports: 185,
      image: "src/assets/aboutus/review1.png",
    },
    {
      name: "Angela Carter",
      daysAgo: "3 Days ago",
      rating: 4,
      review:
        "Great experience overall! I learned a lot and made new friends. Highly recommend it.",
      likes: 612,
      comments: 543,
      reports: 98,
      image: "src/assets/aboutus/avatar.png",
    },
    {
      name: "Michael Brown",
      daysAgo: "1 Day ago",
      rating: 4.5,
      review:
        "Excellent training and friendly staff. The environment is very welcoming.",
      likes: 920,
      comments: 678,
      reports: 54,
      image: "src/assets/aboutus/review3.png",
    },
  ];

  const sports = [
    { name: "Football", image: "src/assets/aboutus/football.svg" },
    { name: "Running", image: "src/assets/aboutus/run.svg" },
    { name: "Hockey", image: "src/assets/aboutus/hockey.jpg" },
    { name: "Baseball", image: "src/assets/aboutus/Baseball.svg.png" },
  ];

  const coaches = [
    { name: "John Will", image: "src/assets/aboutus/person1.png" },
    { name: "Sam Mayorin", image: "src/assets/aboutus/person2.png" },
    { name: "Billy Gatewill", image: "src/assets/aboutus/person3.png" },
    { name: "Manindar Singh", image: "src/assets/aboutus/person4.png" },
    { name: "Kunal Singh", image: "src/assets/aboutus/person5.png" },
    { name: "Alex Willson", image: "src/assets/aboutus/person6.png" },
    { name: "Will Harring", image: "src/assets/aboutus/person7.png" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4 w-screen overflow-x-hidden font-roboto">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="src/assets/aboutus/unsplash__hjsopbklZ0.png"
          alt="A football match in a stadium"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          {/* Details Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <i className="far fa-clock mr-2"></i>
                <span>7:00 AM - 10:00 AM</span>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                <span>4.5 (254 Reviews)</span>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>Gozaria, Mehsana</span>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>Mon - Sat</span>
              </div>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Join the Academy
            </button>
          </div>

          {/* Main Flex Container */}
          <div className="flex flex-wrap gap-6">
            {/* Left Section */}
            <div className="flex-1 space-y-6">
              {/* About Service */}
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-2">About Service</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Cursus senectus
                  pulvinar amet arcu quam non. Ut non magna non quam vitae id
                  blandit egestas varius. Eget nullam auctor elementum cursus
                  neque ornare nisl aenean suspendisse. Eget adipiscing porttitor
                  lacus quam nec turpis.
                </p>
              </div>

              {/* Available Sports */}
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-2">Available Sports</h2>
                <div className="flex space-x-4">
                  {sports.map((sport) => (
                    <div key={sport.name} className="flex flex-col items-center">
                      <img
                        src={sport.image}
                        alt={`${sport.name} icon`}
                        className="w-12 h-12 mb-2"
                      />
                      <span>{sport.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academy Coaches */}
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-2">Academy Coaches</h2>
                <div className="flex space-x-4 flex-wrap">
                  {coaches.map((coach) => (
                    <div key={coach.name} className="flex flex-col items-center">
                      <img
                        src={coach.image}
                        alt={`Coach ${coach.name}`}
                        className="w-24 h-24 rounded-full mb-2 border-4 border-red-500"
                      />
                      <span>{coach.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg shadow"
                  >
                    <div className="flex items-center mb-2">
                      <img
                        src={review.image}
                        alt={`Reviewer ${review.name}`}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-bold">{review.name}</h3>
                        <div className="flex items-center text-gray-600">
                          {Array.from(
                            { length: Math.floor(review.rating) },
                            (_, i) => (
                              <i
                                key={i}
                                className="fas fa-star text-yellow-500 mr-1"
                              ></i>
                            )
                          )}
                          {review.rating % 1 !== 0 && (
                            <i className="fas fa-star-half-alt text-yellow-500 mr-1"></i>
                          )}
                          <span className="ml-2">{review.daysAgo}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.review}</p>
                    <div className="flex items-center mt-2 text-gray-600">
                      <i className="far fa-heart mr-2"></i>
                      <span>{review.likes}</span>
                      <i className="far fa-comment-dots ml-4 mr-2"></i>
                      <span>{review.comments}</span>
                      <i className="far fa-flag ml-4 mr-2"></i>
                      <span>{review.reports}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;