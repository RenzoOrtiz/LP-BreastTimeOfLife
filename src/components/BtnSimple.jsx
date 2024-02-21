import PropTypes from "prop-types"; //para despues definir las props esperadas y su tipo
import { Link } from "react-router-dom";
export default function BtnSimple({ text, url }) {
  return (
    <>
      <Link to={url}>
        <button
          type="button"
          className="rounded-[20px] bg-[--primary-color] text-white p-3 px-6 hover:scale-105 duration-500"
        >
          {text}
        </button>
      </Link>
    </>
  );
}
BtnSimple.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
