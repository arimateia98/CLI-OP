const yargs = require('yargs');

yargs
.usage('Usage: app.ts <command> [options]')
.commandDir('cmds',{
    extensions:['ts']
})
.strict()
.demandCommand(1,'You need to run a command')
.help()
.argv