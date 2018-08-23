'use strict'
const List = require('prompt-list')

class ServerlessPlugin {
  constructor (serverless, options) {
    this.serverless = serverless
    this.options = options

    this.hooks = {
      'before:package:cleanup': this.beforePackage.bind(this)
    }
  }

  async beforePackage () {
    if (this.serverless.processedInput.options.stage) return

    this.list = new List({
      name: 'stage',
      message: 'Which stage would you like to use?',
      default: 0,
      choices: ['dev', 'prod']
    })

    const stage = await this.list.run()
    this.serverless.processedInput.options.stage = stage
    this.serverless.config.stage = stage
    this.serverless.service.provider.stage = stage
    await this.serverless.service.load(this.serverless.processedInput.options)
    this.serverless.service.mergeArrays()
    this.serverless.service.setFunctionNames(this.serverless.processedInput.options)
    this.serverless.service.validate()
  }
}

module.exports = ServerlessPlugin
