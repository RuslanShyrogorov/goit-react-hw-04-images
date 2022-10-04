import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from './constans/Box';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    newSearchText: '',
    page: 1,
  };

  handleNewSearch = ({ searchText }) => {
    this.setState({ newSearchText: searchText });
  };

  incrementPage = () => {
    // this.setState(prevState => ({
    //   page: prevState.page + 1,
    // }));

    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { handleNewSearch, incrementPage } = this;
    const { newSearchText, page } = this.state;
    return (
      <Box width="100vw" mt={3} mb={3} p={4} bg="white">
        <Searchbar onSubmit={handleNewSearch} />
        <ImageGallery
          search={newSearchText}
          page={page}
          onLoadMore={incrementPage}
        ></ImageGallery>
        <ToastContainer autoClose={3000} position="top-right" />
      </Box>
    );
  }
}
