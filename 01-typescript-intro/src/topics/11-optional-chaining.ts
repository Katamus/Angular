export interface Passenger {
    name:string,
    children?:string[]
}

const passenger1: Passenger = {
    name: 'Christian'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children:['niña','niño']
}

const printChildren = (passenger: Passenger):number => {

    //if(!passenger.children) return 0;
    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

printChildren(passenger2);
printChildren(passenger1);