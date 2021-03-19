import * as React from 'react';
import mage from './img/mage.png';
import warior from './img/warior.jpg';
import archer from './img/archer.png';
import { RPGClass } from '../../app/Character';
import './styles.css'

type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};
interface CImgIntf{
    selcet:RPGClass,
    checked:boolean
}

function ClassImg({selcet, checked}:CImgIntf){
    const name = checked?"check img__class":"img__class";
    const swith: EnumDictionary<RPGClass, JSX.Element> = {
        [RPGClass.ARCHER]: <img className={name} src={archer} alt="archer"/>,
        [RPGClass.MAGE]: <img className={name} src={mage} alt="mage"/>,
        [RPGClass.WARRIOR]: <img className={name} src={warior} alt="mage"/>,
    }
    return swith[selcet];
}

export {ClassImg};