import * as React from 'react';
import { Character } from '../../app/Character';
import { ClassImg } from '../ClassImg/ClassImage';
import './styles.css'

interface FinishIntf{
    currCharacer:Character
}

function FinishCharacter({currCharacer}:FinishIntf){
    return (
        <section className="section__finish">
            <h1>{currCharacer.name}</h1>
            <ClassImg checked={true} selcet={currCharacer.rpgClass}/>
            <ul>
                <li>
                    life: {currCharacer.atributs.life}
                </li>
                <li>
                    strong: {currCharacer.atributs.strong}
                </li>
                <li>
                    stamina: {currCharacer.atributs.stamina}
                </li>
                <li>
                    mana: {currCharacer.atributs.mana}
                </li>
            </ul>     
        </section>
    );
}

export {FinishCharacter}