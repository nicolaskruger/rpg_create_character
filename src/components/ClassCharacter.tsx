import { Button } from '@material-ui/core';
import * as React from 'react';
import { IntSteps } from './InterafceSteps';


function ClassCharacter({ next, prev }: IntSteps) {
    return (
        <>

            <p>class</p>
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
    );
}

export { ClassCharacter }