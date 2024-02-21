import PropTypes from "prop-types";
export default function IconLocation({ className, height, width }) {
  return (
    <svg
      fill="currentColor"
      height={height}
      width={width}
      version="1.1"
      id="Filled_Icons"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      className={className}
    >
      <g id="SVGRepo_bgCarrier"></g>
      <g id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Location-Filled">
          {" "}
          <path d="M12,1C7.58,1,4,4.58,4,9c0,7.08,8,14,8,14s8-6.92,8-14C20,4.58,16.42,1,12,1z M12,12c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,12,12,12z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
IconLocation.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
