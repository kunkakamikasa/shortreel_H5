#!/bin/bash

echo "🚀 Starting ShortFilm H5 Platform..."

# 检查Node.js是否安装
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "📖 Visit: https://nodejs.org/"
    exit 1
fi

# 检查npm是否安装
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# 安装依赖
echo "📦 Installing dependencies..."
npm install

# 启动开发服务器
echo "🌐 Starting development server..."
npm run dev
