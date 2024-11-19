import video from './assets/videos/file_10.mp4'
const Page3 = () => {
  return (
    <>
    <div className="h-screen relative flex items-center justify-center mt-10">
        <img className='absolute z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1253,h_721,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="image" />
        <video loop muted autoPlay='true' className=' relative z-10 h-[80vh] w-[54vw] object-cover' src={video}></video>
        <div className="h-0.5 w-2/3 absolute z-0 top-[30%] border-black border-b-2"/>
        <div className="h-0.5 w-4/5 absolute z-0 top-[50%] border-black border-b-2"/>
        <div className="h-0.5 w-full absolute z-0 top-[75%] border-black border-b-2"/>
    </div>
    </>
  )
}

export default Page3