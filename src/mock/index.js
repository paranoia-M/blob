import login from './mock_login'
import profile from './mock_profile'
import user from './mock_user'
import article from './mock_article'
import category from './mock_category'
import comment from './mock_comment'
import other from './mock_other'
import quanta from './mock_quanta'

/**
 * 模拟数据mock
 *
 * mock是否开启模拟数据拦截
 * https://github.com/nuysoft/Mock/wiki
 */

const enable = true

login({ mock: enable })
profile({ mock: enable })
user({ mock: enable })
article({ mock: enable })
category({ mock: enable })
comment({ mock: enable })
other({ mock: enable })
quanta({ mock: enable })
