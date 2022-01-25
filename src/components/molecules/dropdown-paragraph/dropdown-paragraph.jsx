import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './dropdown-paragraph.module.scss';
import ButtonReadMore from '../../atoms/button-read-more/button-read-more';
import Paragraph from '../../atoms/typography/paragraph/paragraph';

const DropdownParagraph = ({ className, children }) => {
  const [showAllContent, setShowAllContent] = useState(false);

  const firstTenWords = `${children.split(/\s+/).slice(0, 15).join(' ')}...`;

  const handleClick = () => setShowAllContent(!showAllContent);
  return (
    <div className={`${className} ${styles['dropdown-paragraph']}`}>
      <Paragraph>
        {showAllContent
          ? children
          : firstTenWords}
      </Paragraph>
      <div className={styles['dropdown-paragraph__button-container']}>
        <ButtonReadMore
          onClick={handleClick}
          showLess={showAllContent}
        />
      </div>
    </div>
  );
};

DropdownParagraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

DropdownParagraph.defaultProps = {
  className: '',
};

export default DropdownParagraph;
