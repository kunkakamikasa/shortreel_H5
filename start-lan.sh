#!/bin/bash

echo "🚀 启动局域网开发服务器..."
echo ""

# 获取本机IP地址
LOCAL_IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1)

if [ -z "$LOCAL_IP" ]; then
    LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "192.168.1.100")
fi

echo "📍 本机IP地址: $LOCAL_IP"
echo "🌐 局域网访问地址: http://$LOCAL_IP:3000"
echo ""

# 启动开发服务器
npm run dev -- --host 0.0.0.0 --port 3000
