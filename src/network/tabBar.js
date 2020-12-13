import { getRequest } from './config'

export const getTabBar = (data) => {
  return getRequest('/tabbar', data)
}
