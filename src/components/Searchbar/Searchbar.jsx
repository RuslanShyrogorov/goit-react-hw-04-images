import { Box } from 'components/constans/Box';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
// import { Button, FormInput } from './Searchbar.styled';
import { FormInput } from './Searchbar.styled';
import Button from 'components/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';

export default class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    // const { value, name } = e.target;
    // this.setState({
    //   [name]: value.toLowerCase(),
    // });

    this.setState({ searchText: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchText.trim() === '') {
      toast.error('Please type the text');
      return;
    }

    this.props.onSubmit(this.state);
    this.setState({ searchText: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { searchText } = this.state;

    return (
      <Box
        p={3}
        mb={3}
        mt={3}
        backgroundColor="blue"
        display="flex"
        justifyContent="center"
        alignItems="center"
        as="form"
        onSubmit={handleSubmit}
      >
        <FormInput
          type="text"
          name="searchText"
          value={searchText}
          onChange={handleChange}
        ></FormInput>
        <Button text="" type="submit">
          <AiOutlineSearch size="14px" />
        </Button>
      </Box>
    );
  }
}
