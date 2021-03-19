import * as React from 'react';
import { IntSteps } from '../InterafceSteps';
import { Button, TextField } from '@material-ui/core'
import {validacoesCharacter} from '../../context/ValidaCharacter'
import {Valid} from '../../app/Validation/Validate';
import './styles.css';

type NameIntf = IntSteps & {
    onSubmit:(name:string)=>void
}

function NameCharacter({onSubmit, currChar,  next }: NameIntf) {
    const [name,setName] = React.useState(currChar.name)
    const validate = React.useContext(validacoesCharacter).name;
    const defaultErro:Valid = {text:"",valid:true} 
    const [erro,setErro] = React.useState(defaultErro)
    const submit = ()=>{
        if (next && erro.valid){
            onSubmit(name);
            next();
        } 
    }
    return (
        <form className="name__section" 
            onSubmit={(evet) => { submit(); }}>
            <TextField
                className = "text__name"
                required
                value={name}
                variant="outlined"
                margin="normal"
                onChange={(event)=>{
                    setName(event.target.value)
                    setErro(validate(event.target.value))
                }}
                id="name"
                name="name"
                label="Name"
                onBlur={(event)=>setErro(validate(event.target.value))}
                error = {!erro.valid}
                helperText ={erro.text}
            />
            <Button className="button__name" type="submit" variant="contained" color="primary">
                Next
            </Button>
        </form>
    );
}

export { NameCharacter }