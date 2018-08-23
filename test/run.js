const Serverless = require('serverless')
const ServerlessStageSelection = require('../src/index')

//process.env.SLS_DEBUG = 'true';

const serverless = new Serverless()
serverless.init().then(async () => {
  serverless.pluginManager.addPlugin(ServerlessStageSelection)
  await serverless.run()
})
