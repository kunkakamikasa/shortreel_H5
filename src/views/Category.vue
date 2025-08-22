<template>
  <div class="category-page">
    <div class="category-header">
              <h1>{{ categoryName }}</h1>
        <p>{{ categoryDescription }}</p>
        <div class="category-badge">
          <span class="badge-icon">🎭</span>
          <span class="badge-text">ShortReel Exclusive</span>
        </div>
    </div>
    
    <div class="drama-grid">
      <div 
        v-for="drama in dramas" 
        :key="drama.id"
        class="drama-card"
        @click="goToDrama(drama.id)"
      >
        <div class="drama-image">
          <img :src="drama.coverImage" :alt="drama.title" />
          <div class="drama-overlay">
            <Play class="play-icon" />
          </div>
        </div>
        <div class="drama-info">
          <h3>{{ drama.title }}</h3>
          <p>{{ drama.description }}</p>
          <div class="drama-meta">
            <span class="episodes">{{ drama.episodeCount }} Episodes</span>
            <span class="duration">{{ drama.duration }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDramaStore } from '../stores/drama'
import { Play } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const dramaStore = useDramaStore()

const categoryName = ref('Category')
const categoryDescription = ref('Browse dramas in this category')
const dramas = ref([])

onMounted(async () => {
  const categoryId = route.params.id
  // 这里应该根据categoryId获取分类信息和短剧列表
  // 现在使用模拟数据
  categoryName.value = 'Romance'
  categoryDescription.value = 'Discover heartwarming love stories'
        dramas.value = [
        {
          id: 1,
          title: 'Love in Paris',
          description: 'A romantic story set in the city of love',
          coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center',
          episodeCount: 12,
          duration: '45 min'
        },
        {
          id: 2,
          title: 'The Wedding Planner',
          description: 'When love meets professional ambition',
          coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&crop=center',
          episodeCount: 8,
          duration: '40 min'
        },
        {
          id: 3,
          title: 'City Dreams',
          description: 'A young woman pursues her dreams in the big city',
          coverImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop&crop=center',
          episodeCount: 10,
          duration: '42 min'
        },
        {
          id: 4,
          title: 'Mystery Manor',
          description: 'A thrilling mystery that keeps you guessing',
          coverImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=200&fit=crop&crop=center',
          episodeCount: 15,
          duration: '38 min'
        }
      ]
})

const goToDrama = (id) => {
  router.push(`/drama/${id}`)
}
</script>

<style lang="scss" scoped>
.category-page {
  padding: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
}

.category-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  
  h1 {
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
  }
  
  p {
    font-size: var(--text-lg);
    color: var(--text-secondary);
  }
  
  .category-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-full);
    margin-top: var(--spacing-md);
    
    .badge-icon {
      font-size: var(--text-lg);
    }
    
    .badge-text {
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
}

.drama-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.drama-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
  }
  
  .drama-image {
    position: relative;
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .drama-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-normal);
      
      .play-icon {
        width: 50px;
        height: 50px;
        color: white;
      }
    }
  }
  
  &:hover .drama-overlay {
    opacity: 1;
  }
  
  .drama-info {
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
    
    .drama-meta {
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

@media (max-width: 768px) {
  .category-page {
    padding: var(--spacing-lg);
  }
  
  .drama-grid {
    grid-template-columns: 1fr;
  }
}
</style>
