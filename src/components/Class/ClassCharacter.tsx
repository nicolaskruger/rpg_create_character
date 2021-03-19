import { Button } from '@material-ui/core';
import * as React from 'react';
import { IntSteps } from '../InterafceSteps';
import {ClassImg} from '../ClassImg/ClassImage';
import { RPGClass } from '../../app/Character';
import './styles.css'

type ClassIntf = IntSteps & {
    onSubmit:(clas:RPGClass)=>void
}

function ClassCharacter({onSubmit, currChar, next, prev }: ClassIntf) {
    const [clas,setClass] = React.useState(currChar.rpgClass);
    const changeClass = (clas:RPGClass) =>{
        onSubmit(clas);
        setClass(clas);
    }
    return (
        <section className="class__section">

            <ul className ="class__ul">
                <li onClick={()=>changeClass(RPGClass.ARCHER)} className = "class__li">
                    <ClassImg checked={clas===RPGClass.ARCHER} selcet={RPGClass.ARCHER} />
                </li>
                <li onClick={()=>changeClass(RPGClass.MAGE)} className = "class__li">
                    <ClassImg checked={clas===RPGClass.MAGE} selcet={RPGClass.MAGE} />
                </li>
                <li onClick={()=>changeClass(RPGClass.WARRIOR)} className = "class__li">
                    <ClassImg checked={clas===RPGClass.WARRIOR} selcet={RPGClass.WARRIOR} />    
                </li>
            </ul>
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
        </section>
    );
}

export { ClassCharacter }