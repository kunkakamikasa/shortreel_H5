# 🚀 ShortReel 项目部署说明

## 📋 项目简介
这是一个现代化的短剧H5平台，使用Vue3 + Vite构建，支持PayPal和Visa支付。

## 📦 文件说明
- `dist/` - 生产构建文件（核心文件）
- `vercel.json` - Vercel部署配置
- `netlify.toml` - Netlify部署配置
- `Dockerfile` - Docker容器配置
- `nginx.conf` - Nginx服务器配置
- `docker-compose.yml` - Docker编排配置

## 🌟 推荐部署方案

### **方案1：Vercel部署（最简单，推荐）**

#### **步骤：**
1. 访问 [vercel.com](https://vercel.com) 注册账号
2. 点击 "New Project"
3. 选择 "Import Git Repository" 或直接拖拽 `dist` 文件夹
4. 项目名称填写：`shortreel`
5. 点击 "Deploy"

#### **优势：**
- ✅ 完全免费
- ✅ 自动HTTPS
- ✅ 全球CDN
- ✅ 自动部署

#### **部署后访问：**
- 自动生成：`https://shortreel.vercel.app`
- 可绑定自定义域名

---

### **方案2：Netlify部署**

#### **步骤：**
1. 访问 [netlify.com](https://netlify.com) 注册账号
2. 点击 "New site from Git" 或拖拽 `dist` 文件夹
3. 项目名称：`shortreel`
4. 点击 "Deploy site"

#### **优势：**
- ✅ 免费计划
- ✅ 自动HTTPS
- ✅ 表单处理

---

### **方案3：云服务器部署**

#### **步骤：**
1. 购买云服务器（阿里云/腾讯云）
2. 上传所有文件到服务器
3. 安装Docker
4. 运行部署命令：

```bash
# 构建镜像
docker build -t shortreel .

# 运行容器
docker run -d -p 80:80 --name shortreel-app shortreel
```

---

## 🔧 部署后配置

### **1. 自定义域名**
- 在部署平台控制台添加域名
- 配置DNS解析指向部署平台

### **2. 环境变量（可选）**
如果需要连接真实API，配置以下环境变量：
```
VITE_API_BASE_URL=https://your-api-domain.com
VITE_PAYPATH_CLIENT_ID=your-paypal-client-id
VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-key
```

### **3. 性能优化**
- 启用Gzip压缩
- 配置CDN加速
- 图片懒加载

---

## 📱 移动端支持
- ✅ 响应式设计
- ✅ 触摸手势支持
- ✅ PWA支持
- ✅ 移动端优化

---

## 🚨 注意事项

1. **免费额度**：Vercel和Netlify都有免费计划
2. **域名备案**：国内服务器需要域名备案
3. **HTTPS**：部署平台自动提供HTTPS证书
4. **备份**：建议定期备份部署配置

---

## 📞 技术支持

### **部署平台支持：**
- Vercel：https://vercel.com/support
- Netlify：https://www.netlify.com/support/

### **推荐部署顺序：**
1. **新手**：Vercel（免费、简单）
2. **进阶**：Netlify（功能丰富）
3. **专业**：云服务器+Docker（完全控制）

---

## 🎯 快速部署命令

### **Vercel（推荐）：**
1. 拖拽 `dist` 文件夹到 [vercel.com](https://vercel.com)
2. 等待自动部署完成

### **Netlify：**
1. 拖拽 `dist` 文件夹到 [netlify.com](https://netlify.com)
2. 等待自动部署完成

选择Vercel部署是最简单的方案！🚀
