import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DropdownParagraph = ({className, children}) => {
  const [showAllContent, setShowAllContent] = useState(false);

  return (
    <div>
      <p></p>
    </div>
  )
};

DropdownParagraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

DropdownParagraph.defaultProps = {
  className: '',
};

export default DropdownParagraph;
