#!/bin/bash

echo "🚀 ShortReel 项目部署脚本"
echo "================================"

# 检查Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装 Node.js"
    exit 1
fi

# 检查npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装，请先安装 npm"
    exit 1
fi

echo "✅ 环境检查通过"
echo ""

# 安装依赖
echo "📦 安装项目依赖..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

echo "✅ 依赖安装完成"
echo ""

# 构建项目
echo "🔨 构建生产版本..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 项目构建失败"
    exit 1
fi

echo "✅ 项目构建完成"
echo ""

# 检查构建文件
if [ ! -d "dist" ]; then
    echo "❌ dist 目录不存在，构建可能失败"
    exit 1
fi

echo "📁 构建文件检查："
ls -la dist/
echo ""

echo "🎉 部署准备完成！"
echo ""
echo "📋 下一步选择："
echo "1. Vercel部署（推荐新手）："
echo "   npm install -g vercel && vercel --prod"
echo ""
echo "2. Netlify部署："
echo "   npm install -g netlify-cli && netlify deploy --prod --dir=dist"
echo ""
echo "3. Docker部署："
echo "   docker build -t shortfilm . && docker run -d -p 80:80 shortfilm"
echo ""
echo "4. 查看详细部署说明："
echo "   cat DEPLOYMENT.md"
echo ""
echo "选择你喜欢的部署方式开始吧！🚀"
