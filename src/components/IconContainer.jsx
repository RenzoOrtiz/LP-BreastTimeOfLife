import PropTypes from "prop-types";
export default function IconContainer({ borderColor, children, className }) {
  return (
    <div
      className={`relative flex items-center justify-center  rounded-full border-4 border-[${borderColor}] ${className}`}
    >
      {children}
    </div>
  );
}
IconContainer.propTypes = {
  borderColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
