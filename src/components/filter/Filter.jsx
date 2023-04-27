import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Filter = ({ filter, handleChange }) => {
  return (
    <Box
      sx={{
        maxWidth: 130,
        backgroundColor: '#5cd3a8',
        borderRadius: 2,
        '&:hover': {
          background: '#ebd8ff',
        },
        '&:focus': {
          background: '#ebd8ff',
        },
      }}
    >
      <FormControl fullWidth>
        <Select id="demo-simple-select" value={filter} onChange={handleChange}>
          <MenuItem value={'show all'}>show all</MenuItem>
          <MenuItem value={'follow'}>follow</MenuItem>
          <MenuItem value={'following'}>following</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
