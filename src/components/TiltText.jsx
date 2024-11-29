import PropTypes from 'prop-types';

const TiltText = ({ titleref }) => {
  return (
    <div ref={titleref} className="mt-28 w-fit">
      <h1 className="text-[6vw] sm:text-[4.3vw] text-white leading-[5vw] sm:leading-[4vw] uppercase font-[anzo4]">
        I am <span className="text-black">DARK MODE <span className="text-white">™</span></span>
      </h1>
      <h1 className="text-[10vw] sm:text-[8.2vw] text-white leading-[8vw] sm:leading-[7vw] uppercase font-[anzo]">
        DESIGNER
      </h1>
      <h1 className="text-[6vw] sm:text-[4.3vw] text-white leading-[5vw] sm:leading-[4vw] uppercase font-[anzo4]">
        TO HIRE
      </h1>
    </div>
  );
};

// Define prop types for validation
TiltText.propTypes = {
  titleref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default TiltText;
