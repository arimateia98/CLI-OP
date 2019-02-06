export const command:string = ('div <x> <y>');
export const desc:string = ("divides x by y");
export const builder = (yargs:any) => {
    return yargs;
}
export const handler = (argv:any) =>  {
    if(argv.y === 0){
        console.log("You cannot divide by 0");
    }
    else{
        console.log(argv.x / argv.y);
    }
}