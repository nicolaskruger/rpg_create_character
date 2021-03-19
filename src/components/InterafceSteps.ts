import { Character } from "../app/Character";

interface IntSteps{
    currChar:Character;
    next?: ()=>void;
    prev?: ()=>void;
}

export type {IntSteps}