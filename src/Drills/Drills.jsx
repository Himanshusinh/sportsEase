

const sessions = [
  {
    date: "4 Nov",
    title: "Full Body Training",
    time: "7:00 AM - 9:00 AM",
    venue: "Gym",
    image: "src/assets/homepage/Rectangle 145.png",
  },
  {
    date: "5 Nov",
    title: "Football Drill",
    time: "10:00 AM - 11:00 AM",
    venue: "Football Ground",
    image: "src/assets/homepage/Rectangle 154.svg",
  },
  {
    date: "5 Nov",
    title: "Full Body Training",
    time: "6:30 AM - 7:30 AM",
    venue: "Football Ground",
    image: "src/assets/homepage/Rectangle 159.png",
  },
  {
    date: "5 Nov",
    title: "Basketball Drill",
    time: "10:00 AM - 11:00 AM",
    venue: "Basketball Court",
    image: "src/assets/homepage/Rectangle 161.png",
  },
];

const Drills = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-fixed bg-center" 
         style={{ backgroundImage: "url('https://source.unsplash.com/random/tennis')" }}>
      <div className="w-full max-w-6xl p-4">
        <div className="text-center text-black bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8">Drills & Sessions</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="flex items-center p-4 shadow-lg bg-white rounded-lg"
              >
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-24 h-24 rounded-md mr-4"
                />
                <div className="text-left">
                  <h2 className="text-xl font-semibold">{session.title}</h2>
                  <p className="text-gray-600">{session.time}</p>
                  <p className="text-gray-600">Venue: {session.venue}</p>
                </div>
                <div className="ml-auto text-red-500 font-semibold">{session.date}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="flex items-center p-4 shadow-lg bg-white rounded-lg"
              >
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-24 h-24 rounded-md mr-4"
                />
                <div className="text-left">
                  <h2 className="text-xl font-semibold">{session.title}</h2>
                  <p className="text-gray-600">{session.time}</p>
                  <p className="text-gray-600">Venue: {session.venue}</p>
                </div>
                <div className="ml-auto text-red-500 font-semibold">{session.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drills;