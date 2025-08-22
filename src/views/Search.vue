<template>
  <div class="search-page">
    <div class="search-header">
      <div class="search-container">
        <Search class="search-icon" />
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="Search for dramas, actors, or genres..."
          @input="handleSearch"
        />
        <button class="clear-button" v-if="searchQuery" @click="clearSearch">
          <X class="clear-icon" />
        </button>
      </div>
    </div>
    
    <div class="search-results" v-if="searchQuery">
      <h2>Search Results for "{{ searchQuery }}"</h2>
      <div class="results-grid">
        <div 
          v-for="result in searchResults" 
          :key="result.id"
          class="result-card"
          @click="goToDrama(result.id)"
        >
          <div class="result-image">
            <img :src="result.coverImage" :alt="result.title" />
          </div>
          <div class="result-info">
            <h3>{{ result.title }}</h3>
            <p>{{ result.description }}</p>
            <div class="result-meta">
              <span class="category">{{ result.category }}</span>
              <span class="episodes">{{ result.episodeCount }} Episodes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="popular-searches" v-else>
      <h2>Popular Searches</h2>
      <div class="search-tags">
        <span 
          v-for="tag in popularTags" 
          :key="tag"
          class="search-tag"
          @click="searchByTag(tag)"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search, X } from 'lucide-vue-next'

const router = useRouter()
const searchQuery = ref('')
const searchResults = ref([])

const popularTags = [
  'Romance', 'Action', 'Drama', 'Comedy', 'Thriller', 
  'Fantasy', 'Mystery', 'Adventure', 'Sci-Fi', 'Horror'
]

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // 模拟搜索
          searchResults.value = [
        {
          id: 1,
          title: 'Love in Paris',
          description: 'A romantic story set in the city of love',
          coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop&crop=center',
          category: 'Romance',
          episodeCount: 12
        },
        {
          id: 2,
          title: 'The Wedding Planner',
          description: 'When love meets professional ambition',
          coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=150&fit=crop&crop=center',
          category: 'Romance',
          episodeCount: 8
        },
        {
          id: 3,
          title: 'City Dreams',
          description: 'A young woman pursues her dreams in the big city',
          coverImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=150&fit=crop&crop=center',
          category: 'Drama',
          episodeCount: 10
        }
      ]
  } else {
    searchResults.value = []
  }
}

const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
}

const searchByTag = (tag) => {
  searchQuery.value = tag
  handleSearch()
}

const goToDrama = (id) => {
  router.push(`/drama/${id}`)
}
</script>

<style lang="scss" scoped>
.search-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl);
}

.search-header {
  margin-bottom: var(--spacing-2xl);
  
  .search-container {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    
    .search-icon {
      position: absolute;
      left: var(--spacing-lg);
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      width: 24px;
      height: 24px;
    }
    
    .search-input {
      width: 100%;
      padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-lg) 60px;
      font-size: var(--text-lg);
      background: var(--bg-card);
      border: 2px solid var(--border-color);
      border-radius: var(--radius-xl);
      color: var(--text-primary);
      
      &:focus {
        outline: none;
        border-color: var(--primary-color);
      }
    }
    
    .clear-button {
      position: absolute;
      right: var(--spacing-lg);
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      padding: var(--spacing-xs);
      border-radius: var(--radius-sm);
      
      &:hover {
        color: var(--text-primary);
        background: var(--bg-secondary);
      }
    }
  }
}

.search-results {
  h2 {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    margin-bottom: var(--spacing-xl);
  }
  
  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--spacing-lg);
  }
  
  .result-card {
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    overflow: hidden;
    cursor: pointer;
    transition: all var(--transition-normal);
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
    }
    
    .result-image {
      height: 150px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .result-info {
      padding: var(--spacing-lg);
      
      h3 {
        font-size: var(--text-lg);
        font-weight: var(--font-semibold);
        color: var(--text-primary);
        margin-bottom: var(--spacing-sm);
      }
      
      p {
        color: var(--text-secondary);
        margin-bottom: var(--spacing-md);
        line-height: 1.5;
      }
      
      .result-meta {
        display: flex;
        gap: var(--spacing-md);
        
        span {
          font-size: var(--text-sm);
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--radius-sm);
        }
      }
    }
  }
}

.popular-searches {
  text-align: center;
  
  h2 {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    margin-bottom: var(--spacing-xl);
  }
  
  .search-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    justify-content: center;
    
    .search-tag {
      background: var(--bg-card);
      color: var(--text-secondary);
      padding: var(--spacing-sm) var(--spacing-lg);
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: all var(--transition-fast);
      
      &:hover {
        background: var(--primary-color);
        color: white;
        transform: translateY(-2px);
      }
    }
  }
}

@media (max-width: 768px) {
  .search-page {
    padding: var(--spacing-lg);
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
}
</style>
