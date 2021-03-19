import { Button } from '@material-ui/core';
import * as React from 'react';
import { Atributs } from '../../app/Character';
import { calcPoints } from '../../app/Character/Atributs';
import { IntSteps } from '../InterafceSteps';
import { SliderCharacter } from '../sliderCharacter/SliderCharacter';
import './styles.css'

type AtributsIntf = IntSteps & {
    onSubmit:(atb:Atributs)=>void
}

function AtribtsCharacter({onSubmit,currChar,next,prev}:AtributsIntf){
    const maxPoints = 20;
    const [atribts,setAtributs] = React.useState(currChar.atributs);
    const keys:Array<keyof Atributs> = ['life','mana','stamina','strong'];
    const ponts = maxPoints - calcPoints(atribts)
    const atlAtributs = (key:keyof Atributs, val:number) =>{
        const newAtribut = {...atribts};
        newAtribut[key] = val;
        const newPoints = maxPoints - calcPoints(newAtribut)
        if(newPoints >= 0){
            onSubmit(newAtribut);
            setAtributs(newAtribut);
        }
    }
    return (
        <>

            <section className="class__section__atributs">
                {keys.map((v, i)=><SliderCharacter key={i} myKey={v} atributs={atribts} atlAtributs={atlAtributs} />)}
                <p>{`${ponts}`}</p>
            </section>
            <section className="class__section__button">
                <Button variant="contained"
                    onClick={(event) =>{if (prev) prev()} }
                >
                    PREV
                </Button>
                <Button variant="contained" 
                    onClick={(event) =>{if (next) next()} }
                >
                    NEXT
                </Button>
            </section>
        </>
    )
}

export {AtribtsCharacter};