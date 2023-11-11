import Image from 'next/image'
import {pricing2} from '../../public/links'
import { ButtonLink } from '../links'


const About = () => {
  return (
    <section className='mx-[5%] w-[90%] lg:w-[80%] lg:mx-[10%] mt-[150px] mb-[100px] md:flex'>
        <div className="w-1/2" >

     <h3 className='bg-black/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900' data-aos="fade-up">
       Who we are
     </h3>
     <h1 className='text-4xl sm:text-5xl font-bold my-6' data-aos="fade-up">
       We are more than just a company
      </h1>
     <div className=' text-lg font-semibold '>
       <p className=' text-gray-500 text-lg font-semibold' data-aos="fade-up">
         We are architects of innovation, trailblazers of technological advancement, and 
        partners in your success. As a dynamic and forward-thinking organization, we are 
        dedicated to reshaping industries and empowering businesses to navigate 
        the digital age with confidence.
       </p>
     </div>
        </div>

     <div className='md:w-1/2'>
      <div className='' data-aos="fade-left">          
        <ButtonLink URLLink='about-us' />
      </div>
      <Image 
       src={pricing2} 
       alt="about image" 
       className=' w-full h-[24rem] rounded-md' 
       data-aos="fade-up"
       />
      <div className=' flex '>
        <div 
          className='md:border-b md:border-gray-400 text-center md:text-left' 
          data-aos="fade-left"
          aos-duration="2000"
          >
         <h1 className='text-violet-800 text-5xl sm:text-6xl font-bold'>12+</h1>
         <p className='text-lg font-semibold text-gray-500 mb-6'>
          Years of experience in software development
         </p>
        </div>
        <div className='text-center md:text-left' data-aos="fade-left" aos-duration="2500">
          <h1 className='text-violet-800 text-5xl sm:text-6xl font-bold'>50</h1>
          <p className='text-lg font-semibold text-gray-500 mb-6'>
            Winning awards as one of the top world company
          </p>
        </div>
      </div>
     </div>
    </section>
  )
}

export default About