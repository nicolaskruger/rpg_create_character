import * as React from 'react';
import {validAtributs,validName} from '../app/Validation/Validate'

const validacoesCharacter = React.createContext(
    {name:validName, atribut:validAtributs}
);

export {validacoesCharacter}