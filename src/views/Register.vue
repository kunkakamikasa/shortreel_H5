<template>
  <div class="register-page">
    <div class="register-container">
      <!-- 背景装饰 -->
      <div class="background-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
      
      <!-- 注册表单 -->
      <div class="register-form-container">
        <div class="form-header">
          <router-link to="/" class="logo-link">
            <h1 class="logo">ShortFilm</h1>
          </router-link>
          <h2 class="welcome-title">Create Your Account</h2>
          <p class="welcome-subtitle">Join thousands of users enjoying premium short dramas</p>
        </div>
        
        <form class="register-form" @submit.prevent="handleRegister">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName" class="form-label">First Name</label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                class="input"
                :class="{ 'input-error': errors.firstName }"
                placeholder="Enter your first name"
                required
              />
              <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
            </div>
            
            <div class="form-group">
              <label for="lastName" class="form-label">Last Name</label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                class="input"
                :class="{ 'input-error': errors.lastName }"
                placeholder="Enter your last name"
                required
              />
              <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
            </div>
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="input"
              :class="{ 'input-error': errors.email }"
              placeholder="Enter your email"
              required
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
          
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <div class="password-input-container">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                class="input"
                :class="{ 'input-error': errors.password }"
                placeholder="Create a strong password"
                required
              />
              <button
                type="button"
                class="password-toggle"
                @click="togglePassword"
              >
                <Eye v-if="!showPassword" class="icon-sm" />
                <EyeOff v-else class="icon-sm" />
              </button>
            </div>
            <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
          </div>
          
          <div class="form-group">
            <label for="confirmPassword" class="form-label">Confirm Password</label>
            <div class="password-input-container">
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                class="input"
                :class="{ 'input-error': errors.confirmPassword }"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                class="password-toggle"
                @click="toggleConfirmPassword"
              >
                <Eye v-if="!showConfirmPassword" class="icon-sm" />
                <EyeOff v-else class="icon-sm" />
              </button>
            </div>
            <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
          </div>
          
          <div class="form-options">
            <label class="checkbox-container">
              <input
                v-model="form.agreeTerms"
                type="checkbox"
                class="checkbox"
                required
              />
              <span class="checkmark"></span>
              I agree to the <router-link to="/terms" class="terms-link">Terms of Service</router-link> and <router-link to="/privacy" class="terms-link">Privacy Policy</router-link>
            </label>
            
            <label class="checkbox-container">
              <input
                v-model="form.newsletter"
                type="checkbox"
                class="checkbox"
              />
              <span class="checkmark"></span>
              Subscribe to our newsletter for updates and exclusive content
            </label>
          </div>
          
          <button
            type="submit"
            class="btn btn-primary btn-lg register-button"
            :disabled="isLoading"
          >
            <Loader v-if="isLoading" class="icon-sm spin" />
            <span v-else>Create Account</span>
          </button>
          
          <div v-if="registerError" class="error-alert">
            <AlertCircle class="icon-sm" />
            {{ registerError }}
          </div>
        </form>
        
        <div class="divider">
          <span>or</span>
        </div>
        
        <div class="social-register">
          <button class="btn btn-outline social-btn" @click="handleGoogleRegister">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
          
          <button class="btn btn-outline social-btn" @click="handleFacebookRegister">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>
        </div>
        
        <div class="login-prompt">
          <p>Already have an account?</p>
          <router-link to="/login" class="login-link">Sign in here</router-link>
        </div>
      </div>
      
      <!-- 右侧装饰区域 -->
      <div class="register-visual">
        <div class="visual-content">
          <div class="drama-preview">
            <div class="preview-image">
              <Play class="play-icon" />
            </div>
            <div class="preview-info">
              <h3>Join Our Community</h3>
              <p>Connect with fellow drama enthusiasts and discover amazing content</p>
            </div>
          </div>
          
          <div class="features-list">
            <div class="feature-item">
              <Check class="feature-icon" />
              <span>Free 7-day trial</span>
            </div>
            <div class="feature-item">
              <Check class="feature-icon" />
              <span>Cancel anytime</span>
            </div>
            <div class="feature-item">
              <Check class="feature-icon" />
              <span>HD quality content</span>
            </div>
            <div class="feature-item">
              <Check class="feature-icon" />
              <span>Multiple devices</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { 
  Eye, 
  EyeOff, 
  Loader, 
  AlertCircle, 
  Check, 
  Play 
} from 'lucide-vue-next'

const router = useRouter()
const userStore = useUserStore()

// 表单状态
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false,
  newsletter: false
})

// 错误状态
const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

// UI状态
const isLoading = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const registerError = ref('')

// 处理注册
const handleRegister = async () => {
  // 重置错误
  resetErrors()
  
  // 验证表单
  if (!validateForm()) {
    return
  }
  
  isLoading.value = true
  registerError.value = ''
  
  try {
    const result = await userStore.register({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password
    })
    
    if (result.success) {
      // 注册成功，跳转到首页
      router.push('/')
    } else {
      registerError.value = result.error
    }
  } catch (error) {
    registerError.value = 'An unexpected error occurred. Please try again.'
  } finally {
    isLoading.value = false
  }
}

// 表单验证
const validateForm = () => {
  let isValid = true
  
  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required'
    isValid = false
  }
  
  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required'
    isValid = false
  }
  
  if (!form.email) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!isValidEmail(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }
  
  if (!form.password) {
    errors.password = 'Password is required'
    isValid = false
  } else if (form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
    isValid = false
  }
  
  if (!form.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password'
    isValid = false
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
    isValid = false
  }
  
  if (!form.agreeTerms) {
    registerError.value = 'You must agree to the Terms of Service and Privacy Policy'
    isValid = false
  }
  
  return isValid
}

// 重置错误
const resetErrors = () => {
  errors.firstName = ''
  errors.lastName = ''
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''
  registerError.value = ''
}

// 邮箱验证
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// 切换密码显示
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

// 社交注册处理
const handleGoogleRegister = () => {
  // 实现Google注册逻辑
  console.log('Google register clicked')
}

const handleFacebookRegister = () => {
  // 实现Facebook注册逻辑
  console.log('Facebook register clicked')
}
</script>

<style lang="scss" scoped>
.register-page {
  min-height: 100vh;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  position: relative;
  overflow: hidden;
}

.register-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  position: relative;
  z-index: 1;
}

// 背景装饰
.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  
  .decoration-circle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    opacity: 0.1;
    
    &.circle-1 {
      width: 200px;
      height: 200px;
      top: -100px;
      right: -100px;
    }
    
    &.circle-2 {
      width: 150px;
      height: 150px;
      bottom: -75px;
      left: -75px;
    }
    
    &.circle-3 {
      width: 100px;
      height: 100px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

// 注册表单容器
.register-form-container {
  flex: 1;
  padding: var(--spacing-2xl);
  max-width: 500px;
}

.form-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  
  .logo-link {
    display: inline-block;
    margin-bottom: var(--spacing-lg);
    
    .logo {
      font-size: var(--text-3xl);
      font-weight: var(--font-bold);
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  
  .welcome-title {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
  }
  
  .welcome-subtitle {
    color: var(--text-secondary);
    font-size: var(--text-base);
  }
}

// 注册表单
.register-form {
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
  }
  
  .form-group {
    margin-bottom: var(--spacing-lg);
    
    .form-label {
      display: block;
      font-weight: var(--font-medium);
      color: var(--text-primary);
      margin-bottom: var(--spacing-sm);
    }
    
    .password-input-container {
      position: relative;
      
      .password-toggle {
        position: absolute;
        right: var(--spacing-sm);
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        padding: var(--spacing-xs);
        border-radius: var(--radius-sm);
        transition: all var(--transition-fast);
        
        &:hover {
          color: var(--text-primary);
          background: var(--bg-secondary);
        }
      }
    }
    
    .error-message {
      color: var(--error-color);
      font-size: var(--text-sm);
      margin-top: var(--spacing-xs);
      display: block;
    }
  }
  
  .form-options {
    margin-bottom: var(--spacing-lg);
    
    .checkbox-container {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      font-size: var(--text-sm);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-md);
      
      .checkbox {
        margin-right: var(--spacing-sm);
        margin-top: 2px;
        width: 16px;
        height: 16px;
        accent-color: var(--primary-color);
      }
      
      .terms-link {
        color: var(--primary-color);
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  
  .register-button {
    width: 100%;
    margin-bottom: var(--spacing-lg);
    
    .spin {
      animation: spin 1s linear infinite;
    }
  }
  
  .error-alert {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    background: rgba(248, 113, 113, 0.1);
    border: 1px solid rgba(248, 113, 113, 0.3);
    border-radius: var(--radius-md);
    color: var(--error-color);
    font-size: var(--text-sm);
    margin-bottom: var(--spacing-lg);
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

// 分割线
.divider {
  text-align: center;
  margin: var(--spacing-xl) 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--border-color);
  }
  
  span {
    background: var(--bg-card);
    padding: 0 var(--spacing-md);
    color: var(--text-muted);
    font-size: var(--text-sm);
  }
}

// 社交注册
.social-register {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  
  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    width: 100%;
    
    .social-icon {
      width: 20px;
      height: 20px;
    }
  }
}

// 登录提示
.login-prompt {
  text-align: center;
  
  p {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
  }
  
  .login-link {
    color: var(--primary-color);
    font-weight: var(--font-medium);
    text-decoration: none;
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--primary-dark);
    }
  }
}

// 右侧视觉区域
.register-visual {
  flex: 1;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: var(--spacing-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  .visual-content {
    text-align: center;
    max-width: 400px;
    
    .drama-preview {
      margin-bottom: var(--spacing-2xl);
      
      .preview-image {
        width: 200px;
        height: 150px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: var(--radius-lg);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto var(--spacing-lg);
        backdrop-filter: blur(10px);
        
        .play-icon {
          width: 50px;
          height: 50px;
          color: white;
        }
      }
      
      .preview-info {
        h3 {
          font-size: var(--text-xl);
          font-weight: var(--font-bold);
          margin-bottom: var(--spacing-sm);
        }
        
        p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }
      }
    }
    
    .features-list {
      .feature-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-md);
        text-align: left;
        
        .feature-icon {
          width: 20px;
          height: 20px;
          color: rgba(255, 255, 255, 0.9);
          flex-shrink: 0;
        }
        
        span {
          color: rgba(255, 255, 255, 0.9);
          font-size: var(--text-sm);
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: 1024px) {
  .register-container {
    flex-direction: column;
  }
  
  .register-visual {
    display: none;
  }
  
  .register-form-container {
    max-width: none;
  }
}

@media (max-width: 768px) {
  .register-page {
    padding: var(--spacing-md);
  }
  
  .register-form-container {
    padding: var(--spacing-xl);
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .register-form-container {
    padding: var(--spacing-lg);
  }
  
  .form-header .welcome-title {
    font-size: var(--text-xl);
  }
}
</style>
