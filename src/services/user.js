import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  //去掉此api后台没有此api
  // return request('/api/currentUser');
}
