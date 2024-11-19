import video from './assets/videos/file_3.mp4';

const Page4 = () => {
  return (
    <div className="relative h-screen p-4 mt-28">
        <video loop muted autoPlay className="h-full w-full object-cover rounded-[50px]" src={video}></video>
        <h1 className="absolute top-0 bottom-1 left-20 text-[40vw] font-[anzo3] text-white flex items-center justify-center">
          ABOUT
        </h1>
      </div>
  );
};

export default Page4;
