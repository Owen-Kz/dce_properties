import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MeetTheTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const teamMembers = [
    {
      name: "Jones Ayeni",
      role: "Founder & CEO",
      image: "https://res.cloudinary.com/dll8awuig/image/upload/v1758061890/portfolio/id_5sxs3cg3o/shsefsjjft6xpljzuso3.jpg",
      description: "With over 15 years in real estate development, David leads DCE Properties with a vision for sustainable and affordable housing solutions.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    // {
    //   name: "Chioma Eze",
    //   role: "Chief Operations Officer",
    //   image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    //   description: "Chioma oversees all operational aspects of DCE Properties, ensuring projects are delivered on time and within budget.",
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // },
    // {
    //   name: "Emmanuel Okafor",
    //   role: "Head of Construction",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    //   description: "A certified engineer with 12 years experience, Emmanuel ensures all construction projects meet the highest quality standards.",
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // },
    // {
    //   name: "Amina Suleiman",
    //   role: "Finance Director",
    //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    //   description: "Amina manages the company's financial strategy and investment portfolios, ensuring sustainable growth and profitability.",
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // },
    // {
    //   name: "Tunde Williams",
    //   role: "Head of Facility Management",
    //   image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    //   description: "Tunde brings 10 years of expertise in maintaining and enhancing property values through effective facility management.",
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // },
    // {
    //   name: "Ngozi Adeyemi",
    //   role: "Customer Relations Manager",
    //   image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    //   description: "Ngozi ensures client satisfaction through transparent communication and personalized service throughout their property journey.",
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // }
  ];

  const stats = [
    // { value: "12+", label: "Years Experience" },
    // { value: "500+", label: "Properties Developed" },
    // { value: "2,000+", label: "Happy Clients" },
    // { value: "15+", label: "Awards & Recognition" }
  ];

  // Company vision, mission and values
  const companyValues = {
    vision: "To become a trusted leader in real estate, hospitality, and facility management, creating affordable ownership and world-class property solutions for Nigerians at home and abroad.",
    mission: "To simplify property ownership with innovative subscription models, deliver transparent facility management, and build strong partnerships that drive growth.",
    values: [
      { name: "Integrity", description: "We maintain transparency in all our dealings and uphold the highest ethical standards." },
      { name: "Excellence", description: "We strive for the highest quality in everything we do, delivering superior results." },
      { name: "Accountability", description: "We take responsibility for our actions and commitments to our clients and stakeholders." },
      { name: "Customer Focus", description: "We prioritize our clients' needs and work to exceed their expectations." },
      { name: "Innovation", description: "We continuously seek better ways to serve our clients and improve our processes." }
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const valueCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      At DCE Properties & Facility Management Ltd, we are a fast-growing real estate company in Lagos committed to property sales & marketing, property and facility management, hotel & hospitality partnerships, real estate investment opportunities, and sustainable real estate development
          </p>
        </motion.div>

        {/* Vision and Mission Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-teal-50 p-8 rounded-2xl"
            variants={cardVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-teal-800">VISION</h3>
            </div>
            <p className="text-gray-700 text-lg">{companyValues.vision}</p>
          </motion.div>

          <motion.div 
            className="bg-teal-50 p-8 rounded-2xl"
            variants={cardVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-teal-800">MISSION</h3>
            </div>
            <p className="text-gray-700 text-lg">{companyValues.mission}</p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-4"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 bg-teal-50 rounded-lg"
              variants={statVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-teal-700 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="bg-teal-50 rounded-2xl px-10 py-4 mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our Core Values
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {companyValues.values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg text-center"
                variants={valueCardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{value.name}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Header */}
        {/* <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated professionals bring expertise and passion to every project, 
            ensuring exceptional service and results for our clients.
          </p>
        </motion.div> */}

        {/* Team Grid */}
        {/* <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-1"
                  variants={itemVariants}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-teal-600 font-medium mb-4"
                  variants={itemVariants}
                >
                  {member.role}
                </motion.p>
                <motion.p 
                  className="text-gray-600 mb-6"
                  variants={itemVariants}
                >
                  {member.description}
                </motion.p>
                <motion.div 
                  className="flex space-x-4"
                  variants={itemVariants}
                >
                  <motion.a 
                    href={member.social.linkedin} 
                    className="text-gray-500 hover:text-teal-700 transition-colors"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href={member.social.twitter} 
                    className="text-gray-500 hover:text-teal-700 transition-colors"
                    aria-label={`Follow ${member.name} on Twitter`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default MeetTheTeam;