import { Atributs } from "../Character";
import { calcPoints } from "../Character/Atributs";

interface Valid {
    valid: boolean;
    text: string;
}

const validName = (name: string): Valid => {
    if (/^[a-zA-Z]+$/.test(name))
        return {
            valid: true,
            text: ""
        }
    return {
        valid :false,
        text: "name only content alphabet caracteres"
    }
}

const validAtributs = (atributs:Atributs, max:number): Valid =>{
    const val = calcPoints(atributs);
    if(val <= max)
        return {
            valid: true,
            text: ""
        }
    return{
        valid: false,
        text: `the value excedes the max atributs allowed remove ${val - max}`
    }
}

export type { Valid};
export {validName, validAtributs}