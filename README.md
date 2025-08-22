# ShortFilm - Premium Short Drama H5 Platform

一个精美的、面向欧美用户的高端短剧H5平台，支持PayPal和Visa支付通道。

## 🌟 项目特色

- **现代化设计**: 采用深色主题，渐变色彩，符合欧美用户审美
- **响应式布局**: 完美适配各种设备尺寸
- **支付集成**: 支持PayPal和Visa信用卡支付
- **用户系统**: 完整的注册、登录、个人中心功能
- **内容管理**: 短剧分类、搜索、收藏、观看历史
- **订阅系统**: 灵活的订阅计划管理

## 🚀 技术栈

- **前端框架**: Vue 3 + Composition API
- **状态管理**: Pinia
- **路由管理**: Vue Router 4
- **构建工具**: Vite
- **样式处理**: SCSS + CSS Variables
- **图标库**: Lucide Vue Next
- **支付集成**: PayPal + Stripe (Visa)
- **HTTP客户端**: Axios

## 📁 项目结构

```
shortfilm/
├── src/
│   ├── components/          # 通用组件
│   ├── views/              # 页面组件
│   │   ├── Home.vue        # 首页
│   │   ├── Login.vue       # 登录页
│   │   ├── Subscription.vue # 订阅页
│   │   └── ...
│   ├── stores/             # 状态管理
│   │   ├── user.js         # 用户状态
│   │   ├── payment.js      # 支付状态
│   │   └── drama.js        # 短剧状态
│   ├── router/             # 路由配置
│   ├── api/                # API接口
│   ├── assets/             # 静态资源
│   └── utils/              # 工具函数
├── public/                 # 公共资源
├── package.json            # 依赖配置
├── vite.config.js          # Vite配置
└── README.md               # 项目说明
```

## 🛠️ 安装和运行

### 环境要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 🔧 配置说明

### 环境变量
创建 `.env` 文件并配置以下变量：

```env
# API配置
VUE_APP_API_BASE_URL=http://localhost:3001/api

# PayPal配置
VUE_APP_PAYPAL_CLIENT_ID=your-paypal-client-id

# Stripe配置
VUE_APP_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

### 支付配置
1. **PayPal集成**
   - 在PayPal开发者平台创建应用
   - 获取Client ID
   - 配置回调URL

2. **Visa/信用卡集成**
   - 使用Stripe作为支付网关
   - 配置Webhook端点
   - 设置支付成功/失败回调

## 📱 功能模块

### 1. 用户系统
- 用户注册/登录
- 社交登录 (Google, Facebook)
- 个人资料管理
- 密码重置

### 2. 内容浏览
- 首页推荐
- 分类浏览
- 搜索功能
- 热门排行

### 3. 播放功能
- 视频播放器
- 进度保存
- 自动播放下一集
- 画质选择

### 4. 订阅系统
- 多种订阅计划
- 支付方式选择
- 订阅管理
- 取消订阅

### 5. 个人中心
- 观看历史
- 收藏列表
- 订阅状态
- 支付记录

## 🎨 设计系统

### 色彩方案
- **主色调**: 蓝紫色渐变 (#667eea → #764ba2)
- **背景色**: 深色主题 (#0a0a0a, #1a1a1a)
- **文字色**: 白色系 (#ffffff, #a3a3a3)
- **强调色**: 绿色 (#4ade80)

### 字体系统
- **主字体**: Inter
- **字重**: 300, 400, 500, 600, 700
- **响应式**: 支持多种屏幕尺寸

### 组件库
- 按钮组件 (主要、次要、轮廓)
- 输入框组件
- 卡片组件
- 模态框组件
- 加载状态组件

## 🔒 安全特性

- **HTTPS**: 强制使用SSL加密
- **JWT认证**: 安全的用户认证机制
- **支付安全**: PCI DSS合规
- **数据加密**: 256位SSL加密
- **XSS防护**: 输入验证和转义

## 📊 性能优化

- **代码分割**: 按路由和功能模块分割
- **懒加载**: 图片和组件懒加载
- **缓存策略**: 合理的缓存策略
- **CDN支持**: 静态资源CDN加速
- **PWA支持**: 渐进式Web应用

## 🌐 国际化

- **多语言支持**: 英文为主要语言
- **时区处理**: 支持不同时区
- **货币格式**: 美元为主要货币
- **日期格式**: 欧美日期格式

## 📈 数据分析

- **用户行为**: 观看时长、点击率
- **内容分析**: 热门内容、用户偏好
- **支付分析**: 转化率、收入统计
- **性能监控**: 页面加载速度、错误率

## 🚀 部署说明

### 生产环境部署
1. 构建项目: `npm run build`
2. 上传dist目录到服务器
3. 配置Nginx反向代理
4. 设置SSL证书
5. 配置域名解析

### Docker部署
```dockerfile
FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📞 联系方式

- **项目维护者**: [Your Name]
- **邮箱**: [your.email@example.com]
- **项目地址**: [GitHub Repository URL]

## 🙏 致谢

感谢以下开源项目的支持：
- Vue.js
- Vite
- Pinia
- Lucide Icons
- 以及所有贡献者

---

**注意**: 这是一个演示项目，生产环境使用前请确保：
1. 配置真实的支付网关
2. 设置安全的API端点
3. 配置SSL证书
4. 进行充分的安全测试
5. 遵守相关法律法规
