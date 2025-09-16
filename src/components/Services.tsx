import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Property Construction",
      description: "Our team of contractors have ensured that DCE Properties is top of mind when it comes to construction. We handle all details from building plans to completion, considering client safety, timeliness and the agreed upon budget. Our professional service includes the drawing up of plans by our architects up until the project completion, we pride in our competitive prices, excellent customer relations and high-level product integrity.",
      details: [
        "General builders and laborers",
        "Bricklayers",
        "Plasterers",
        "Carpenters",
        "Tilers and painters",
        "Plumbers",
        "Electricians"
      ],
      images: [
        "https://res.cloudinary.com/dll8awuig/image/upload/v1758041712/portfolio/id_jy9p8lynw/ikqbueofjojdf4tuqr19.png",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Facility Management",
      description: "With our exceptional strengths as a leading real estate firm, we also offer active, professional facility management of commercial and residential apartments. We've worked with several reputable corporate and individual owners who entrust their diverse real estate investments to us: large and small assets and portfolios, new development and renovation, and urban and suburban properties. We have the broad base of experience and knowledge to provide the technical, operational and construction services necessary to achieve your properties objectives.",
      images: [
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Housing Estate Management",
      description: "At DCE Properties creating affordable housing is at the heart of our mission. We are focused on developing quality designs that add value to the communities where they are situated. DCE Properties is also highly selective of the architects and designers we work with to meet the needs of our clients, our broad base of experience and knowledge provides the technical, operational and construction services necessary to achieve our clients' property's objectives.",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Real Estate Consultancy",
      description: "We provide Real Estate consulting services for individuals and small syndicates. Through individual counsel or group seminars, you will learn the step-by-step procedures and safeguards that lead to a high cash flow investment. We facilitate these sessions as well as the management of your investment, with a team of professionals.",
      details: [
        "Basic Consultancy Service",
        "Standard Consultancy Service",
        "Absolute Consultancy Service"
      ],
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Investment Consultancy",
      description: "At DCE Properties creating affordable housing is at the heart of our mission. We are focused on developing quality designs that add value to the communities where they are situated. DCE Properties is also highly selective of the architects and designers we work with to meet the needs of our clients, our broad base of experience and knowledge provides the technical, operational and construction services necessary to achieve our clients' property's objectives.",
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Home Ownership Initiative",
      description: "The Home ownership initiative design by DCE Properties Ltd in conjunction with our construction partners empowers people with the opportunity to realize their dream of home ownership within a short time span, a flexible payment option and ease. Our designs include Bungalows, semi-detached (Terrace) & Detached building of exquisite finishing are available for choice.",
      images: [
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1721523237766-7e1b014256a8?w=500&auto=format&fit=crop&q=60"
      ]
    },
    {
      title: "Instant Allocation",
      description: "Our instant allocation service is provided for clients that have made 75% of the total fee (which includes survey and legal documentation), they will be given an instant physical allocation and right to choose plot(s); on the condition that the client must complete the remaining 25% of the cost of land within three (3) months. In the case of a default, the client loses the plot while the company uses its discretion to re-allocate the client.",
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">We Provide a Wide Range of Services to our Clients</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are focused on Property Construction, Facility Management, Housing Estate Management, 
            Real Estate Consultancy, Investment Consultancy, among others.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}
            >
              <div className="md:w-1/2">
                <div className="mb-6">
                  <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Services</span>
                  <h3 className="text-3xl font-bold text-gray-800 mt-2">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                {service.details && (
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <button className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {service.images.map((img, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className={`rounded-lg overflow-hidden shadow-lg ${imgIndex === 0 ? 'mt-8' : ''}`}
                    >
                      <img 
                        src={img} 
                        alt={service.title} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;