import { Box } from 'components/constans/Box';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormInput } from './Searchbar.styled';
import Button from 'components/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Searchbar({ onSubmit }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = e => {
    const value = e.currentTarget.value.toLowerCase();
    setSearchText(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchText.trim() === '') {
      toast.error('Please type the text');
      return;
    }

    onSubmit(searchText);
    setSearchText('');
  };

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
