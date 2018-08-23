'use strict'

/* global describe it before beforeEach afterEach */
const fs = require('fs')
const path = require('path')
const chai = require('chai')
const sinon = require('sinon')
const Serverless = require('serverless')
const ServerlessStageSelection = require('../src')

const assert = chai.assert
const serverlessFolder = path.join(__dirname, '.serverless')

describe('index.js', () => {
  let sandbox
  let serverless
  let serverlessStageSelection

  const createServerless = async () => {
    serverless = new Serverless({servicePath: __dirname})
    await serverless.init()
    serverless.pluginManager.addPlugin(ServerlessStageSelection)
    serverlessStageSelection = serverless.pluginManager.plugins.find(p => p instanceof ServerlessStageSelection)
  }

  const runServerlessPackage = (stage) => {
    serverless.processedInput = {
      commands: ['package'],
      options: {stage, region: undefined}
    }
    return serverless.run()
  }

  beforeEach((done) => {
    sandbox = sinon.sandbox.create()
    done()
  })

  afterEach((done) => {
    sandbox.restore()
    done()
  })

  describe('when package command is ran and no stage is passed', () => {
    beforeEach(async () => {
      await createServerless()
      await runServerlessPackage()
    })

    afterEach((done) => {
      done()
    })

    describe('when the user chooses dev stage', () => {
      // serverlessStageSelection.list; // set to dev;

      it('it should update the cloud formation with dev in 7 places', () => {
        // assert.equal(cf.a, a)
        // assert.equal(cf.b, b)
        // assert.equal(cf.c, c)
        // assert.equal(cf.d, d)
        // assert.equal(cf.e, e)
        // assert.equal(cf.f, f)
      })
    })

    describe('when the user chooses prod stage', () => {
      // serverlessStageSelection.list; // set to prod;

      it('it should update the cloud formation with dev in 7 places', () => {
        // assert.equal(cf.a, a)
        // assert.equal(cf.b, b)
        // assert.equal(cf.c, c)
        // assert.equal(cf.d, d)
        // assert.equal(cf.e, e)
        // assert.equal(cf.f, f)
      })
    })
  })

  describe('when package command is ran and a stage is passed', () => {
    afterEach((done) => {
      done()
    })

    describe('when the user chooses dev stage', () => {
      before(async () => {
        await createServerless('dev')
        await runServerlessPackage()
      })

      it('it should update the cloud formation with dev in 7 places', () => {
        // assert.equal(cf.a, a)
        // assert.equal(cf.b, b)
        // assert.equal(cf.c, c)
        // assert.equal(cf.d, d)
        // assert.equal(cf.e, e)
        // assert.equal(cf.f, f)
      })
    })

    describe('when the user chooses prod stage', () => {
      before(async () => {
        await createServerless('prod')
        await runServerlessPackage()
      })

      it('it should update the cloud formation with dev in 7 places', () => {
        // assert.equal(cf.a, a)
        // assert.equal(cf.b, b)
        // assert.equal(cf.c, c)
        // assert.equal(cf.d, d)
        // assert.equal(cf.e, e)
        // assert.equal(cf.f, f)
      })
    })
  })
})
