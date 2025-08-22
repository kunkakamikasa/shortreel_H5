<template>
  <div class="subscription-page">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <router-link to="/" class="logo-link">
            <h1 class="logo">ShortFilm</h1>
          </router-link>
        </div>
        
        <div class="navbar-actions">
          <router-link to="/" class="btn btn-outline btn-sm">Back to Home</router-link>
        </div>
      </div>
    </nav>

    <!-- 主要内容 -->
    <main class="main-content">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">Choose Your Plan</h1>
        <p class="page-subtitle">Unlock unlimited access to premium short dramas</p>
      </div>

      <!-- 订阅计划 -->
      <section class="plans-section">
        <div class="plans-grid">
          <div 
            v-for="plan in paymentStore.availablePlans" 
            :key="plan.id"
            class="plan-card"
            :class="{ 
              'plan-popular': plan.isPopular,
              'plan-selected': selectedPlan?.id === plan.id 
            }"
            @click="selectPlan(plan)"
          >
            <div class="plan-header">
              <div v-if="plan.isPopular" class="popular-badge">Most Popular</div>
              <h3 class="plan-name">{{ plan.name }}</h3>
              <div class="plan-price">
                <span class="currency">$</span>
                <span class="amount">{{ plan.price }}</span>
                <span class="period">/{{ plan.period }}</span>
              </div>
              <p class="plan-description">{{ plan.description }}</p>
            </div>
            
            <div class="plan-features">
              <div 
                v-for="feature in plan.features" 
                :key="feature"
                class="feature-item"
              >
                <Check class="feature-icon" />
                <span>{{ feature }}</span>
              </div>
            </div>
            
            <div class="plan-actions">
              <button 
                class="btn"
                :class="selectedPlan?.id === plan.id ? 'btn-primary' : 'btn-outline'"
                @click.stop="selectPlan(plan)"
              >
                {{ selectedPlan?.id === plan.id ? 'Selected' : 'Choose Plan' }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 支付方式选择 -->
      <section v-if="selectedPlan" class="payment-section">
        <div class="section-header">
          <h2 class="section-title">Payment Method</h2>
          <p class="section-subtitle">Select your preferred payment method</p>
        </div>
        
        <div class="payment-methods">
          <div class="payment-tabs">
            <button 
              class="payment-tab"
              :class="{ 'active': activePaymentMethod === 'card' }"
              @click="activePaymentMethod = 'card'"
            >
              <CreditCard class="tab-icon" />
              Credit/Debit Card
            </button>
            <button 
              class="payment-tab"
              :class="{ 'active': activePaymentMethod === 'paypal' }"
              @click="activePaymentMethod = 'paypal'"
            >
              <svg class="paypal-icon" viewBox="0 0 24 24">
                <path fill="#003087" d="M20.067 8.478c.492 0 .889.373.889.889 0 .491-.397.884-.889.884H18.8c-.491 0-.889-.393-.889-.884 0-.516.398-.889.889-.889h1.267z"/>
                <path fill="#009cde" d="M20.067 8.478c.492 0 .889.373.889.889 0 .491-.397.884-.889.884H18.8c-.491 0-.889-.393-.889-.884 0-.516.398-.889.889-.889h1.267z"/>
                <path fill="#012169" d="M20.067 8.478c.492 0 .889.373.889.889 0 .491-.397.884-.889.884H18.8c-.491 0-.889-.393-.889-.884 0-.516.398-.889.889-.889h1.267z"/>
              </svg>
              PayPal
            </button>
          </div>
          
          <!-- 信用卡支付表单 -->
          <div v-if="activePaymentMethod === 'card'" class="card-payment">
            <div class="card-form">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Card Number</label>
                  <div class="card-input-container">
                    <input
                      v-model="cardForm.number"
                      type="text"
                      class="input card-input"
                      placeholder="1234 5678 9012 3456"
                      maxlength="19"
                      @input="formatCardNumber"
                    />
                    <div class="card-icons">
                                              <svg class="card-icon" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="2" width="20" height="14" rx="2" fill="#1A1F71"/>
                          <path d="M9 8h6v8H9z" fill="#F7B600"/>
                          <text x="12" y="14" text-anchor="middle" fill="#1A1F71" font-size="8" font-weight="bold">VISA</text>
                        </svg>
                      <svg class="card-icon" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="14" rx="2" fill="#FF5F00"/>
                <circle cx="8" cy="9" r="3" fill="#EB001B"/>
                <circle cx="16" cy="9" r="3" fill="#F79E1B"/>
              </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Expiry Date</label>
                  <input
                    v-model="cardForm.expiry"
                    type="text"
                    class="input"
                    placeholder="MM/YY"
                    maxlength="5"
                    @input="formatExpiry"
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">CVV</label>
                  <input
                    v-model="cardForm.cvv"
                    type="text"
                    class="input"
                    placeholder="123"
                    maxlength="4"
                    @input="formatCVV"
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Cardholder Name</label>
                <input
                  v-model="cardForm.name"
                  type="text"
                  class="input"
                  placeholder="John Doe"
                />
              </div>
            </div>
          </div>
          
          <!-- PayPal支付 -->
          <div v-if="activePaymentMethod === 'paypal'" class="paypal-payment">
            <div class="paypal-info">
              <div class="paypal-logo">
                <svg viewBox="0 0 24 24" class="paypal-logo-svg">
                  <path fill="#003087" d="M20.067 8.478c.492 0 .889.373.889.889 0 .491-.397.884-.889.884H18.8c-.491 0-.889-.393-.889-.884 0-.516.398-.889.889-.889h1.267z"/>
                  <path fill="#009cde" d="M20.067 8.478c.492 0 .889.373.889.889 0 .491-.397.884-.889.884H18.8c-.491 0-.889-.393-.889-.884 0-.516.398-.889.889-.889h1.267z"/>
                  <path fill="#012169" d="M20.067 8.478c.492 0 .889.373.889.889 0 .491-.397.884-.889.884H18.8c-.491 0-.889-.393-.889-.884 0-.516.398-.889.889-.889h1.267z"/>
                </svg>
              </div>
              <p class="paypal-description">
                You will be redirected to PayPal to complete your payment securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 订单摘要 -->
      <section v-if="selectedPlan" class="order-summary">
        <div class="summary-header">
          <h3 class="summary-title">Order Summary</h3>
        </div>
        
        <div class="summary-content">
          <div class="summary-row">
            <span class="summary-label">Plan:</span>
            <span class="summary-value">{{ selectedPlan.name }}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">Duration:</span>
            <span class="summary-value">{{ selectedPlan.period }}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">Payment Method:</span>
            <span class="summary-value">{{ getPaymentMethodName() }}</span>
          </div>
          <div class="summary-row total">
            <span class="summary-label">Total:</span>
            <span class="summary-value">${{ selectedPlan.price }}</span>
          </div>
        </div>
        
        <div class="summary-actions">
          <button 
            class="btn btn-primary btn-lg subscribe-button"
            :disabled="!canSubscribe || paymentStore.isProcessing"
            @click="handleSubscribe"
          >
            <Loader v-if="paymentStore.isProcessing" class="icon-sm spin" />
            <span v-else>Subscribe Now</span>
          </button>
        </div>
      </section>

      <!-- 安全提示 -->
      <section class="security-section">
        <div class="security-content">
          <div class="security-icon">
            <Shield class="icon-lg" />
          </div>
          <div class="security-info">
            <h3 class="security-title">Secure Payment</h3>
            <p class="security-description">
              Your payment information is encrypted and secure. We use industry-standard 
              SSL encryption to protect your data.
            </p>
            <div class="security-features">
              <div class="security-feature">
                <Check class="feature-icon" />
                <span>256-bit SSL encryption</span>
              </div>
              <div class="security-feature">
                <Check class="feature-icon" />
                <span>PCI DSS compliant</span>
              </div>
              <div class="security-feature">
                <Check class="feature-icon" />
                <span>Secure payment processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 常见问题 -->
      <section class="faq-section">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>
        
        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="faq-item"
            :class="{ 'expanded': expandedFaq === index }"
          >
            <button 
              class="faq-question"
              @click="toggleFaq(index)"
            >
              <span>{{ faq.question }}</span>
              <ChevronDown class="faq-icon" />
            </button>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePaymentStore } from '../stores/payment'
import { useUserStore } from '../stores/user'
import { 
  Check, 
  CreditCard, 
  Shield, 
  ChevronDown, 
  Loader 
} from 'lucide-vue-next'

const router = useRouter()
const paymentStore = usePaymentStore()
const userStore = useUserStore()

// 状态
const selectedPlan = ref(null)
const activePaymentMethod = ref('card')
const expandedFaq = ref(0)

// 信用卡表单
const cardForm = ref({
  number: '',
  expiry: '',
  cvv: '',
  name: ''
})

// 常见问题
const faqs = ref([
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal for secure payments.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 7-day free trial for new subscribers. You can cancel anytime during the trial period.'
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes will take effect at your next billing cycle.'
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Yes, we use industry-standard SSL encryption and are PCI DSS compliant to ensure your payment information is secure.'
  }
])

// 计算属性
const canSubscribe = computed(() => {
  if (!selectedPlan.value) return false
  
  if (activePaymentMethod.value === 'card') {
    return cardForm.value.number && 
           cardForm.value.expiry && 
           cardForm.value.cvv && 
           cardForm.value.name
  }
  
  return true
})

// 方法
const selectPlan = (plan) => {
  selectedPlan.value = plan
}

const getPaymentMethodName = () => {
  return activePaymentMethod.value === 'card' ? 'Credit/Debit Card' : 'PayPal'
}

const formatCardNumber = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  value = value.replace(/(\d{4})/g, '$1 ').trim()
  cardForm.value.number = value
}

const formatExpiry = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  if (value.length >= 2) {
    value = value.slice(0, 2) + '/' + value.slice(2)
  }
  cardForm.value.expiry = value
}

const formatCVV = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  cardForm.value.cvv = value
}

const toggleFaq = (index) => {
  expandedFaq.value = expandedFaq.value === index ? null : index
}

const handleSubscribe = async () => {
  if (!canSubscribe.value) return
  
  try {
    let result
    
    if (activePaymentMethod.value === 'card') {
      // 处理信用卡支付
      result = await processCardPayment()
    } else {
      // 处理PayPal支付
      result = await processPayPalPayment()
    }
    
    if (result.success) {
      // 支付成功，创建订阅
      const subscriptionResult = await paymentStore.createSubscription(
        selectedPlan.value.id,
        result.paymentMethodId
      )
      
      if (subscriptionResult.success) {
        // 订阅创建成功，跳转到成功页面
        router.push('/subscription-success')
      } else {
        throw new Error(subscriptionResult.error)
      }
    } else {
      throw new Error(result.error)
    }
  } catch (error) {
    console.error('Subscription failed:', error)
    // 显示错误提示
    alert('Subscription failed: ' + error.message)
  }
}

const processCardPayment = async () => {
  // 这里应该集成实际的支付网关（如Stripe）
  // 现在返回模拟结果
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        paymentMethodId: 'card_' + Date.now()
      })
    }, 2000)
  })
}

const processPayPalPayment = async () => {
  // 这里应该集成PayPal支付
  // 现在返回模拟结果
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        paymentMethodId: 'paypal_' + Date.now()
      })
    }, 2000)
  })
}

onMounted(async () => {
  // 如果用户已登录且有订阅，跳转到首页
  if (userStore.isLoggedIn && paymentStore.hasActiveSubscription) {
    router.push('/')
    return
  }
  
  // 初始化支付配置
  await paymentStore.initializePayment()
})
</script>

<style lang="scss" scoped>
.subscription-page {
  min-height: 100vh;
  background: var(--bg-primary);
}

// 导航栏
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  
  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }
  
  .logo-link {
    .logo {
      font-size: var(--text-2xl);
      font-weight: var(--font-bold);
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}

// 主要内容
.main-content {
  padding-top: 100px;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-lg);
}

// 页面标题
.page-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  
  .page-title {
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    margin-bottom: var(--spacing-lg);
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .page-subtitle {
    font-size: var(--text-xl);
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }
}

// 订阅计划
.plans-section {
  margin-bottom: var(--spacing-2xl);
  
  .plans-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
  }
}

.plan-card {
  background: var(--bg-card);
  border: 2px solid transparent;
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
  }
  
  &.plan-popular {
    border-color: var(--primary-color);
    
    .popular-badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary-color);
      color: white;
      padding: var(--spacing-xs) var(--spacing-md);
      border-radius: var(--radius-full);
      font-size: var(--text-xs);
      font-weight: var(--font-medium);
    }
  }
  
  &.plan-selected {
    border-color: var(--primary-color);
    background: var(--bg-tertiary);
  }
  
  .plan-header {
    text-align: center;
    margin-bottom: var(--spacing-lg);
    
    .plan-name {
      font-size: var(--text-xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-md);
    }
    
    .plan-price {
      margin-bottom: var(--spacing-md);
      
      .currency {
        font-size: var(--text-lg);
        color: var(--text-secondary);
      }
      
      .amount {
        font-size: var(--text-4xl);
        font-weight: var(--font-bold);
        color: var(--primary-color);
      }
      
      .period {
        font-size: var(--text-lg);
        color: var(--text-secondary);
      }
    }
    
    .plan-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  }
  
  .plan-features {
    margin-bottom: var(--spacing-xl);
    
    .feature-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      margin-bottom: var(--spacing-md);
      
      .feature-icon {
        width: 20px;
        height: 20px;
        color: var(--success-color);
        flex-shrink: 0;
      }
      
      span {
        color: var(--text-secondary);
        font-size: var(--text-sm);
      }
    }
  }
  
  .plan-actions {
    .btn {
      width: 100%;
    }
  }
}

// 支付方式
.payment-section {
  margin-bottom: var(--spacing-2xl);
  
  .section-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
    
    .section-title {
      font-size: var(--text-2xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-sm);
    }
    
    .section-subtitle {
      color: var(--text-secondary);
    }
  }
}

.payment-methods {
  .payment-tabs {
    display: flex;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
    
    .payment-tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-sm);
      padding: var(--spacing-md);
      background: var(--bg-secondary);
      border: 2px solid transparent;
      border-radius: var(--radius-lg);
      color: var(--text-secondary);
      cursor: pointer;
      transition: all var(--transition-fast);
      
      &:hover {
        background: var(--bg-tertiary);
        color: var(--text-primary);
      }
      
      &.active {
        border-color: var(--primary-color);
        background: var(--bg-tertiary);
        color: var(--text-primary);
      }
      
      .tab-icon {
        width: 20px;
        height: 20px;
      }
      
      .paypal-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}

.card-payment {
  .card-form {
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
      
      .card-input-container {
        position: relative;
        
        .card-input {
          padding-right: 80px;
        }
        
        .card-icons {
          position: absolute;
          right: var(--spacing-sm);
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: var(--spacing-xs);
          
          .card-icon {
            width: 30px;
            height: 20px;
            object-fit: contain;
          }
        }
      }
    }
  }
}

.paypal-payment {
  .paypal-info {
    text-align: center;
    padding: var(--spacing-xl);
    
    .paypal-logo {
      margin-bottom: var(--spacing-lg);
      
      .paypal-logo-svg {
        width: 80px;
        height: 80px;
      }
    }
    
    .paypal-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  }
}

// 订单摘要
.order-summary {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
  
  .summary-header {
    margin-bottom: var(--spacing-lg);
    
    .summary-title {
      font-size: var(--text-xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
    }
  }
  
  .summary-content {
    margin-bottom: var(--spacing-xl);
    
    .summary-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--spacing-sm) 0;
      border-bottom: 1px solid var(--border-color);
      
      &:last-child {
        border-bottom: none;
      }
      
      &.total {
        font-weight: var(--font-bold);
        font-size: var(--text-lg);
        color: var(--primary-color);
        border-top: 2px solid var(--border-color);
        padding-top: var(--spacing-md);
      }
      
      .summary-label {
        color: var(--text-secondary);
      }
      
      .summary-value {
        color: var(--text-primary);
      }
    }
  }
  
  .summary-actions {
    .subscribe-button {
      width: 100%;
      
      .spin {
        animation: spin 1s linear infinite;
      }
    }
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

// 安全提示
.security-section {
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
  
  .security-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-xl);
    
    .security-icon {
      .icon-lg {
        width: 60px;
        height: 60px;
        color: var(--success-color);
      }
    }
    
    .security-info {
      flex: 1;
      
      .security-title {
        font-size: var(--text-xl);
        font-weight: var(--font-bold);
        color: var(--text-primary);
        margin-bottom: var(--spacing-sm);
      }
      
      .security-description {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: var(--spacing-lg);
      }
      
      .security-features {
        .security-feature {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
          
          .feature-icon {
            width: 16px;
            height: 16px;
            color: var(--success-color);
          }
          
          span {
            color: var(--text-secondary);
            font-size: var(--text-sm);
          }
        }
      }
    }
  }
}

// 常见问题
.faq-section {
  .section-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
    
    .section-title {
      font-size: var(--text-2xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
    }
  }
  
  .faq-list {
    .faq-item {
      background: var(--bg-card);
      border-radius: var(--radius-lg);
      margin-bottom: var(--spacing-md);
      overflow: hidden;
      
      .faq-question {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-lg);
        background: none;
        border: none;
        color: var(--text-primary);
        font-size: var(--text-base);
        font-weight: var(--font-medium);
        cursor: pointer;
        transition: background-color var(--transition-fast);
        
        &:hover {
          background: var(--bg-secondary);
        }
        
        .faq-icon {
          width: 20px;
          height: 20px;
          color: var(--text-secondary);
          transition: transform var(--transition-fast);
        }
      }
      
      .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height var(--transition-normal);
        
        p {
          padding: 0 var(--spacing-lg) var(--spacing-lg);
          color: var(--text-secondary);
          line-height: 1.6;
        }
      }
      
      &.expanded {
        .faq-question .faq-icon {
          transform: rotate(180deg);
        }
        
        .faq-answer {
          max-height: 200px;
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .main-content {
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
  }
  
  .page-header .page-title {
    font-size: var(--text-3xl);
  }
  
  .plans-grid {
    grid-template-columns: 1fr;
  }
  
  .card-form .form-row {
    grid-template-columns: 1fr;
  }
  
  .payment-tabs {
    flex-direction: column;
  }
  
  .security-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .page-header .page-title {
    font-size: var(--text-2xl);
  }
  
  .plan-card {
    padding: var(--spacing-lg);
  }
  
  .order-summary {
    padding: var(--spacing-lg);
  }
}
</style>
