import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../../utils/data-attributes';

/**
 *
 * @visibleName MediaImage
 */
const MediaImage = ({
  alt,
  className,
  legend,
  size,
  src,
  ...remainingProps
}) => {
  const _className = classNames(
    'fr-content-media',
    `fr-content-media--${size}`,
    className,
  );

  return (
    <figure
      {...dataAttributes.getAll(remainingProps)}
      className={_className}
    >
      <div className="fr-content-media__img">
        <img src={src} alt={alt} />
      </div>
      <figcaption className="fr-content-media__caption">{legend}</figcaption>
    </figure>
  );
};

MediaImage.defaultProps = {
  alt: '',
  className: '',
  legend: '',
  size: 'md',
};

MediaImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  legend: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  src: PropTypes.string.isRequired,
};

export default MediaImage;
