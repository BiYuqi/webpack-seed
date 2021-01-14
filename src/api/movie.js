import request from './request'

export const movieList = (params) => {
  return request({
    url: '/movie/in_theaters', // 豆瓣热映，
    method: 'GET',
    params
  })
}
