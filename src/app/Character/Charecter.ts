import {RPGClass} from './RPGClass';
import {Atributs} from './Atributs'

interface Character{
    name:string;
    rpgClass:RPGClass;
    atributs:Atributs;
}

export type {Character};