import Page1Bottom from "./components/Page1Bottom";
import TiltText from "./components/TiltText";

const Page1 = () => {
  return (
    <div className="h-screen p-5 bg-white">
      <div className="p-[60px] shadow-xl shadow-gray-700 h-full bg-cover w-full rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1861,h_831,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] 
        sm:p-[40px] md:p-[50px] lg:p-[60px] xl:p-[70px] 
        sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px] 
        bg-center bg-no-repeat">

        <img 
          className="h-20 ml-4 sm:h-16 md:h-18 lg:h-20" 
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" 
          alt="logo" 
        />
        
        <TiltText />
        
        <Page1Bottom />
      </div>
    </div>
  );
}

export default Page1;
