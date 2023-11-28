export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Xavi'
}

const passenger2: Passenger = {
    name: 'Lorena',
    children: ['Sara', 'Alex'],
}

const printChildren = (passenger: Passenger) => {
    //const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children?.length;

    console.log(passenger.name, howManyChildren);

}

const returnChildrenNumber = (passenger: Passenger): number => {
    
    if(!passenger.children) return 0;

    const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;

}

printChildren(passenger2);
printChildren(passenger1);

returnChildrenNumber(passenger2);
returnChildrenNumber(passenger1);