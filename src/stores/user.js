import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api } from '../api'

export const useUserStore = defineStore('user', () => {
  // 状态
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const isLoggedIn = computed(() => !!token.value)
  const userProfile = ref(null)
  const watchHistory = ref([])
  const favorites = ref([])
  const subscription = ref(null)

  // 动作
  const login = async (credentials) => {
    try {
      // 模拟登录成功
              const userData = {
          id: 1,
          email: credentials.email,
          name: 'Demo User',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        }
      const userToken = 'demo-token-123'
      
      user.value = userData
      token.value = userToken
      localStorage.setItem('token', userToken)
      
      // 获取用户资料
      await fetchUserProfile()
      
      return { success: true }
    } catch (error) {
      console.error('Login failed:', error)
      return { success: false, error: 'Login failed' }
    }
  }

  const register = async (userData) => {
    try {
      // 模拟注册成功
              const newUser = {
          id: 1,
          email: userData.email,
          name: `${userData.firstName} ${userData.lastName}`,
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        }
      const userToken = 'demo-token-123'
      
      user.value = newUser
      token.value = userToken
      localStorage.setItem('token', userToken)
      
      await fetchUserProfile()
      
      return { success: true }
    } catch (error) {
      console.error('Registration failed:', error)
      return { success: false, error: 'Registration failed' }
    }
  }

  const logout = () => {
    user.value = null
    userProfile.value = null
    token.value = null
    localStorage.removeItem('token')
    watchHistory.value = []
    favorites.value = []
    subscription.value = null
  }

  const fetchUserProfile = async () => {
    if (!token.value) return
    
    try {
      // 模拟用户资料
      userProfile.value = {
        id: 1,
        name: 'Demo User',
        email: 'demo@example.com',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        subscription: 'premium',
        joinDate: '2024-01-01'
      }
      
      // 获取观看历史和收藏
      await Promise.all([
        fetchWatchHistory(),
        fetchFavorites(),
        fetchSubscription()
      ])
    } catch (error) {
      console.error('Failed to fetch user profile:', error)
    }
  }

  const fetchWatchHistory = async () => {
    try {
      // 模拟观看历史
      watchHistory.value = [
        { id: 1, dramaId: 1, episodeId: 1, title: 'Love in Paris - Episode 1', progress: 0.8, lastWatched: '2024-01-15' },
        { id: 2, dramaId: 2, episodeId: 1, title: 'The Wedding Planner - Episode 1', progress: 0.5, lastWatched: '2024-01-14' }
      ]
    } catch (error) {
      console.error('Failed to fetch watch history:', error)
    }
  }

  const fetchFavorites = async () => {
    try {
      // 模拟收藏列表
      favorites.value = [
        { id: 1, dramaId: 1, title: 'Love in Paris', coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop&crop=center' },
        { id: 2, dramaId: 2, title: 'The Wedding Planner', coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=150&fit=crop&crop=center' }
      ]
    } catch (error) {
      console.error('Failed to fetch favorites:', error)
    }
  }

  const fetchSubscription = async () => {
    try {
      // 模拟订阅信息
      subscription.value = {
        id: 1,
        plan: 'premium',
        status: 'active',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        price: 9.99
      }
    } catch (error) {
      console.error('Failed to fetch subscription:', error)
    }
  }

  const addToFavorites = async (dramaId) => {
    try {
      // 模拟添加到收藏
      console.log('Added to favorites:', dramaId)
      await fetchFavorites()
      return { success: true }
    } catch (error) {
      console.error('Failed to add to favorites:', error)
      return { success: false, error: 'Failed to add to favorites' }
    }
  }

  const removeFromFavorites = async (dramaId) => {
    try {
      await api.delete(`/user/favorites/${dramaId}`)
      await fetchFavorites()
      return { success: true }
    } catch (error) {
      console.error('Failed to remove from favorites:', error)
      return { success: false, error: error.response?.data?.message || 'Failed to remove from favorites' }
    }
  }

  const updateWatchProgress = async (dramaId, episodeId, progress) => {
    try {
      await api.post('/user/watch-progress', {
        dramaId,
        episodeId,
        progress
      })
      await fetchWatchHistory()
      return { success: true }
    } catch (error) {
      console.error('Failed to update watch progress:', error)
      return { success: false, error: error.response?.data?.message || 'Failed to update progress' }
    }
  }

  const initializeUser = async () => {
    if (token.value) {
      await fetchUserProfile()
    }
  }

  return {
    // 状态
    user,
    token,
    isLoggedIn,
    userProfile,
    watchHistory,
    favorites,
    subscription,
    
    // 动作
    login,
    register,
    logout,
    fetchUserProfile,
    fetchWatchHistory,
    fetchFavorites,
    fetchSubscription,
    addToFavorites,
    removeFromFavorites,
    updateWatchProgress,
    initializeUser
  }
})
