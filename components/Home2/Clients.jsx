import {logo1, logo2, logo3, logo4, logo5,} from '../../public/links'
import Image from 'next/image'



const images = [
  logo1, logo2, logo3, logo4, logo5,
]

const Clients = () => {
  return (
   <section className='bg-black/5'>
    <div className='mx-12 py-12 relative overflow-hidden'>
      <div className='flex justify-center items-center gap-8 '>
         {images.map((item, index) => (
          <div key={index} className="w-[200px]">
            <Image src={item} alt={index}  
            className='brightness-0'/>
          </div>
         ))}
      </div>
     </div>
    </section>
  );
};
 

export default Clients
