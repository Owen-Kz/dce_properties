import { useState, useEffect } from "react";

const Partners = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Partner data with logos (using placeholder logos from logos-world.net)
  const partners = [
    {
      id: 1,
      name: "PWAN",
      logo: "https://res.cloudinary.com/dll8awuig/image/upload/v1758063985/portfolio/id_y53rjqtos/jtrcmrfcyyl3giwbmzro.png",
      url: "#"
    },
    {
      id: 2,
      name: "Clampsbell Construction Company Limited",
      logo: "https://res.cloudinary.com/dll8awuig/image/upload/v1758063986/portfolio/id_y53rjqtos/ecbaaqa6oqotmper9rz3.png",
      url: "#"
    },

    {
      id: 3,
      name: "Greenish Pathway Services",
      logo: "https://res.cloudinary.com/dll8awuig/image/upload/v1758063987/portfolio/id_y53rjqtos/ba755wnihyxfnccbfgr7.png",
      url: "#"
    },

        {
      id: 4,
      name: "PWAN",
      logo: "https://res.cloudinary.com/dll8awuig/image/upload/v1758063985/portfolio/id_y53rjqtos/jtrcmrfcyyl3giwbmzro.png",
      url: "#"
    },
    {
      id: 5,
      name: "Clampsbell Construction Company Limited",
      logo: "https://res.cloudinary.com/dll8awuig/image/upload/v1758063986/portfolio/id_y53rjqtos/ecbaaqa6oqotmper9rz3.png",
      url: "#"
    },

    {
      id: 6,
      name: "Greenish Pathway Services",
      logo: "https://res.cloudinary.com/dll8awuig/image/upload/v1758063987/portfolio/id_y53rjqtos/ba755wnihyxfnccbfgr7.png",
      url: "#"
    },

    {
      id: 7,
      name: "PWAN",
      logo: "https://res.cloudinary.com/dll8awuig/image/upload/v1758063985/portfolio/id_y53rjqtos/jtrcmrfcyyl3giwbmzro.png",
      url: "#"
    },
    {
      id: 8,
      name: "Clampsbell Construction Company Limited",
      logo: "https://res.cloudinary.com/dll8awuig/image/upload/v1758063986/portfolio/id_y53rjqtos/ecbaaqa6oqotmper9rz3.png",
      url: "#"
    },

  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-gray-50" id="partners">
      <div className="container mx-auto px-4">
        <div className="text-center mb-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional property management 
            and investment solutions to our clients.
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex space-x-12 py-4 ${isPaused ? 'animate-pause' : 'animate-scroll'}`}>
            {duplicatedPartners.map((partner) => (
              <div 
                key={partner.id} 
                className="flex-shrink-0 w-40 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-12 max-w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for a smoother look */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors">
            Become a Partner
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-40rem * 4));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;