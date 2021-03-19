import { Step, StepLabel, Stepper } from '@material-ui/core';
import * as React from 'react';
import { Atributs, Character, RPGClass } from '../../app/Character';
import { AtribtsCharacter } from '../atributs/AtributsCharacter';
import { ClassCharacter } from '../Class/ClassCharacter';
import { FinishCharacter } from '../finish/FinishCharacter';
import { NameCharacter } from '../Name/NameCharacter';
import './styles.css'

function FormCharacter() {
    
    const defaultCharecter:Character = {
        atributs: {
            life: 0,
            mana: 0,
            stamina: 0,
            strong: 0,
        },
        name: "",
        rpgClass: RPGClass.ARCHER
    }
    let [i, setI] = React.useState(0);
    let [character, setCharacter] = React.useState(defaultCharecter);

    const next = () => {
        setI(i + 1);
    }
    const prev = () => {
        setI(i - 1);
    }
    const updateNameCharacter = (name:string) =>{
        setCharacter({...character,name});
    }
    const updateAtributsCharacter = (atributs:Atributs) =>{
        setCharacter({...character,atributs:{...atributs}});
    }
    const updateRPGClass = (rpgClass:RPGClass) =>{
        setCharacter({...character,rpgClass});
    }

    const swith = [
        () => <NameCharacter onSubmit={updateNameCharacter} currChar={character} next={next} />,
        () => <ClassCharacter onSubmit={updateRPGClass} currChar={character} next={next} prev={prev} />,
        () => <AtribtsCharacter onSubmit={updateAtributsCharacter} currChar={character} next={next} prev={prev} />,
        () => <FinishCharacter currCharacer={character} />
    ]
    return (
        <section className="form__section">
            <Stepper activeStep={i}>
                <Step><StepLabel>Name</StepLabel></Step>
                <Step><StepLabel>Class</StepLabel></Step>
                <Step><StepLabel>Atribts</StepLabel></Step>
                <Step><StepLabel>End</StepLabel></Step>
            </Stepper>
                {swith[i]()}
        </section>
    )
}

export { FormCharacter };

