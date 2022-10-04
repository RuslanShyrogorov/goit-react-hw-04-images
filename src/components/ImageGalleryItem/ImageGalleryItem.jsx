import React from 'react';
import PropTypes from 'prop-types';

import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  largeImageURL,
  onClick,
}) {
  return (
    <GalleryItem key={id}>
      <GalleryImg
        src={webformatURL}
        alt={tags}
        width="350"
        onClick={() => {
          onClick(largeImageURL);
        }}
      />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  id: PropTypes.number,
};
