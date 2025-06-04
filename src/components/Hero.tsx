import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/hero-animation.json';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Lottie animationData={animationData} className="w-72 mb-4 animate-bounce"/>
      <h1 ref={titleRef} className="text-5xl font-light text-grey-300 dark:text-white text-center animate-bounce">
        Hi, I’m Soumya — a MERN Stack Developer
      </h1>
       <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
      <p className="text-gray-600 dark:text-gray-400 font-light mt-2 text-center max-w-xl scale-200">
        I build scalable, animated, modern web apps. Let’s make something extraordinary together.
      </p>
    </motion.div>
    </section>
  );
};

export default Hero;
