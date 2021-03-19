import { Button } from '@material-ui/core';
import * as React from 'react';
import { IntSteps } from './InterafceSteps';

function AtribtsCharacter({next,prev}:IntSteps){
    return (
        <>

            <p>atribts</p>
            <Button
                onClick={(event) =>{if (next) next()} }
            >
                next
            </Button>
            <Button
                onClick={(event) =>{if (prev) prev()} }
            >
                prev
            </Button>
        </>
    )
}

export {AtribtsCharacter};