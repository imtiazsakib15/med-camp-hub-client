import PropTypes from "prop-types";

const SectionContainer = ({ children }) => {
  return (
    <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
      {children}
    </div>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node,
};

export default SectionContainer;
