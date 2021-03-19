
interface Atributs{
    life:number;
    strong:number;
    stamina:number;
    mana:number;
}

function calcPoints(atributs:Atributs){
    return (Object.keys(atributs) as Array<keyof typeof atributs>)
    .map(v=>atributs[v])
    .reduce((acc,curr)=>acc+curr,0);
}

export type {Atributs}
export {calcPoints}