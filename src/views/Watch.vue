<template>
  <div class="watch-page">
    <div class="video-player">
      <div class="video-placeholder">
        <Play class="play-icon" />
        <h2>Video Player</h2>
        <p>Episode content will be displayed here</p>
      </div>
    </div>
    
    <div class="episode-info">
      <h1>Episode Title</h1>
      <p>Episode description goes here...</p>
    </div>
  </div>
</template>

<script setup>
import { Play } from 'lucide-vue-next'
</script>

<style lang="scss" scoped>
.watch-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl);
}

.video-player {
  margin-bottom: var(--spacing-2xl);
  
  .video-placeholder {
    width: 100%;
    height: 400px;
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    
    .play-icon {
      width: 80px;
      height: 80px;
      margin-bottom: var(--spacing-lg);
      color: var(--primary-color);
    }
    
    h2 {
      font-size: var(--text-2xl);
      margin-bottom: var(--spacing-sm);
      color: var(--text-primary);
    }
  }
}

.episode-info {
  h1 {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    margin-bottom: var(--spacing-lg);
  }
  
  p {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.6;
  }
}
</style>
