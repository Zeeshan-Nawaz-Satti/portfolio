import BrandLogos from '../assets/logo.svg'; // Importing SVG as a regular module

const Logo = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full"> {/* Flexbox for centering */}
      <img 
        src={BrandLogos} 
        alt="Brand Logo" 
        className="h-[120px] w-full p-10 mt-[-70px]" 
      />
      <div className="border-t border-gray-700 w-1/4 my-4 border-b mt-10" /> {/* Divider */}
    </div>
  )
}

export default Logo;
