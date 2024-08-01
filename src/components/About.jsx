import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * 
        index, 0.75)}
        className='w-full green-pink-gradient p-
        [1px] rounded-[20px] shadow-card'
      >
      <div
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-tertiary rounded-[20px] 
      py-5 px-12 min-h-[280px] flex
      justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} 
        className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] 
        font-bold text-center'>{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] 
        max-w-3xl leading-[30px]'
        >
        I began my journey into programming while pursuing my MIS degree. 
        Through self-study and bootcamp course, I grew a passion for creating 
        applications in different technologies. I have contributed to 
        open source on TampaDevs github which is was my local meetup. 
        I have real world work experience as a Full stack developer at Getuwired. 
        I am always looking to improve my skills and learn new technologies.
        </motion.p>
       
       <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
       </div>
    </>
  );
};

export default SectionWrapper(About, 'about')