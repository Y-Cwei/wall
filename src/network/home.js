import { getRequest } from './config'

export const getSwiper = (data) => {
  return getRequest('/home/swiper', data)
}
