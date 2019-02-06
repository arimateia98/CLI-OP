export const command = ('mut <x> <y>');
export const desc = ("multiplies x, y times");
export const builder = (yargs:any) => {
    return yargs;
}
export const handler = (argv:any) =>  {
    console.log(argv.x * argv.y)
}