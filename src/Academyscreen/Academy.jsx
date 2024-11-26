import "@fortawesome/fontawesome-free/css/all.min.css";

const Academy = () => {
  const academies = [
    {
      name: "Athena Academy",
      time: "7:00 AM - 9:00 PM",
      address: "Near amul dairy, cross road",
      distance: "700m",
      image: "src/assets/academy/Rectangle 154.svg",
    },
    {
      name: "Guni Academy",
      time: "7:00 AM - 10:00 AM",
      address: "Near amul dairy, cross road",
      distance: "2km",
      image: "src/assets/academy/Rectangle 154 (3).svg",
    },
    {
      name: "GMERS Academy",
      time: "8:00 AM - 9:00 PM",
      address: "Near amul dairy, cross road",
      distance: "5.5 km",
      image: "src/assets/academy/Rectangle 154.png",
    },
    {
      name: "Evolve Academy",
      time: "7:00 AM - 9:00 AM",
      address: "Near amul dairy, cross road",
      distance: "7.8 km",
      image: "src/assets/academy/Rectangle 154 (2).svg",
    },
  ];

  const suitableAcademies = [academies[1], academies[0]];

  return (
    <div className="p-8 bg-gray-100 w-[100vw] h-[100vh]">
      <h1 className="text-3xl font-bold mb-6 mt-20">Nearby Academy</h1>
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            {academies.map((academy, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={academy.image}
                  alt={academy.name}
                  className="w-16 h-16 rounded-md mr-4"
                />
                <div>
                  <h2 className="font-bold">{academy.name}</h2>
                  <p>{academy.time}</p>
                  <p>{academy.address}</p>
                </div>
                <div className="ml-auto">{academy.distance}</div>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-4">Suitable Academy</h2>
          {suitableAcademies.map((academy, index) => (
            <div key={index} className="flex items-center mb-4">
              <img
                src={academy.image}
                alt={academy.name}
                className="w-16 h-16 rounded-md mr-4"
              />
              <div>
                <h2 className="font-bold">{academy.name}</h2>
                <p>{academy.time}</p>
                <p>{academy.address}</p>
              </div>
              <div className="ml-auto">{academy.distance}</div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 pl-0 md:pl-8">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 rounded-md border border-gray-300"
            />
            <button className="absolute right-3 -mr-[10px] h-[48px] text-white bg-red-500 p-2 rounded-md">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.839961115133!2d144.9574428153152!3d-37.81362797975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d472f4058a7%3A0x5045675218ce720!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1694183594021!5m2!1sen!2sin"
    className="w-full h-96 rounded-md border border-gray-300"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
        </div>
      </div>
    </div>
  );
};

export default Academy;