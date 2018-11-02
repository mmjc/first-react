/**
 * Created by mjc on 2018/10/31.
 */
import ajax from './ajax';
export const reqLogin=data=>ajax('./login',data,'POST');
export const reqRegister=data=>ajax('/register',data,'POST');

export const reqUpdateUserInfo=data=>ajax('/updata',data,'POST');