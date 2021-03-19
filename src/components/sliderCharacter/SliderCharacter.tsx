import { Slider, Typography } from '@material-ui/core';
import * as React from 'react';
import { Atributs } from '../../app/Character';

interface SliderIntf{
    myKey:keyof Atributs;
    atributs:Atributs;
    atlAtributs: (key:keyof Atributs, val:number)=>void
}

function SliderCharacter({myKey: key, atributs, atlAtributs }:SliderIntf){
    return (
        <>
            <Typography id="discrete-slider" gutterBottom>
                   {key}
                </Typography>
                <Slider
                    className="slider__atributs"
                  value={atributs[key]}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  onChange={(event,val)=>{
                      atlAtributs(key, val as number)
                  }}
                  marks
                  min={0}
                  max={10}
                />
        </>
    );
}

export {SliderCharacter};