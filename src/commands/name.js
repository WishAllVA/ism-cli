const { Command, flags } = require('@oclif/command')
const cli = require('cli-ux').default

class NameCommand extends Command {
    async run() {
        const { flags } = this.parse(NameCommand)
        const stockName = await cli.prompt('Enter the name of stock')
        this.log(`You have chosen ${stockName}`)
    }
}

NameCommand.description = `Name of the stock
...
Extra documentation goes here
`

NameCommand.flags = {
    name: flags.string({ char: 'n', description: 'name of the stock' }),
}

module.exports = NameCommand
