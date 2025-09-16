import React from 'react';

const Artisans = () => {
  const benefits = [
    {
      title: "Steady Work Opportunities",
      description: "Get connected with ongoing construction and maintenance projects across our properties.",
      icon: "👷"
    },
    {
      title: "Professional Development",
      description: "Access training programs to enhance your skills and stay updated with industry standards.",
      icon: "📚"
    },
    {
      title: "Fair Compensation",
      description: "Receive competitive pay and timely payments for all completed work.",
      icon: "💰"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with other professionals in the construction and real estate industry.",
      icon: "🤝"
    },
    {
      title: "Modern Tools & Equipment",
      description: "Gain access to quality tools and equipment needed for various projects.",
      icon: "🛠️"
    },
    {
      title: "Recognition Programs",
      description: "Get recognized for exceptional work through our artisan excellence awards.",
      icon: "🏆"
    }
  ];

  const artisanCategories = [
    {
      title: "Carpenters",
      description: "Skilled woodworkers for furniture, fixtures, and structural elements",
      count: "45+ Registered"
    },
    {
      title: "Electricians",
      description: "Certified professionals for electrical installations and maintenance",
      count: "38+ Registered"
    },
    {
      title: "Plumbers",
      description: "Experts in plumbing systems and waterworks",
      count: "42+ Registered"
    },
    {
      title: "Painters",
      description: "Interior and exterior painting specialists",
      count: "50+ Registered"
    },
    {
      title: "Masons & Bricklayers",
      description: "Skilled in construction and finishing work",
      count: "60+ Registered"
    },
    {
      title: "HVAC Technicians",
      description: "Heating, ventilation, and air conditioning experts",
      count: "25+ Registered"
    }
  ];

  return (
    <section id="artisans" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Artisan Partnership Program</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our network of skilled artisans and grow your business with DCE Properties & Facility Management. 
            We connect talented professionals with quality projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Benefits Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Benefits for Artisans</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-3xl mr-4">{benefit.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Join Our Artisan Network</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Trade Specialty</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option value="">Select your specialty</option>
                  <option value="carpenter">Carpenter</option>
                  <option value="electrician">Electrician</option>
                  <option value="plumber">Plumber</option>
                  <option value="painter">Painter</option>
                  <option value="mason">Mason/Bricklayer</option>
                  <option value="hvac">HVAC Technician</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Years of Experience</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter years of experience"
                  min="0"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors font-semibold"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>

        {/* Artisan Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Artisan Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artisanCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h4>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-teal-700 font-medium">{category.count}</span>
                  <button className="text-teal-700 hover:text-teal-800 font-medium text-sm">
                    View Opportunities →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-teal-50 p-10 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">What Our Artisans Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mr-3">AO</div>
                <div>
                  <h4 className="font-semibold">Andrew Okafor</h4>
                  <p className="text-sm text-gray-500">Carpenter</p>
                </div>
              </div>
              <p className="text-gray-600">"Working with DCE Properties has given my business stability. The regular projects and timely payments have helped me expand my workshop."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mr-3">CJ</div>
                <div>
                  <h4 className="font-semibold">Chioma Johnson</h4>
                  <p className="text-sm text-gray-500">Electrician</p>
                </div>
              </div>
              <p className="text-gray-600">"The training programs have upgraded my skills significantly. I'm now certified for industrial electrical works thanks to DCE's support."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mr-3">IB</div>
                <div>
                  <h4 className="font-semibold">Ibrahim Bello</h4>
                  <p className="text-sm text-gray-500">Plumber</p>
                </div>
              </div>
              <p className="text-gray-600">"The networking events have connected me with other professionals. I've formed partnerships that have doubled my client base."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artisans;