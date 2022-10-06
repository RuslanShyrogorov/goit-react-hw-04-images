// import React, { Component } from 'react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from './constans/Box';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export default function App() {
  const [newSearchText, setNewSearchText] = useState('');
  const [page, setPage] = useState(1);

  const handleNewSearch = searchText => {
    setNewSearchText(searchText);
  };

  const incrementPage = () => {
    setPage(prevState => prevState + 1);
  };

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
