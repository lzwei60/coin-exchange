// 其中使用install的目的在于main.ts中
// 不能通过Vue.prototype.$Api这个方式直接调用
// 在全局方法中会说到使用插件的方式去挂在
// api.ts
import { Request } from '../utils/request';

class api {
  /* api接口模块 */
  public static article = {
    // 直接在index.ts中设置不需要Base模块
    genre: ()=> Request.get('/api/coin/allcoin'),
    yiqin: ()=> Request.get('/api/ug/api/wuhan/app/data/list-total?t=330415245809')
  }
}

export{
  api
}