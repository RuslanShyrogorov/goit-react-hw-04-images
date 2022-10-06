import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/constans/Box';
import { pixabayApi } from 'components/servises/searchApi';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { GalleryList } from './ImageGallery.styled';
import Loader from 'components/Loader/Loader';

export default function ImageGallery({ search, page, onLoadMore }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  useEffect(() => {
    setImages([]);
  }, [search]);

  useEffect(() => {
    if (!search) return;

    const fetchImages = async () => {
      setLoading(true);

      try {
        const data = await pixabayApi(search, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [search, page]);

  const loadMore = () => {
    onLoadMore();
  };

  const openModal = modalImg => {
    setModalOpen(true);
    setModalImg(modalImg);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg('');
  };

  const isImages = Boolean(images.length);

  return (
    <Box as="section">
      {error && <p>Try later...</p>}
      {loading && <Loader />}
      {isImages && (
        <GalleryList>
          {images.map(({ id, tags, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                alt={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClick={openModal}
              />
            );
          })}
        </GalleryList>
      )}

      {isImages && (
        <Button text="Loade more" type="button" onClick={loadMore}></Button>
      )}

      {modalOpen && (
        <Modal onClose={closeModal}>
          <img src={modalImg} alt="" />
        </Modal>
      )}
    </Box>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
