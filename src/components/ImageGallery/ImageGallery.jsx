import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/constans/Box';
import { pixabayApi } from 'components/servises/searchApi';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { GalleryList } from './ImageGallery.styled';
import Loader from 'components/Loader/Loader';

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    modalOpen: false,
    modalImg: '',
  };

  componentDidUpdate(prevProps, _) {
    const { search, page } = this.props;

    if (prevProps.search !== search) {
      this.setState({ images: [] });
    }

    if (prevProps.search !== search || prevProps.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { search, page } = this.props;

    this.setState({ loading: true });

    try {
      const data = await pixabayApi(search, page);

      this.setState(({ images }) => {
        return {
          images: [...images, ...data.hits],
        };
      });
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.props.onLoadMore();
  };

  openModal = modalImg => {
    this.setState({
      modalOpen: true,
      modalImg,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalImg: '',
    });
  };

  render() {
    // const { items, ,  } = this.state;
    const { loadMore, closeModal, openModal } = this;
    const { images, modalImg, modalOpen, error, loading } = this.state;
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
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
