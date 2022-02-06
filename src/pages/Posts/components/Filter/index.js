import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Filter = (props) => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    props.filterSelection(event.target)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          { props.label }
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption}
          label={props.label}
          onChange={handleChange}
          name={props.name}
        >
          { props.options.map(option=>( 
            <MenuItem 
              key={option} 
              value={option}
            >
              { option }
            </MenuItem>)
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
export default Filter;