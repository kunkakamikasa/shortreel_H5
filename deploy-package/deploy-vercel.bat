@echo off
chcp 65001 >nul
echo 🚀 ShortReel Vercel 快速部署脚本
echo ==================================

REM 检查是否安装了Vercel CLI
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 安装 Vercel CLI...
    npm install -g vercel
)

echo ✅ Vercel CLI 已安装
echo.

REM 检查是否已登录
vercel whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔐 请先登录 Vercel...
    vercel login
)

echo ✅ 已登录 Vercel
echo.

REM 部署项目
echo 🚀 开始部署到 Vercel...
vercel --prod

echo.
echo 🎉 部署完成！
echo 📱 你的项目现在可以在公网访问了！
echo.
echo 💡 提示：
echo - 部署后会自动生成一个域名
echo - 可以在 Vercel 控制台绑定自定义域名
echo - 支持自动 HTTPS 和全球 CDN
pause
