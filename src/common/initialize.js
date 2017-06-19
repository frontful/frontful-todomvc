import {Models} from 'frontful-model'
import {Resolver} from 'frontful-resolver'

function initialize(element, {req, res} = {}) {
  const models = new Models({
    config: {
      'frontful-router': {req, res}
    }
  })

  return {
    models,
    resolver: new Resolver(element, {models})
  }
}

export default initialize
