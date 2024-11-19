import 'remixicon/fonts/remixicon.css';
import Menu from '../assets/menu.svg'; // Importing SVG as a regular module

const Header = () => {
  return (
    <>
      <div className="fixed w-full flex items-center justify-end z-10 py-28 px-20">
        <button
          className="group/button relative z-50 inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-6 py-2 text-base font-semibold text-white border-4 border-white
          animate-pulse-button transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50"
        >
          <span className="px-2 py-1 text-lg">Hire Me</span>
          <div
            className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
          >
            <div className="relative h-full w-10 bg-white/20"></div>
          </div>
        </button>
        <img 
          src={Menu} 
          alt="Menu" 
          className="ml-3" 
          style={{ width: '45px', height: '45px' }} // Adjust size here
        />
      </div>
      <style>{`
        @keyframes pulse-button {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-pulse-button {
          animation: pulse-button 2s infinite;
        }
      `}</style>
    </>
  );
};

export default Header;
