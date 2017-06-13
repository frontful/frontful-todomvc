import {Models} from 'frontful-model'
import {Resolver} from 'frontful-resolver'

function initialize(element, {req, res} = {}) {
  const models = new Models({
    config: {
      'frontful-router': {
        req: req,
        res: res,
      }
    }
  })

  const resolver = new Resolver(element, {
    models: models,
  })

  return {
    models,
    resolver,
  }
}

export default initialize
