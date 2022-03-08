import React from 'react'
import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@mui/material/IconButton';
import { StyledTextField } from './style'
export const Input = ({type,name,label,value,placeholder,error=null,onChange,password}) => {

	const [visibilityPassword, setVisibilityPassword] = useState(false)

    const handleClickShowPassword = () => {
      setVisibilityPassword(!visibilityPassword)
    }

  return (
    <StyledTextField
    variant='outlined'
    type={password ? visibilityPassword ? "text" : 'password' : type}
    label={label}
    name={name}
	value={value}
  required
	placeholder={placeholder}
	onChange={onChange}
	fullWidth
	{...(error && {error:true, helperText:error} )}
	margin={'normal'}
	InputProps = {{ 
                endAdornment: 
                <InputAdornment position='end'>
                         <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            >
                            { password? visibilityPassword ? <Visibility /> : <VisibilityOff /> : ''}
                        </IconButton>
                </InputAdornment>
	}}
    />
  )
}

