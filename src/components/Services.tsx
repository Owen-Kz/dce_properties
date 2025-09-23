import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(Array(6).fill(false));

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Animation variants for service items
  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Animation variants for modal
  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  // Animation for backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (!servicesSection) return;
      
      const sectionTop = servicesSection.offsetTop;
      const sectionHeight = servicesSection.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      // Show services when they come into view
      if (scrollPosition > sectionTop + 100) {
        const newVisibility = [...isVisible];
        services.forEach((_, index) => {
          setTimeout(() => {
            newVisibility[index] = true;
            setIsVisible([...newVisibility]);
          }, index * 200); // Stagger the animations
        });
        
        // Remove the event listener after animations are triggered
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger on initial load in case the section is already in view
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const services = [
    {
      title: "Facility Management",
      description: "At DCE Properties & Facility Management Ltd, we understand that properties are more than just buildings — they are assets that must be maintained, protected, and optimized to deliver value over time. Our Facility Management services are designed to keep your property running smoothly, reduce costs, and ensure comfort and safety for tenants, guests, and users.",
      details: [
        "Maintenance & Repairs: Routine checks and prompt fixes for electrical, plumbing, mechanical, and structural issues",
        "Cleaning & Janitorial Services: Daily, weekly, and deep-cleaning solutions that keep your property clean, hygienic, and presentable",
        "Security & Safety Management: Professional security systems, guards, and emergency response protocols",
        "Utilities & Energy Management: Managing water, power, and waste efficiently to save costs and protect the environment",
        "Grounds & Landscaping: Regular care for outdoor spaces, gardens, and lawns to maintain aesthetic appeal",
        "Vendor & Staff Management: Recruiting, training, and supervising cleaners, technicians, and service staff",
        "Health & Safety Compliance: Ensuring your property meets local laws, safety codes, and international best practices"
      ],
      benefits: [
        "Transparent reporting & accountability",
        "Tailored packages for residential, commercial, and hospitality facilities",
        "24/7 support and quick response teams",
        "Cost-effective solutions that protect your investment"
      ],
      images: [
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Property Agency & Marketing",
      description: "At DCE Properties & Facility Management Ltd, we don't just list properties — we connect owners, buyers, tenants, and investors with the right opportunities at the right time. Our Property Agency & Marketing division is built on trust, transparency, and modern marketing tools to ensure faster sales, reliable tenants, and maximum returns for property owners.",
      details: [
        "Property Sales & Purchases: Helping clients buy and sell residential, commercial, and investment properties with ease",
        "Tenant Sourcing & Leasing: Finding credible tenants for landlords and ensuring smooth rental processes",
        "Real Estate Marketing: Using digital campaigns, social media, signage, and targeted advertising to promote properties",
        "Property Valuation & Advisory: Providing accurate market analysis to help owners and buyers make informed decisions",
        "Negotiation & Documentation: Handling agreements, contracts, and legal processes to ensure smooth transactions"
      ],
      benefits: [
        "Wide network of buyers, sellers, and tenants",
        "Professional negotiation to maximize property value",
        "Digital-first marketing approach for faster reach",
        "Transparent processes that eliminate fraud or hidden costs"
      ],
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Construction Support Services",
      description: "DCE Properties provides comprehensive support throughout the construction lifecycle, ensuring your project is completed on time, within budget, and to the highest quality standards.",
      preConstruction: [
        "Project Planning & Design Advisory: Helping owners define goals, budgets, and timelines with expert input",
        "Feasibility & Cost Analysis: Providing accurate cost estimates and project viability checks before breaking ground",
        "Procurement & Vendor Support: Sourcing reliable contractors, suppliers, and service providers",
        "Risk & Compliance Management: Ensuring projects meet legal, safety, and environmental standards"
      ],
      postConstruction: [
        "Handover & Facility Setup: Smooth transition from contractors to management, ensuring all systems are ready",
        "Snagging & Defect Checks: Identifying and correcting construction defects before occupation",
        "Operational Readiness: Setting up utilities, maintenance teams, and operational manuals",
        "Maintenance Planning: Creating sustainable schedules for preventive and corrective maintenance"
      ],
      benefits: [
        "A seamless bridge between construction and facility management",
        "Cost control and transparent reporting from start to finish",
        "Reliable partners and skilled professionals at every stage",
        "Long-term support to keep your property in top shape after completion"
      ],
      images: [
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Property Management",
      description: "At DCE Properties & Facility Management Ltd, we take the stress out of owning property. Whether you live nearby or abroad, our Property Management services ensure your real estate stays profitable, well-maintained, and hassle-free. We help landlords, estate developers, and investors manage their properties with transparency, professionalism, and consistent care.",
      details: [
        "Tenant Management: Screening tenants, handling rent collection, renewals, and lease agreements",
        "Maintenance & Repairs: Regular inspections and quick response to plumbing, electrical, and structural issues",
        "Financial Management: Clear income and expense reporting, ensuring owners know exactly what their property earns and costs",
        "Vacancy Reduction: Marketing vacant properties to minimize downtime and maximize rental income",
        "Legal & Compliance Support: Ensuring rental agreements, permits, and operations comply with Nigerian laws and local standards",
        "Diaspora Property Care: Helping Nigerians abroad protect and grow their investments back home with peace of mind"
      ],
      benefits: [
        "Transparent systems and regular reporting",
        "Experienced team to handle tenants and property issues",
        "Focus on profitability, not just maintenance",
        "Tailored solutions for residential, commercial, and mixed-use properties"
      ],
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Hotel & Hospitality Partnership Management",
      description: "Running a hotel is more than opening doors — it's about creating an experience that keeps guests coming back and ensures the property remains profitable. At DCE Properties & Facility Management Ltd, we partner with hotel owners, operators, and investors to turn hospitality businesses into well-structured, revenue-generating assets.",
      details: [
        "Hotel Operations Oversight: Daily supervision of front desk, housekeeping, bar/restaurant, and back-office functions",
        "Staff Recruitment & Training: Hiring and mentoring staff to deliver world-class hospitality and customer service",
        "Revenue & Occupancy Growth: Marketing strategies, pricing models, and booking systems that increase occupancy rates",
        "Maintenance & Facility Care: Ensuring the hotel's infrastructure, utilities, and amenities remain in excellent condition",
        "Financial & Reporting Systems: Transparent income and expense tracking so owners can see performance in real time",
        "Owner/Investor Partnership Models: Flexible agreements such as lease-to-own, profit-sharing, or full management contracts"
      ],
      benefits: [
        "Proven strategies to boost guest satisfaction & retention",
        "Clear financial systems that protect owners and maximize profits",
        "Options for absentee owners — we manage while you earn",
        "Tailored partnership models to fit your hotel's size and goals"
      ],
      images: [
        "https://res.cloudinary.com/dll8awuig/image/upload/v1758625349/portfolio/id_0nsxf7uce/qhy1c88x7mayxtqhaegf.jpg",
        "https://res.cloudinary.com/dll8awuig/image/upload/v1758625348/portfolio/id_0nsxf7uce/jkzpnhgmbkp73efsefgd.jpg"
      ]
    },
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
      benefits: [
        "Competitive pricing through bulk purchases with suppliers",
        "Excellent customer relations",
        "High-level product integrity",
        "Timely project completion"
      ],
      images: [
        "https://res.cloudinary.com/dll8awuig/image/upload/v1758041712/portfolio/id_jy9p8lynw/ikqbueofjojdf4tuqr19.png",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    }
  ];

  return (
    <>
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              We Provide a Wide Range of Services to our Clients
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              We are focused on Property Construction, Facility Management, Property Management, 
              Real Estate Marketing, Hospitality Management, and Construction Support Services.
            </motion.p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={serviceVariants}
                initial="hidden"
                animate={isVisible[index] ? "visible" : "hidden"}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}
              >
                <div className="md:w-1/2">
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Services</span>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(service)}
                    className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
                
                <div className="md:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    {service.images.map((img, imgIndex) => (
                      <motion.div 
                        key={imgIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible[index] ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + (imgIndex * 0.1) }}
                        className={`rounded-lg overflow-hidden shadow-lg ${imgIndex === 0 ? 'mt-8' : ''}`}
                      >
                        <img 
                          src={img} 
                          alt={service.title} 
                          className="w-full h-64 object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div 
            className="fixed inset-0 z-50 overflow-y-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              variants={backdropVariants}
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
            ></motion.div>
            
            <div className="flex items-center justify-center min-h-full p-4">
              <motion.div 
                variants={modalVariants}
                className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b">
                  <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                
                <div className="p-6">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 mb-6"
                  >
                    {selectedService.description}
                  </motion.p>
                  
                  {selectedService.details && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-6"
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Core Services:</h4>
                      <ul className="space-y-2">
                        {selectedService.details.map((detail, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (i * 0.05) }}
                            className="flex items-start"
                          >
                            <span className="text-teal-600 mr-2">•</span>
                            <span className="text-gray-600">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  {selectedService.preConstruction && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-6"
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Pre-Construction Services:</h4>
                      <ul className="space-y-2">
                        {selectedService.preConstruction.map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (i * 0.05) }}
                            className="flex items-start"
                          >
                            <span className="text-teal-600 mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  {selectedService.postConstruction && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mb-6"
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Post-Construction Services:</h4>
                      <ul className="space-y-2">
                        {selectedService.postConstruction.map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + (i * 0.05) }}
                            className="flex items-start"
                          >
                            <span className="text-teal-600 mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  {selectedService.benefits && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="mb-6"
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Why Choose Us:</h4>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 + (i * 0.05) }}
                            className="flex items-start"
                          >
                            <span className="text-teal-600 mr-2">•</span>
                            <span className="text-gray-600">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="grid grid-cols-2 gap-4 mt-8"
                  >
                    {selectedService.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={img} 
                          alt={selectedService.title} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                  </motion.div>
                  
                  <div className="mt-8 flex justify-end">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeModal}
                      className="px-6 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;