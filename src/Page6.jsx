import Space from './assets/space.jpeg'; 
import Astro from './assets/Astro.png'; 

const Page6 = () => {
  return (
    <>
    <div 
      className=" bg-no-repeat bg-center h-[170vh]" 
      style={{ backgroundImage: `url(${Space})`, backgroundSize: 'cover' }}
    >
      <img 
        className="relative h-full object-cover" 
        src="https://static.wixstatic.com/media/f1c650_360814da288f418991547fa9d5e08904~mv2.png/v1/fill/w_1899,h_1461,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/Subtract.png" 
        alt="" 
      />
    </div>
    <div className='flex justify-center'>
        <img 
        className="h-full" 
        src={Astro} 
        alt="" 
      />
    </div>
    </>
  )
}

export default Page6;
