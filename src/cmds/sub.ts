export const command:string = ('sub <x> <y>');
export const desc:string = ("subtract y from x");
export const builder = (yargs:any) => {
    return yargs;
}
export const handler = (argv:any) =>  {
    console.log(argv.y - argv.x)
}