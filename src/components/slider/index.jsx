import PropTypes from "prop-types";
import SlickSlider from "react-slick";

const _settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  loop: true,
  dots: false,
  arrows: false,
  autoplay: true,
};

function Slider({ children, settings = _settings }) {
  return <SlickSlider {...settings}>{children}</SlickSlider>;
}

Slider.propTypes = {
  children: PropTypes.node,
  settings: PropTypes.object,
};

export default Slider;
