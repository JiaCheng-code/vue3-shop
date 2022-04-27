import { App } from 'vue'
import registerElement from './register-element'
import registerElementIcon from './register-elementIcon'
import registerProperties from './register-properties'

export function globalRegister(app: App) {
  app.use(registerElementIcon)
  app.use(registerElement)
  app.use(registerProperties)
}
