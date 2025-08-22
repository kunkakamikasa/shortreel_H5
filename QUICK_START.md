# 🚀 ShortFilm H5 快速开始指南

## ⚡ 5分钟快速启动

### 1. 环境准备
确保你的系统已安装：
- **Node.js 16+** - [下载地址](https://nodejs.org/)
- **npm** - 通常随Node.js一起安装

### 2. 克隆项目
```bash
git clone [your-repo-url]
cd shortfilm
```

### 3. 一键启动
```bash
# 使用启动脚本（推荐）
./start.sh

# 或者手动执行
npm install
npm run dev
```

### 4. 访问应用
打开浏览器访问：`http://localhost:3000`

## 🔧 环境配置

### 创建环境文件
```bash
cp env.example .env
```

### 配置关键参数
编辑 `.env` 文件：
```env
# API配置
VUE_APP_API_BASE_URL=http://localhost:3001/api

# PayPal配置（可选）
VUE_APP_PAYPAL_CLIENT_ID=your-paypal-client-id

# Stripe配置（可选）
VUE_APP_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

## 📱 功能演示

### 首页功能
- ✅ 英雄区域展示
- ✅ 特色短剧推荐
- ✅ 分类浏览
- ✅ 响应式设计

### 用户系统
- ✅ 用户注册
- ✅ 用户登录
- ✅ 社交登录（Google/Facebook）

### 支付系统
- ✅ 订阅计划选择
- ✅ PayPal支付
- ✅ Visa/信用卡支付
- ✅ 订单摘要

## 🎯 下一步操作

### 开发阶段
1. **测试基本功能** - 浏览各个页面
2. **配置支付网关** - 设置真实的PayPal和Stripe
3. **连接后端API** - 替换模拟数据
4. **添加内容** - 上传短剧视频和封面

### 生产部署
1. **构建项目** - `npm run build`
2. **配置服务器** - Nginx + SSL
3. **设置域名** - 配置DNS解析
4. **监控部署** - 性能监控和错误追踪

## 🐛 常见问题

### Q: 启动失败怎么办？
**A:** 检查Node.js版本，确保版本 >= 16

### Q: 页面显示异常？
**A:** 检查浏览器控制台错误，确保所有依赖已安装

### Q: 支付功能不工作？
**A:** 检查环境变量配置，确保PayPal和Stripe密钥正确

### Q: 如何添加新页面？
**A:** 在 `src/views/` 创建Vue组件，在 `src/router/index.js` 添加路由

## 📚 学习资源

- **Vue 3文档**: https://vuejs.org/
- **Vite文档**: https://vitejs.dev/
- **Pinia文档**: https://pinia.vuejs.org/
- **Vue Router**: https://router.vuejs.org/

## 🎉 恭喜！

你已经成功启动了ShortFilm H5平台！这是一个功能完整的短剧观看平台，包含了：

- ✨ 现代化的UI设计
- 🔐 完整的用户系统
- 💳 双通道支付集成
- 📱 完美的响应式设计
- 🚀 优秀的性能表现

现在你可以开始自定义内容、配置支付网关，或者添加新的功能模块了！

---

**需要帮助？** 查看 `PROJECT_SUMMARY.md` 获取详细的项目信息。
