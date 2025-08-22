<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <div class="logo-container">
            <div class="logo-icon">SR</div>
            <h1 class="logo">ShortReel</h1>
          </div>
        </div>
        
        <div class="navbar-menu">
          <a href="#" class="nav-link active">Home</a>
          <a href="#" class="nav-link">Categories</a>
          <a href="#" class="nav-link">Fandom</a>
          <a href="#" class="nav-link">Brand</a>
          <div class="special-section">
            <span>REEL VERTICAL IMPACT</span>
          </div>
        </div>
        
        <div class="navbar-actions">
          <button class="action-btn">
            <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <span>Search</span>
          </button>
          <button class="action-btn">
            <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2v8l4-4"></path>
              <path d="M12 2v8l-4-4"></path>
              <path d="M2 12h8l-4 4"></path>
              <path d="M22 12h-8l4 4"></path>
              <path d="M12 22v-8l4 4"></path>
              <path d="M12 22v-8l-4 4"></path>
            </svg>
            <span>Download</span>
          </button>
          <button class="action-btn">
            <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            <span>History</span>
          </button>
          <button class="action-btn profile-btn">
            <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <div class="language-selector">
            <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="m5 9 7 7 7-7"></path>
            </svg>
            <span>English</span>
            <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </nav>

    <!-- 英雄轮播 -->
    <section class="hero-section">
      <div class="hero-carousel">
        <div class="hero-slide" :class="{ active: currentSlide === index }" v-for="(slide, index) in heroSlides" :key="index">
          <div class="hero-background" :style="{ backgroundImage: `url(${slide.backgroundImage})` }">
            <div class="hero-overlay"></div>
          </div>
          <div class="hero-content">
            <div class="hero-info">
              <h2 class="hero-title">{{ slide.title }}</h2>
              <p class="hero-subtitle">{{ slide.subtitle }}</p>
              <div class="hero-meta">
                <span class="hero-category">{{ slide.category }}</span>
                <span class="hero-episodes">{{ slide.episodes }} Episodes</span>
                <span class="hero-rating">⭐ {{ slide.rating }}</span>
              </div>
              <div class="hero-actions">
                <button class="btn btn-primary btn-lg hero-play-btn">
                  <svg class="play-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="5,3 19,12 5,21"></polygon>
                  </svg>
                  Play Now
                </button>
                <button class="btn btn-outline btn-lg hero-trailer-btn">
                  <svg class="film-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line>
                    <line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                  </svg>
                  Watch Trailer
                </button>
              </div>
            </div>
            <div class="hero-poster">
              <img :src="slide.posterImage" :alt="slide.title" />
              <div class="hero-poster-overlay">
                <svg class="hero-poster-play" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="5,3 19,12 5,21"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 轮播导航 -->
        <div class="hero-nav">
          <button class="hero-nav-btn prev" @click="prevSlide">
            <span class="nav-icon">‹</span>
          </button>
          <button class="hero-nav-btn next" @click="nextSlide">
            <span class="nav-icon">›</span>
          </button>
        </div>
        
        <!-- 轮播指示器 -->
        <div class="hero-indicators">
          <span 
            class="hero-indicator" 
            :class="{ active: currentSlide === index }" 
            v-for="(slide, index) in heroSlides" 
            :key="index"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </section>

    <!-- 特色短剧 -->
    <section class="featured-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Dramas</h2>
          <button class="btn btn-outline">
            <i>→</i>
            View All
          </button>
        </div>
        <div class="drama-grid">
          <div class="drama-card" v-for="drama in featuredDramas" :key="drama.id">
            <div class="drama-cover">
              <img :src="drama.coverImage" :alt="drama.title" />
              <div class="drama-overlay">
                <svg class="play-icon" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="5,3 19,12 5,21"></polygon>
                </svg>
              </div>
            </div>
            <div class="drama-info">
              <h3 class="drama-title">{{ drama.title }}</h3>
              <p class="drama-description">{{ drama.description }}</p>
              <div class="drama-meta">
                <span class="drama-category">{{ drama.category }}</span>
                <span class="drama-episodes">{{ drama.episodeCount }} Episodes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 分类浏览 -->
    <section class="categories-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Browse by Category</h2>
        </div>
        <div class="categories-grid">
          <div class="category-card" v-for="category in categories" :key="category.id">
            <div class="category-icon">
              <span class="icon">{{ category.icon }}</span>
            </div>
            <h3 class="category-name">{{ category.name }}</h3>
            <span class="category-count">{{ category.dramaCount }} Dramas</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门短剧 -->
    <section class="trending-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Trending Now</h2>
        </div>
        <div class="drama-grid">
          <div class="drama-card" v-for="drama in trendingDramas" :key="drama.id">
            <div class="drama-cover">
              <img :src="drama.coverImage" :alt="drama.title" />
              <div class="drama-overlay">
                <svg class="play-icon" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="5,3 19,12 5,21"></polygon>
                </svg>
              </div>
            </div>
            <div class="drama-info">
              <h3 class="drama-title">{{ drama.title }}</h3>
              <p class="drama-description">{{ drama.description }}</p>
              <div class="drama-meta">
                <span class="drama-category">{{ drama.category }}</span>
                <span class="drama-episodes">{{ drama.episodeCount }} Episodes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 订阅计划 -->
    <section class="subscription-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Choose Your Plan</h2>
          <p class="section-subtitle">Unlock unlimited access to premium short dramas</p>
        </div>
        <div class="plans-grid">
          <div class="plan-card">
            <div class="plan-header">
              <h3 class="plan-name">Basic</h3>
              <div class="plan-price">
                <span class="currency">$</span>
                <span class="amount">9.99</span>
                <span class="period">/month</span>
              </div>
            </div>
            <ul class="plan-features">
              <li>✅ 5 dramas per day</li>
              <li>✅ Standard quality</li>
              <li>✅ Basic support</li>
              <li>❌ No offline download</li>
            </ul>
            <button class="btn btn-outline plan-btn">
              <i>✓</i>
              Choose Basic
            </button>
          </div>
          
          <div class="plan-card featured">
            <div class="plan-badge">Most Popular</div>
            <div class="plan-header">
              <h3 class="plan-name">Premium</h3>
              <div class="plan-price">
                <span class="currency">$</span>
                <span class="amount">19.99</span>
                <span class="period">/month</span>
              </div>
            </div>
            <ul class="plan-features">
              <li>✅ Unlimited dramas</li>
              <li>✅ HD quality</li>
              <li>✅ Priority support</li>
              <li>✅ Offline download</li>
              <li>✅ Ad-free experience</li>
            </ul>
            <button class="btn btn-primary plan-btn">
              <i>★</i>
              Choose Premium
            </button>
          </div>
          
          <div class="plan-card">
            <div class="plan-header">
              <h3 class="plan-name">Family</h3>
              <div class="plan-price">
                <span class="currency">$</span>
                <span class="amount">29.99</span>
                <span class="period">/month</span>
              </div>
            </div>
            <ul class="plan-features">
              <li>✅ Up to 6 accounts</li>
              <li>✅ 4K Ultra HD</li>
              <li>✅ Family controls</li>
              <li>✅ Offline download</li>
              <li>✅ Premium support</li>
            </ul>
            <button class="btn btn-outline plan-btn">
              <i>👨‍👩‍👧‍👦</i>
              Choose Family
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <div class="logo-icon">SR</div>
              <h3>ShortReel</h3>
            </div>
            <p class="footer-description">
              Premium short drama platform bringing you the best stories from around the world.
            </p>
            <div class="social-links">
              <a href="#" class="social-link">📱</a>
              <a href="#" class="social-link">📘</a>
              <a href="#" class="social-link">📷</a>
              <a href="#" class="social-link">🐦</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">New Releases</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Support</h4>
            <ul class="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Legal</h4>
            <ul class="footer-links">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">DMCA</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-info">
            <p>&copy; 2025 ShortReel. All rights reserved.</p>
            <p>Service Hours: Monday to Sunday, 24/7</p>
          </div>
          <div class="payment-methods">
            <span class="payment-method">💳</span>
            <span class="payment-method">📱</span>
            <span class="payment-method">💻</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDramaStore } from '@/stores/drama'

const dramaStore = useDramaStore()
const currentSlide = ref(0)

// 英雄轮播数据 - 使用真实的短剧内容和更合适的图片
const heroSlides = ref([
  {
    title: "Ex-Convict Nanny & Billionaire Single Dad",
    subtitle: "A heartwarming story of redemption and unexpected love",
    category: "Romance",
    episodes: 12,
    rating: "4.8",
    backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop&crop=center",
    posterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center"
  },
  {
    title: "The Divorced Wife is a Genius Surgeon",
    subtitle: "Professional success meets personal transformation",
    category: "Drama",
    episodes: 15,
    rating: "4.9",
    backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",
    posterImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=600&fit=crop&crop=center"
  },
  {
    title: "Where the Light Enters",
    subtitle: "Finding hope in the darkest moments",
    category: "Romance",
    episodes: 10,
    rating: "4.7",
    backgroundImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop&crop=center",
    posterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=center"
  }
])

// 特色短剧数据 - 使用真实的短剧内容和合适的图片
const featuredDramas = ref([
  {
    id: 1,
    title: "The Beast on Her Leash",
    description: "8 months pregnant, Alyssa is abandoned by her husband for his mistress and their lovechild Lilly",
    coverImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop&crop=center",
    category: "Strong Heroine",
    episodeCount: 18
  },
  {
    id: 2,
    title: "Queen Mom Rules",
    description: "At her parents' anniversary party, a successful CEO is dismissed as a low-class nobody",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
    category: "Strong Heroine",
    episodeCount: 15
  },
  {
    id: 3,
    title: "Rewritten Vows",
    description: "Aurora Quinn loved Oscar Russel, but he and his sister Luna betrayed her",
    coverImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=200&fit=crop&crop=center",
    category: "Revenge",
    episodeCount: 20
  },
  {
    id: 4,
    title: "The Genius and the Bad Boy",
    description: "When two hot brothers go after plus size Sophie, will she pick the true-hearted bad boy or the lying quarterback?",
    coverImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=200&fit=crop&crop=center",
    category: "Young Adult",
    episodeCount: 16
  }
])

// 分类数据 - 使用真实的短剧分类
const categories = ref([
  { id: 1, name: "Strong Heroine", icon: "👑", dramaCount: 28 },
  { id: 2, name: "Comeback Story", icon: "🚀", dramaCount: 22 },
  { id: 3, name: "Toxic Love", icon: "💔", dramaCount: 35 },
  { id: 4, name: "Sweet Romance", icon: "💕", dramaCount: 42 },
  { id: 5, name: "Hidden Identity", icon: "🎭", dramaCount: 19 },
  { id: 6, name: "Love at First Sight", icon: "💘", dramaCount: 31 }
])

// 热门短剧数据 - 使用真实的短剧内容和合适的图片
const trendingDramas = ref([
  {
    id: 5,
    title: "Secret Strangers in Love",
    description: "When the fate of a business marriage seems inevitable, Emma Watson takes on an internship",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&crop=center",
    category: "Hidden Identity",
    episodeCount: 14
  },
  {
    id: 6,
    title: "Audrey in Full Bloom",
    description: "Harvard MBA Audrey Lorenzo Bloom is on her way to shatter barriers as powerful conglomerate BloomCo's first female CEO",
    coverImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop&crop=center",
    category: "Hidden Identity",
    episodeCount: 22
  },
  {
    id: 7,
    title: "Fake Married to My Billionaire CEO",
    description: "After Sam's ex cheats on her and steals her money, Calladan Vandalay marries her at first sight",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
    category: "Love After Marriage",
    episodeCount: 18
  },
  {
    id: 8,
    title: "The Woman Starts The War",
    description: "When nurse Cindy gets caught in a deadly mafia shootout, ruthless crime boss Allan D'Angelo saves her life",
    coverImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center",
    category: "Dark Romance",
    episodeCount: 16
  }
])

// 轮播控制
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? heroSlides.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// 自动轮播
let autoPlayInterval
onMounted(() => {
  autoPlayInterval = setInterval(nextSlide, 5000)
  dramaStore.initializeDramaStore()
})

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
})
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #000;
  color: white;
}

/* 导航栏样式 - 现代化设计 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.navbar-brand .logo-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #ff4757, #ff3742);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 20px;
  color: white;
  box-shadow: 0 8px 25px rgba(255, 71, 87, 0.4);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.5px;
}

.logo {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff, #f1f2f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -1px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-link {
  color: #e2e8f0;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 16px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  padding: 8px 0;
}

.nav-link:hover {
  color: #ffffff;
  transform: translateY(-1px);
}

.nav-link.active {
  color: #ff4757;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ff4757;
  border-radius: 1px;
}

.special-section {
  background: rgba(255, 71, 87, 0.1);
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #ff4757;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid rgba(255, 71, 87, 0.2);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.action-btn {
  background: transparent;
  border: none;
  color: #ffffff;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 60px;
  height: auto;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.action-btn.profile-btn {
  background: transparent;
  border: none;
  color: #ffffff;
  box-shadow: none;
}

.action-btn.profile-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: none;
  box-shadow: none;
}

.language-selector {
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 6px;
}

.language-selector:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.language-selector i {
  font-size: 16px;
}

.action-btn .icon {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

.language-selector .icon {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

.language-selector .chevron {
  width: 12px;
  height: 12px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

/* 英雄轮播样式 - 现代化设计 */
.hero-section {
  position: relative;
  height: 85vh;
  min-height: 700px;
  overflow: hidden;
  margin-top: 80px;
}

.hero-carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-slide.active {
  opacity: 1;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.7) contrast(1.1);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 48px;
}

.hero-info {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  color: white;
  margin-bottom: 24px;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(0,0,0,0.8);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -2px;
}

.hero-subtitle {
  font-size: 22px;
  color: rgba(255,255,255,0.95);
  margin-bottom: 36px;
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0,0,0,0.8);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
}

.hero-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.hero-meta span {
  background: rgba(255,255,255,0.15);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 600;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.2);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 0.5px;
}

.hero-actions {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.btn {
  border: none;
  padding: 18px 36px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.3px;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #ff4757, #ff3742);
  color: white;
  box-shadow: 0 8px 25px rgba(255, 71, 87, 0.3);
  border: 1px solid rgba(255, 71, 87, 0.2);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #ff3742, #ff2f3a);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 71, 87, 0.4);
  border-color: rgba(255, 71, 87, 0.4);
}

.btn-outline {
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(20px);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
}

.btn-lg {
  padding: 20px 40px;
  font-size: 18px;
  border-radius: 14px;
}

.play-icon, .film-icon {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.btn i {
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
}

.hero-poster {
  position: relative;
  width: 320px;
  height: 480px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  border: 2px solid rgba(255,255,255,0.1);
}

.hero-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-poster:hover img {
  transform: scale(1.05);
}

.hero-poster-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.hero-poster:hover .hero-poster-overlay {
  opacity: 1;
}

.hero-poster-play {
  width: 64px;
  height: 64px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  padding: 24px;
  backdrop-filter: blur(10px);
  border: none;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

.hero-poster-play:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.05);
}

.hero-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 3;
}

.hero-nav-btn {
  position: absolute;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.hero-nav-btn:hover {
  background: rgba(255,255,255,0.2);
  border-color: rgba(255,255,255,0.4);
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
}

.hero-nav-btn.prev {
  left: 48px;
}

.hero-nav-btn.next {
  right: 48px;
}

.nav-icon {
  font-size: 24px;
  font-weight: bold;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
}

.hero-indicators {
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  z-index: 3;
}

.hero-indicator {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(255,255,255,0.2);
}

.hero-indicator:hover {
  background: rgba(255,255,255,0.5);
  border-color: rgba(255,255,255,0.4);
  transform: scale(1.2);
}

.hero-indicator.active {
  background: #ff4757;
  border-color: #ff4757;
  transform: scale(1.3);
  box-shadow: 0 0 20px rgba(255, 71, 87, 0.6);
}

/* 特色短剧样式 - 现代化设计 */
.featured-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
  margin-top: 100px;
}

.featured-section .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  color: white;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -1.5px;
  background: linear-gradient(135deg, #ffffff, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.drama-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
}

.drama-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
}

.drama-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  border-color: rgba(255, 71, 87, 0.3);
}

.drama-cover {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.drama-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.drama-card:hover .drama-cover img {
  transform: scale(1.08);
}

.drama-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.drama-card:hover .drama-overlay {
  opacity: 1;
}

.play-icon {
  width: 44px;
  height: 44px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  padding: 16px;
  backdrop-filter: blur(10px);
  border: none;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

.play-icon:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.05);
}

.drama-info {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.drama-title {
  font-size: 22px;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  line-height: 1.3;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.5px;
}

.drama-description {
  font-size: 15px;
  color: rgba(255,255,255,0.8);
  margin-bottom: 20px;
  line-height: 1.5;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  flex-grow: 1;
}

.drama-meta {
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  margin-top: auto;
}

.drama-meta span {
  background: rgba(255, 71, 87, 0.15);
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  border: 1px solid rgba(255, 71, 87, 0.2);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* 分类浏览样式 - 现代化设计 */
.categories-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
  margin-top: 100px;
}

.categories-section .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 32px;
  margin-top: 60px;
}

.category-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  border-color: rgba(255, 71, 87, 0.3);
  background: rgba(255, 71, 87, 0.05);
}

.category-icon {
  font-size: 48px;
  color: #ff4757;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 8px rgba(255, 71, 87, 0.3));
}

.category-name {
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.5px;
}

.category-count {
  font-size: 15px;
  color: rgba(255,255,255,0.7);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
}

/* 热门短剧样式 - 现代化设计 */
.trending-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
  margin-top: 100px;
}

.trending-section .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.trending-section .section-header {
  margin-bottom: 60px;
}

.trending-section .section-title {
  font-size: 42px;
  font-weight: 800;
  color: white;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -1.5px;
  background: linear-gradient(135deg, #ffffff, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.trending-section .drama-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
}

.trending-section .drama-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
}

.trending-section .drama-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  border-color: rgba(255, 71, 87, 0.3);
}

.trending-section .drama-cover {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.trending-section .drama-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.trending-section .drama-card:hover .drama-cover img {
  transform: scale(1.08);
}

.trending-section .drama-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.trending-section .drama-card:hover .drama-overlay {
  opacity: 1;
}

.trending-section .play-icon {
  width: 44px;
  height: 44px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  padding: 16px;
  backdrop-filter: blur(10px);
  border: none;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

.trending-section .play-icon:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.05);
}

.trending-section .drama-info {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.trending-section .drama-title {
  font-size: 22px;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  line-height: 1.3;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.5px;
}

.trending-section .drama-description {
  font-size: 15px;
  color: rgba(255,255,255,0.8);
  margin-bottom: 20px;
  line-height: 1.5;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  flex-grow: 1;
}

.trending-section .drama-meta {
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  margin-top: auto;
}

.trending-section .drama-meta span {
  background: rgba(255, 71, 87, 0.15);
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  border: 1px solid rgba(255, 71, 87, 0.2);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* 订阅计划样式 - 现代化设计 */
.subscription-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
  margin-top: 100px;
}

.subscription-section .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.subscription-section .section-header {
  text-align: center;
  margin-bottom: 80px;
}

.subscription-section .section-title {
  font-size: 42px;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -1.5px;
  background: linear-gradient(135deg, #ffffff, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subscription-section .section-subtitle {
  font-size: 20px;
  color: rgba(255,255,255,0.8);
  margin-bottom: 60px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
}

.plan-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  position: relative;
}

.plan-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(0,0,0,0.7);
  border-color: rgba(255, 71, 87, 0.3);
}

.plan-card.featured {
  transform: scale(1.05);
  box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  border: 2px solid #ff4757;
  background: rgba(255, 71, 87, 0.05);
}

.plan-card.featured:hover {
  transform: scale(1.05) translateY(-12px);
}

.plan-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #ff4757, #ff3742);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 800;
  box-shadow: 0 8px 20px rgba(255, 71, 87, 0.4);
  z-index: 1;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 0.5px;
  max-width: 120px; /* 防止徽章过宽 */
  white-space: nowrap; /* 防止文字换行 */
  overflow: hidden; /* 防止内容溢出 */
  text-overflow: ellipsis; /* 超出显示省略号 */
}

.plan-header {
  margin-bottom: 32px;
}

.plan-name {
  font-size: 32px;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -1px;
  word-wrap: break-word; /* 允许长单词换行 */
  hyphens: auto; /* 自动连字符 */
  max-width: 100%; /* 确保不超出容器 */
}

.plan-price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-size: 28px;
  font-weight: 800;
  color: #ff4757;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.currency {
  font-size: 20px;
}

.amount {
  font-size: 48px;
}

.period {
  font-size: 20px;
  color: rgba(255,255,255,0.7);
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
  text-align: left;
  width: 100%;
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  color: rgba(255,255,255,0.9);
  font-size: 16px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
}

.plan-features li i {
  font-size: 22px;
  color: #ff4757;
}

.plan-btn {
  width: 100%;
  padding: 18px 32px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid #ff4757;
  background: #ff4757;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.3px;
}

.plan-btn:hover {
  background: #ff3742;
  border-color: #ff3742;
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 71, 87, 0.4);
}

.plan-btn.featured {
  background: #ff3742;
  border-color: #ff3742;
}

.plan-btn.featured:hover {
  background: #ff2f3a;
  border-color: #ff2f3a;
}

/* 页脚样式 - 现代化设计 */
.footer {
  background: linear-gradient(180deg, #0a0a0a 0%, #000000 100%);
  padding: 100px 0 60px;
  color: rgba(255,255,255,0.8);
  font-size: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 60px;
  margin-bottom: 80px;
}

.footer-section h4 {
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: 32px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.5px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
}

.footer-logo .logo-icon {
  width: 50px;
  height: 50px;
  font-size: 24px;
  background: linear-gradient(135deg, #ff4757, #ff3742);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: white;
  box-shadow: 0 8px 25px rgba(255, 71, 87, 0.4);
}

.footer-logo h3 {
  font-size: 32px;
  font-weight: 800;
  color: white;
  background: linear-gradient(135deg, #ff4757, #ff3742);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -1px;
}

.footer-description {
  line-height: 1.8;
  margin-bottom: 36px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 24px;
}

.social-link {
  font-size: 28px;
  color: rgba(255,255,255,0.7);
  transition: all 0.3s ease;
  padding: 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  color: #ff4757;
  background: rgba(255, 71, 87, 0.1);
  border-color: rgba(255, 71, 87, 0.3);
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 18px;
}

.footer-links a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  padding: 8px 0;
  display: inline-block;
}

.footer-links a:hover {
  color: #ff4757;
  transform: translateX(4px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
  color: rgba(255,255,255,0.6);
}

.footer-info p {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
}

.payment-methods {
  display: flex;
  gap: 20px;
}

.payment-method {
  font-size: 32px;
  color: rgba(255,255,255,0.7);
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.payment-method:hover {
  color: #ff4757;
  background: rgba(255, 71, 87, 0.1);
  border-color: rgba(255, 71, 87, 0.3);
  transform: translateY(-2px);
}

/* 响应式设计 - 现代化适配 */
@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }
  
  .navbar-actions {
    gap: 12px;
  }
  
  .hero-section {
    height: 70vh;
    min-height: 600px;
  }
  
  .hero-content {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }
  
  .hero-info {
    max-width: 100%;
    margin-bottom: 40px;
  }
  
  .hero-title {
    font-size: 36px;
    letter-spacing: -1px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  
  .hero-poster {
    width: 280px;
    height: 420px;
  }
  
  .hero-nav-btn.prev {
    left: 24px;
  }
  
  .hero-nav-btn.next {
    right: 24px;
  }

  .featured-section,
  .categories-section,
  .trending-section,
  .subscription-section {
    padding: 80px 0;
  }

  .featured-section .section-header,
  .categories-section .section-header,
  .trending-section .section-header,
  .subscription-section .section-header {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
  }

  .featured-section .section-title,
  .categories-section .section-title,
  .trending-section .section-title,
  .subscription-section .section-title {
    font-size: 32px;
    letter-spacing: -1px;
  }

  .drama-grid,
  .categories-grid,
  .trending-section .drama-grid,
  .plans-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .drama-card,
  .category-card,
  .trending-section .drama-card,
  .plan-card {
    max-width: 100%;
  }

  .drama-cover,
  .trending-section .drama-cover {
    height: 200px;
  }

  .plan-card.featured {
    transform: scale(1);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .footer-logo {
    justify-content: center;
    margin-bottom: 24px;
  }

  .footer-description {
    margin-bottom: 24px;
  }

  .social-links {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 16px;
  }
  
  .hero-content {
    padding: 16px;
  }
  
  .hero-title {
    font-size: 28px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .hero-poster {
    width: 240px;
    height: 360px;
  }
  
  .hero-meta {
    flex-direction: column;
    align-items: center;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  /* 订阅计划移动端优化 */
  .plan-card {
    padding: 24px 20px;
    margin: 0 16px;
  }
  
  .plan-badge {
    top: 16px;
    right: 16px;
    padding: 8px 16px;
    font-size: 12px;
    max-width: 100px;
  }
  
  .plan-name {
    font-size: 24px;
    margin-bottom: 12px;
    padding-right: 80px; /* 为徽章留出空间 */
  }
  
  .plan-price {
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px;
  }
  
  .plan-price .amount {
    font-size: 36px;
  }
  
  .plan-features {
    margin-bottom: 32px;
  }
  
  .plan-features li {
    font-size: 14px;
    margin-bottom: 16px;
  }
  
  .plan-btn {
    padding: 16px 24px;
    font-size: 16px;
  }
  
  .subscription-section .container {
    padding: 0 16px;
  }
  
  .plans-grid {
    gap: 20px;
  }
  
  .plan-card {
    padding: 24px 20px;
  }
}
</style>
