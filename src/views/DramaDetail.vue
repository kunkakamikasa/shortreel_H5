<template>
  <div class="drama-detail">
    <div class="drama-header">
      <div class="drama-cover">
        <img :src="drama.coverImage" :alt="drama.title" />
        <button class="play-button" @click="startWatching">
          <Play class="play-icon" />
          Start Watching
        </button>
      </div>
      <div class="drama-info">
        <h1>{{ drama.title }}</h1>
        <p class="description">{{ drama.description }}</p>
        <div class="meta">
          <span class="category">{{ drama.category }}</span>
          <span class="episodes">{{ drama.episodeCount }} Episodes</span>
          <span class="duration">{{ drama.duration }}</span>
        </div>
        <div class="actions">
          <button class="btn btn-primary" @click="addToFavorites">
            <Heart v-if="!isFavorite" class="icon-sm" />
            <HeartOff v-else class="icon-sm" />
            {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
          </button>
        </div>
      </div>
    </div>
    
    <div class="episodes-section">
      <h2>Episodes</h2>
      <div class="episodes-list">
        <div 
          v-for="episode in drama.episodes" 
          :key="episode.id"
          class="episode-item"
          @click="watchEpisode(episode.id)"
        >
          <div class="episode-number">{{ episode.number }}</div>
          <div class="episode-info">
            <h3>{{ episode.title }}</h3>
            <p>{{ episode.description }}</p>
          </div>
          <div class="episode-duration">{{ episode.duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDramaStore } from '../stores/drama'
import { Play, Heart, HeartOff } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const dramaStore = useDramaStore()

const drama = ref({
  id: 1,
  title: 'Love in Paris',
  description: 'A romantic story set in the city of love, following the journey of two people who find each other in the most unexpected way.',
  coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center',
  category: 'Romance',
  episodeCount: 12,
  duration: '45 min',
  episodes: [
    { id: 1, number: '01', title: 'The Meeting', description: 'Two strangers meet in a Paris café', duration: '45 min' },
    { id: 2, number: '02', title: 'First Date', description: 'Their first date takes an unexpected turn', duration: '42 min' },
    { id: 3, number: '03', title: 'The Conflict', description: 'A misunderstanding threatens their relationship', duration: '48 min' }
  ]
})

const isFavorite = ref(false)

onMounted(async () => {
  const dramaId = route.params.id
  // 这里应该根据dramaId获取短剧详情
  // 现在使用模拟数据
})

const startWatching = () => {
  router.push(`/watch/${drama.value.id}`)
}

const watchEpisode = (episodeId) => {
  router.push(`/watch/${drama.value.id}?episode=${episodeId}`)
}

const addToFavorites = () => {
  isFavorite.value = !isFavorite.value
}
</script>

<style lang="scss" scoped>
.drama-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl);
}

.drama-header {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
  
  .drama-cover {
    position: relative;
    
    img {
      width: 100%;
      border-radius: var(--radius-lg);
    }
    
    .play-button {
      position: absolute;
      bottom: var(--spacing-lg);
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary-color);
      color: white;
      border: none;
      padding: var(--spacing-md) var(--spacing-xl);
      border-radius: var(--radius-lg);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      font-weight: var(--font-medium);
      
      &:hover {
        background: var(--primary-dark);
      }
    }
  }
  
  .drama-info {
    h1 {
      font-size: var(--text-4xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-lg);
    }
    
    .description {
      font-size: var(--text-lg);
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: var(--spacing-xl);
    }
    
    .meta {
      display: flex;
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-xl);
      
      span {
        background: var(--bg-secondary);
        color: var(--text-secondary);
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
      }
    }
  }
}

.episodes-section {
  h2 {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    margin-bottom: var(--spacing-lg);
  }
  
  .episodes-list {
    .episode-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-lg);
      padding: var(--spacing-lg);
      background: var(--bg-card);
      border-radius: var(--radius-lg);
      margin-bottom: var(--spacing-md);
      cursor: pointer;
      transition: all var(--transition-fast);
      
      &:hover {
        background: var(--bg-tertiary);
        transform: translateX(4px);
      }
      
      .episode-number {
        width: 40px;
        height: 40px;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: var(--font-bold);
        flex-shrink: 0;
      }
      
      .episode-info {
        flex: 1;
        
        h3 {
          font-size: var(--text-lg);
          font-weight: var(--font-semibold);
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }
        
        p {
          color: var(--text-secondary);
          font-size: var(--text-sm);
        }
      }
      
      .episode-duration {
        color: var(--text-muted);
        font-size: var(--text-sm);
        flex-shrink: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .drama-header {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .drama-cover .play-button {
    position: static;
    transform: none;
    margin-top: var(--spacing-lg);
  }
}
</style>
