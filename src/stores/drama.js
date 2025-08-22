import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api } from '../api'

export const useDramaStore = defineStore('drama', () => {
  // 状态
  const dramas = ref([])
  const categories = ref([])
  const featuredDramas = ref([])
  const trendingDramas = ref([])
  const currentDrama = ref(null)
  const currentEpisode = ref(null)
  const searchResults = ref([])
  const isLoading = ref(false)

  // 计算属性
  const dramaById = computed(() => (id) => {
    return dramas.value.find(drama => drama.id === id)
  })

  const dramasByCategory = computed(() => (categoryId) => {
    return dramas.value.filter(drama => drama.categoryId === categoryId)
  })

  const totalEpisodes = computed(() => {
    return currentDrama.value ? currentDrama.value.episodes?.length || 0 : 0
  })

  // 动作
  const fetchDramas = async (params = {}) => {
    isLoading.value = true
    try {
      // 模拟短剧数据
      const mockDramas = [
        { id: 1, title: 'Love in Paris', description: 'A romantic story set in the city of love', category: 'Romance', episodeCount: 12, coverImage: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Love+in+Paris' },
        { id: 2, title: 'The Wedding Planner', description: 'When love meets professional ambition', category: 'Romance', episodeCount: 8, coverImage: 'https://via.placeholder.com/300x200/764ba2/ffffff?text=Wedding+Planner' },
        { id: 3, title: 'City Dreams', description: 'A young woman pursues her dreams in the big city', category: 'Drama', episodeCount: 10, coverImage: 'https://via.placeholder.com/300x200/f093fb/ffffff?text=City+Dreams' }
      ]
      dramas.value = mockDramas
      return { success: true, dramas: mockDramas }
    } catch (error) {
      console.error('Failed to fetch dramas:', error)
      return { success: false, error: 'Failed to fetch dramas' }
    } finally {
      isLoading.value = false
    }
  }

  const fetchCategories = async () => {
    try {
      // 模拟分类数据
      const mockCategories = [
        { id: 1, name: 'Strong Heroine', icon: 'Star', dramaCount: 28 },
        { id: 2, name: 'Comeback Story', icon: 'Zap', dramaCount: 22 },
        { id: 3, name: 'Toxic Love', icon: 'Heart', dramaCount: 18 },
        { id: 4, name: 'Sweet Romance', icon: 'Heart', dramaCount: 25 },
        { id: 5, name: 'Hidden Identity', icon: 'Users', dramaCount: 20 },
        { id: 6, name: 'Love at First Sight', icon: 'Globe', dramaCount: 15 }
      ]
      categories.value = mockCategories
      return { success: true, categories: mockCategories }
    } catch (error) {
      console.error('Failed to fetch categories:', error)
      return { success: false, error: 'Failed to fetch categories' }
    }
  }

  const fetchFeaturedDramas = async () => {
    try {
      // 模拟特色短剧数据
      const mockFeaturedDramas = [
        { 
          id: 1, 
          title: 'Ex-Convict Nanny & Billionaire Single Dad', 
          description: 'A heartwarming story of redemption and unexpected love', 
          category: 'Romance', 
          episodeCount: 12, 
          coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center'
        },
        { 
          id: 2, 
          title: 'The Divorced Wife is a Genius Surgeon', 
          description: 'Professional success meets personal transformation', 
          category: 'Drama', 
          episodeCount: 15, 
          coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center'
        },
        { 
          id: 3, 
          title: 'Where the Light Enters', 
          description: 'Finding hope in the darkest moments', 
          category: 'Romance', 
          episodeCount: 10, 
          coverImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=200&fit=crop&crop=center'
        },
        { 
          id: 4, 
          title: 'The Beast on Her Leash', 
          description: 'A thrilling romance with unexpected twists', 
          category: 'Thriller', 
          episodeCount: 8, 
          coverImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=200&fit=crop&crop=center'
        },
        { 
          id: 5, 
          title: 'Queen Mom Rules', 
          description: 'Power and family dynamics collide', 
          category: 'Drama', 
          episodeCount: 12, 
          coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&crop=center'
        },
        { 
          id: 6, 
          title: 'Rewritten Vows', 
          description: 'Second chances at love and happiness', 
          category: 'Romance', 
          episodeCount: 10, 
          coverImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop&crop=center'
        }
      ]
      featuredDramas.value = mockFeaturedDramas
      return { success: true, dramas: mockFeaturedDramas }
    } catch (error) {
      console.error('Failed to fetch featured dramas:', error)
      return { success: false, error: 'Failed to fetch featured dramas' }
    }
  }

  const fetchTrendingDramas = async () => {
    try {
      // 模拟热门短剧数据
      const mockTrendingDramas = [
        { 
          id: 7, 
          title: 'The Genius and the Bad Boy', 
          description: 'When two hot brothers go after plus size Sophie', 
          category: 'Young Adult', 
          episodeCount: 8, 
          coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center'
        },
        { 
          id: 8, 
          title: 'Yellowstone: King of Montana', 
          description: 'Hidden identity and legendary power', 
          category: 'Comeback Story', 
          episodeCount: 12, 
          coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&crop=center'
        },
        { 
          id: 9, 
          title: 'Daisy Tucker and Mr. NYC', 
          description: 'Flash marriage leads to unexpected love', 
          category: 'Sweet Romance', 
          episodeCount: 10, 
          coverImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop&crop=center'
        }
      ]
      trendingDramas.value = mockTrendingDramas
      return { success: true, dramas: mockTrendingDramas }
    } catch (error) {
      console.error('Failed to fetch trending dramas:', error)
      return { success: false, error: 'Failed to fetch trending dramas' }
    }
  }

  const fetchDramaById = async (id) => {
    try {
      const response = await api.get(`/dramas/${id}`)
      currentDrama.value = response.data
      return { success: true, drama: response.data }
    } catch (error) {
      console.error('Failed to fetch drama:', error)
      return { success: false, error: error.response?.data?.message || 'Failed to fetch drama' }
    }
  }

  const fetchEpisode = async (dramaId, episodeId) => {
    try {
      const response = await api.get(`/dramas/${dramaId}/episodes/${episodeId}`)
      currentEpisode.value = response.data
      return { success: true, episode: response.data }
    } catch (error) {
      console.error('Failed to fetch episode:', error)
      return { success: false, error: error.response?.data?.message || 'Failed to fetch episode' }
    }
  }

  const searchDramas = async (query, filters = {}) => {
    isLoading.value = true
    try {
      const response = await api.get('/dramas/search', {
        params: { q: query, ...filters }
      })
      searchResults.value = response.data
      return { success: true, results: response.data }
    } catch (error) {
      console.error('Search failed:', error)
      return { success: false, error: error.response?.data?.message || 'Search failed' }
    } finally {
      isLoading.value = false
    }
  }

  const getNextEpisode = (currentEpisodeId) => {
    if (!currentDrama.value || !currentDrama.value.episodes) return null
    
    const currentIndex = currentDrama.value.episodes.findIndex(ep => ep.id === currentEpisodeId)
    if (currentIndex === -1 || currentIndex === currentDrama.value.episodes.length - 1) return null
    
    return currentDrama.value.episodes[currentIndex + 1]
  }

  const getPreviousEpisode = (currentEpisodeId) => {
    if (!currentDrama.value || !currentDrama.value.episodes) return null
    
    const currentIndex = currentDrama.value.episodes.findIndex(ep => ep.id === currentEpisodeId)
    if (currentIndex <= 0) return null
    
    return currentDrama.value.episodes[currentIndex - 1]
  }

  const clearCurrentDrama = () => {
    currentDrama.value = null
    currentEpisode.value = null
  }

  const clearSearchResults = () => {
    searchResults.value = []
  }

  const initializeDramaStore = async () => {
    try {
      await Promise.all([
        fetchCategories(),
        fetchFeaturedDramas(),
        fetchTrendingDramas()
      ])
    } catch (error) {
      console.error('Failed to initialize drama store:', error)
    }
  }

  return {
    // 状态
    dramas,
    categories,
    featuredDramas,
    trendingDramas,
    currentDrama,
    currentEpisode,
    searchResults,
    isLoading,
    
    // 计算属性
    dramaById,
    dramasByCategory,
    totalEpisodes,
    
    // 动作
    fetchDramas,
    fetchCategories,
    fetchFeaturedDramas,
    fetchTrendingDramas,
    fetchDramaById,
    fetchEpisode,
    searchDramas,
    getNextEpisode,
    getPreviousEpisode,
    clearCurrentDrama,
    clearSearchResults,
    initializeDramaStore
  }
})
