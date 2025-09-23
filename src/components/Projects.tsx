import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Animation variants
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

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

  const projects = [
    // {
    //   id: 1,
    //   title: "Renovation for Kingdom of Believers Christian Centre",
    //   category: "Property Construction",
    //   beforeImage: "https://res.cloudinary.com/dll8awuig/image/upload/v1758590858/portfolio/id_s3huxrpkp/wmm4ouf2v74y44iwc7r6.png",
    //   afterImage: "https://res.cloudinary.com/dll8awuig/image/upload/v1758590859/portfolio/id_s3huxrpkp/fl9hxjvwugasgmwstqqg.png",
    //   description: "Complete transformation of a dated residential building into a modern church premises with premium finishes and smart home integration.",
    //   duration: "6 months",
    //   location: "Apapa, Lagos",
    //   features: ["Smart electical system", "Premium marble finishes", "Premium Ceiling", "Interlocked Compound"]
    // },
    {
      id: 1,
      title: "Oyo State Hospital Management Board. (General Hospital IGBHOHO)",
      category: "Facility Management",
      beforeImage: "https://res.cloudinary.com/dll8awuig/image/upload/v1758590862/portfolio/id_s3huxrpkp/s78qjym8pm3x7dpheyrf.jpg",
      afterImage: "https://res.cloudinary.com/dll8awuig/image/upload/v1758591442/portfolio/id_vmzgk6iiq/gbmjsvctmgbodaii4vgg.png",
      description: "Professional facility management implementation for a Hospital complex in partnership with Clampshell Construction Company, improving efficiency and patient satisfaction.",
      duration: "Ongoing",
      location: "Oyo state, Nigeria",
      features: ["24/7 security", "Automated maintenance", "Energy efficiency", "Roofing"]
    },

  ];

  return (
    <>
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Our Portfolio of Excellence
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Explore our successful projects that showcase our commitment to quality, 
              innovation, and client satisfaction in property development and management.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Before/After Comparison Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative">
                      <img 
                        src={project.beforeImage} 
                        alt={`${project.title} - Before`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-1 px-3 text-sm">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img 
                        src={project.afterImage} 
                        alt={`${project.title} - After`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white py-1 px-3 text-sm">
                        After
                      </div>
                    </div>
                  </div>
                  
                  {/* Comparison Slider Handle */}
                  <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-white/80 cursor-col-resize">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </span>
                    
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
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
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
                    <p className="text-teal-600 font-semibold">{selectedProject.category}</p>
                  </div>
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
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Before</h4>
                      <img 
                        src={selectedProject.beforeImage} 
                        alt={`${selectedProject.title} - Before`}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">After</h4>
                      <img 
                        src={selectedProject.afterImage} 
                        alt={`${selectedProject.title} - After`}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Project Overview</h4>
                      <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-semibold">{selectedProject.duration}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Location:</span>
                          <span className="font-semibold">{selectedProject.location}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Category:</span>
                          <span className="font-semibold text-teal-600">{selectedProject.category}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (index * 0.05) }}
                            className="flex items-start"
                          >
                            <span className="text-teal-600 mr-2">•</span>
                            <span className="text-gray-600">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeModal}
                      className="px-6 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
                    >
                      Close Project
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

export default Projects;