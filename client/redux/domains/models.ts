import { createRootModel } from '~client/redux/helpers/model'
import { UserAgentModel } from '~client/redux/domains/userAgent/model'

export default createRootModel({
  userAgent: UserAgentModel
})
