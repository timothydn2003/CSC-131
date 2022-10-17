import * as React from 'react';
import { IMaskInput } from 'react-imask';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';




interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="###-##-####"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);



interface SSNboxProps{
  values:string,
  setValues(arg: any):void
}

export const SSNbox = ({values, setValues}:SSNboxProps) => {
  const handleChange = (event: any)=>{
    setValues(event.target.value)
  };

  return (
    <FormControl variant="filled" >
        <InputLabel htmlFor="formatted-text-mask-input">Enter SSN *</InputLabel>
        <Input
          value={values}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          placeholder='xxx-xx-xxxx'
          inputComponent={TextMaskCustom as any} 
        />
    </FormControl>
  );
}
