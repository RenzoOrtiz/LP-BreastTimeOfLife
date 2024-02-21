import PropTypes from "prop-types";

export default function ImgFormatR40({ alt, src, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-[40px] w-full md:w-1/2 p-4 ${className}`}
    />
  );
}

ImgFormatR40.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
};
