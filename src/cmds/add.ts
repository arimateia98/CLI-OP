export const command:string = ('add <x> <y>');
export const desc:string = ("add two numbers");
export const builder = (yargs:any) => {
    return yargs;
};
export const handler = (argv:any) =>  {
    console.log(argv.x + argv.y);
};