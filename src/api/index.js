import axios from 'axios'

// 创建axios实例
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token过期，清除本地存储并跳转到登录页
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API端点配置
export const endpoints = {
  // 认证相关
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    refresh: '/auth/refresh',
    logout: '/auth/logout'
  },
  
  // 用户相关
  user: {
    profile: '/user/profile',
    updateProfile: '/user/profile',
    watchHistory: '/user/watch-history',
    favorites: '/user/favorites',
    subscription: '/user/subscription',
    watchProgress: '/user/watch-progress'
  },
  
  // 短剧相关
  drama: {
    list: '/dramas',
    detail: (id) => `/dramas/${id}`,
    featured: '/dramas/featured',
    trending: '/dramas/trending',
    search: '/dramas/search',
    episode: (dramaId, episodeId) => `/dramas/${dramaId}/episodes/${episodeId}`,
    category: (categoryId) => `/dramas/category/${categoryId}`
  },
  
  // 分类相关
  category: {
    list: '/categories',
    detail: (id) => `/categories/${id}`,
    dramas: (id) => `/categories/${id}/dramas`
  },
  
  // 支付相关
  payment: {
    methods: '/payment/methods',
    process: '/payment/process',
    history: '/payment/history'
  },
  
  // 订阅相关
  subscription: {
    plans: '/subscription/plans',
    create: '/subscription/create',
    cancel: '/subscription/cancel',
    update: '/subscription/update'
  }
}

// 导出API实例
export { api }

// 导出默认API实例
export default api
