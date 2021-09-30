import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SelectMaterial, { SelectChangeEvent } from "@mui/material/Select";

interface OwnProps {
  onChange: (value: string) => void;
  label: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<OwnProps> = ({ onChange, label, options }) => {
  const [value, setValue] = React.useState(options[0].value);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl variant="standard" size="small" sx={{marginBottom: '8px'}}>
      <InputLabel id="select-label">{label}</InputLabel>
      <SelectMaterial
        labelId="select-label"
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectMaterial>
    </FormControl>
  );
};

export default Select;
