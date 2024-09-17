import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
// import { repeat } from 'maath/dist/declarations/src/misc';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[20px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-purple-400'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-400 to-transparent'/>
        </div>
        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"> Hi, I am <span className='text-purple-400'>Progya</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>Developer of 3D websites,<br className='sm:block hidden'/> & content for immersive experience</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center mt-[-30px]'>
        <a href='#about'>
          <div className='w-[34px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }} className="w-2.5 h-2.5 rounded-full bg-secondary mb-1"/>
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero;