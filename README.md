Serverless Stage Selection Plugin
====================================

[![Build Status](https://travis-ci.org/kalarrs/serverless-stage-selection.svg)](https://travis-ci.org/kalarrs/serverless-stage-selection)

This plugin allows you to be prompted to select a stage before deploy or package.


# How To

### 1. Install the plugin

```sh
npm install @kalarrs/serverless-stage-selection --save-dev
```

### 2. Add the plugin to your serverless configuration file

*serverless.yml* configuration example:

```yaml
provider:
  name: aws
  runtime: nodejs8.10

functions:
  hello:
    handler: handler.hello
    events:
      - http: GET /hello

# Add serverless-stage-selection to your plugins:
plugins:
  - "@kalarrs/serverless-stage-selection"
```

# License & Credits

Licensed under the MIT license.