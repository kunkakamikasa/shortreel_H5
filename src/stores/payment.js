import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api } from '../api'

export const usePaymentStore = defineStore('payment', () => {
  // 状态
  const paymentMethods = ref([])
  const subscriptionPlans = ref([])
  const currentPlan = ref(null)
  const paymentHistory = ref([])
  const isProcessing = ref(false)

  // 计算属性
  const hasActiveSubscription = computed(() => {
    return currentPlan.value && currentPlan.value.status === 'active'
  })

  const availablePlans = computed(() => {
    return subscriptionPlans.value.filter(plan => plan.isActive)
  })

  // 动作
  const initializePayment = async () => {
    try {
      await Promise.all([
        fetchSubscriptionPlans(),
        fetchPaymentMethods(),
        fetchPaymentHistory()
      ])
    } catch (error) {
      console.error('Failed to initialize payment:', error)
    }
  }

  const fetchSubscriptionPlans = async () => {
    try {
      // 模拟订阅计划数据
      subscriptionPlans.value = [
        { id: 1, name: 'Basic', price: 4.99, period: 'month', features: ['HD Quality', 'Ad-free', 'Mobile Access'] },
        { id: 2, name: 'Premium', price: 9.99, period: 'month', features: ['4K Quality', 'Ad-free', 'Mobile Access', 'Offline Downloads', 'Multiple Devices'] },
        { id: 3, name: 'Family', price: 14.99, period: 'month', features: ['4K Quality', 'Ad-free', 'Mobile Access', 'Offline Downloads', 'Multiple Devices', 'Up to 6 Profiles'] }
      ]
    } catch (error) {
      console.error('Failed to fetch subscription plans:', error)
    }
  }

  const fetchPaymentMethods = async () => {
    try {
      const response = await api.get('/payment/methods')
      paymentMethods.value = response.data
    } catch (error) {
      console.error('Failed to fetch payment methods:', error)
    }
  }

  const fetchPaymentHistory = async () => {
    try {
      const response = await api.get('/payment/history')
      paymentHistory.value = response.data
    } catch (error) {
      console.error('Failed to fetch payment history:', error)
    }
  }

  const createSubscription = async (planId, paymentMethodId) => {
    isProcessing.value = true
    try {
      const response = await api.post('/subscription/create', {
        planId,
        paymentMethodId
      })
      
      currentPlan.value = response.data
      
      // 刷新支付历史
      await fetchPaymentHistory()
      
      return { success: true, subscription: response.data }
    } catch (error) {
      console.error('Failed to create subscription:', error)
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to create subscription' 
      }
    } finally {
      isProcessing.value = false
    }
  }

  const cancelSubscription = async () => {
    if (!currentPlan.value) return { success: false, error: 'No active subscription' }
    
    isProcessing.value = true
    try {
      await api.post('/subscription/cancel')
      
      currentPlan.value.status = 'cancelled'
      
      return { success: true }
    } catch (error) {
      console.error('Failed to cancel subscription:', error)
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to cancel subscription' 
      }
    } finally {
      isProcessing.value = false
    }
  }

  const updatePaymentMethod = async (paymentMethodId) => {
    try {
      const response = await api.put('/payment/methods/default', {
        paymentMethodId
      })
      
      // 更新支付方法列表
      await fetchPaymentMethods()
      
      return { success: true, paymentMethod: response.data }
    } catch (error) {
      console.error('Failed to update payment method:', error)
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to update payment method' 
      }
    }
  }

  const addPaymentMethod = async (paymentData) => {
    try {
      const response = await api.post('/payment/methods', paymentData)
      
      // 刷新支付方法列表
      await fetchPaymentMethods()
      
      return { success: true, paymentMethod: response.data }
    } catch (error) {
      console.error('Failed to add payment method:', error)
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to add payment method' 
      }
    }
  }

  const removePaymentMethod = async (paymentMethodId) => {
    try {
      await api.delete(`/payment/methods/${paymentMethodId}`)
      
      // 刷新支付方法列表
      await fetchPaymentMethods()
      
      return { success: true }
    } catch (error) {
      console.error('Failed to remove payment method:', error)
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to remove payment method' 
      }
    }
  }

  const processPayment = async (amount, paymentMethodId, description) => {
    isProcessing.value = true
    try {
      const response = await api.post('/payment/process', {
        amount,
        paymentMethodId,
        description
      })
      
      // 刷新支付历史
      await fetchPaymentHistory()
      
      return { success: true, payment: response.data }
    } catch (error) {
      console.error('Failed to process payment:', error)
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to process payment' 
      }
    } finally {
      isProcessing.value = false
    }
  }

  const getPayPalConfig = () => {
    return {
      clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || 'your-paypal-client-id',
      currency: 'USD',
      intent: 'subscription'
    }
  }

  const getStripeConfig = () => {
    return {
      publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'your-stripe-publishable-key',
      currency: 'usd'
    }
  }

  return {
    // 状态
    paymentMethods,
    subscriptionPlans,
    currentPlan,
    paymentHistory,
    isProcessing,
    
    // 计算属性
    hasActiveSubscription,
    availablePlans,
    
    // 动作
    initializePayment,
    fetchSubscriptionPlans,
    fetchPaymentMethods,
    fetchPaymentHistory,
    createSubscription,
    cancelSubscription,
    updatePaymentMethod,
    addPaymentMethod,
    removePaymentMethod,
    processPayment,
    getPayPalConfig,
    getStripeConfig
  }
})
