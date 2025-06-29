# 食光机用户使用手册

## 项目介绍

「食光机用户使用手册」是一个基于React的现代化Web应用，专为展示"食光机"微信小程序的使用指南而设计。该项目采用现代前端技术栈构建，提供了直观、美观的界面，全面介绍食光机小程序的各项功能与操作方法。

### 项目背景

食光机是一款聚焦智能食材管理、饮食规划、营养跟踪可视化的小程序，通过拍照识别食材、临期预警与菜谱智能推荐系统，解决家庭食材浪费与饮食规划低效的痛点。本使用手册网站旨在帮助用户快速了解和掌握食光机的各项功能。

## 项目特点

- 💡 **响应式设计** - 完美适配移动端、平板与桌面环境，使用Tailwind CSS实现灵活布局
- 🎨 **精美UI设计** - 采用食材低饱和度色系，打造沉浸式阅读体验
- 📱 **交互式展示** - 通过丰富的截图和交互式组件，直观展示小程序功能
- 🚀 **高性能构建** - 基于Vite构建，支持热重载，加载迅速，交互流畅
- 🔧 **组件化架构** - 模块化设计，代码结构清晰，易于维护和扩展
- 📖 **阅读体验优化** - 配备阅读进度条、返回顶部按钮等用户体验优化功能
- 🎯 **SEO友好** - 语义化HTML结构，优化搜索引擎收录

## 技术栈

### 核心技术
- **React 19.0.0** - 最新版本的用户界面构建库
- **TypeScript 5.7.2** - 类型安全的JavaScript超集，提供更好的开发体验
- **Vite 6.2.0** - 现代前端构建工具，支持快速热重载
- **React Router DOM 7.4.1** - 客户端路由管理

### 样式与UI
- **Tailwind CSS 3.4.17** - 实用优先的CSS框架
- **PostCSS 8.5.3** - CSS后处理器
- **Autoprefixer 10.4.21** - 自动添加CSS前缀
- **Noto Sans SC & Noto Serif SC** - 中文字体支持

### 图标与动画
- **Heroicons 2.2.0** - 精美的SVG图标库
- **React Icons 5.5.0** - 丰富的图标组件库
- **Framer Motion 12.6.2** - 强大的动画效果库

### 开发工具
- **ESLint 9.21.0** - 代码质量检查工具
- **TypeScript ESLint** - TypeScript代码规范检查

## 主要功能模块

本项目全面展示了"食光机"微信小程序的功能与使用方法，包括：

### 🏠 首页功能展示
- 食材状态提醒和临期食材管理
- 今日推荐菜谱展示
- 食材库存概览统计
- 快捷功能入口介绍

### 🍅 食材库存管理
- 库存分类查看（全部、新鲜、临期、过期）
- 食材编辑、删除操作指南
- 库存统计信息展示

### 📷 智能食材识别
- 相机拍照识别功能介绍
- 相册选择识别方式
- 识别结果调整和手动添加
- 基于识别结果的菜谱推荐

### 🍲 餐饮计划管理
- 日期选择和计划查看
- 早中晚餐计划管理
- 批量操作功能（购物清单生成、计划分享）

### 📋 菜谱详情展示
- 菜谱基本信息展示
- 食材清单和库存匹配
- 烹饪工具、预处理、步骤指南
- 烹饪小贴士分享

### 📊 营养分析功能
- 时间范围选择（今日、本周、本月）
- 三大营养素比例分析
- 热量摄入趋势图表
- 营养素详情和来源分析

### 👤 个人中心设置
- 个人信息和饮食偏好管理
- 家庭成员管理
- 健康目标设置（热量、营养素目标）
- 系统设置（提醒时间、推送偏好）

### 🆘 临期救急站
- 临期食材智能提醒
- 创意菜谱推荐
- 减少浪费的实用建议

### ❓ 常见问题解答
- 8个常见使用问题及解答
- 交互式FAQ展开/收起功能
- 使用技巧和建议

## 项目结构

```
src/
├── assets/                 # 静态资源
│   └── images/            # 图片资源
│       └── logo-icon.svg  # 项目Logo
├── components/            # 组件目录
│   ├── layout/           # 布局组件
│   │   ├── Header.tsx    # 导航头部
│   │   ├── Footer.tsx    # 页脚
│   │   └── Layout.tsx    # 主布局
│   ├── sections/         # 页面各部分组件
│   │   ├── HeroSection.tsx              # 首页横幅
│   │   ├── IntroductionSection.tsx      # 简介部分
│   │   ├── HomeSection.tsx              # 首页功能展示
│   │   ├── ScanningSection.tsx          # 扫描识别功能
│   │   ├── MealPlanningSection.tsx      # 餐饮计划
│   │   ├── NutritionAnalysisSection.tsx # 营养分析
│   │   ├── ProfileSection.tsx           # 个人中心
│   │   ├── ExpiringFoodRescueSection.tsx # 临期救急站
│   │   ├── InventoryManagementSection.tsx # 库存管理
│   │   ├── RecipeDetailSection.tsx      # 菜谱详情
│   │   └── FAQSection.tsx              # 常见问题
│   └── ui/               # 通用UI组件
│       ├── SectionTitle.tsx         # 章节标题
│       ├── ScreenshotDisplay.tsx    # 截图展示
│       ├── FeatureCard.tsx          # 功能卡片
│       ├── BackToTop.tsx            # 返回顶部
│       └── ReadingProgressBar.tsx   # 阅读进度条
├── pages/                # 页面组件
│   └── HomePage.tsx      # 主页
├── data/                 # 数据文件（预留）
├── hooks/                # 自定义hooks（预留）
├── types/                # TypeScript类型定义（预留）
├── utils/                # 工具函数（预留）
├── App.tsx               # 应用根组件
├── main.tsx              # 应用入口
├── index.css             # 全局样式
├── reset.css             # CSS重置
├── tailwind.css          # Tailwind CSS（自动生成）
└── vite-env.d.ts         # Vite类型声明
```

## 设计系统

项目使用了以食材为灵感的低饱和度色彩系统，营造温馨自然的视觉体验：

### 主色系统
- **牛油果核心绿** `#8C9E7E` - 主色调，代表新鲜和健康
- **烘焙小麦米** `#D4A57C` - 辅助色，温暖舒适
- **成熟番茄红** `#B3423A` - 强调色，活力醒目

### 辅助色系统
- **砂岩白** `#FAF6F0` - 基底色，柔和背景
- **黑松露深咖** `#4A2F2B` - 文字主色，沉稳可读

### 字体系统
- **标题字体**: Noto Serif SC（思源宋体）- 优雅的中文衬线字体
- **正文字体**: Noto Sans SC（思源黑体）- 清晰的中文无衬线字体

## 安装与使用

### 环境要求
- Node.js 16.0 或更高版本
- npm 7.0 或更高版本

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

开发服务器将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
```

构建文件将输出到 `dist/` 目录

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 核心特性实现

### 响应式设计
- 使用Tailwind CSS的响应式工具类
- 移动优先的设计策略
- 灵活的网格布局系统

### 平滑滚动导航
- 自定义滚动到指定元素的函数
- 考虑固定导航栏高度的偏移计算
- 平滑滚动动画效果

### 阅读体验优化
- 实时阅读进度条显示
- 智能返回顶部按钮
- 优化的文字排版和间距

### 交互式FAQ系统
- 手风琴式展开/收起动画
- 平滑的高度过渡效果
- 智能的状态管理

### 截图展示组件
- 统一的截图展示样式
- 自适应的图片尺寸
- 优雅的边框和阴影效果

## 浏览器兼容性

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 部署说明

### 静态部署
项目构建后为纯静态文件，可部署到任何静态文件托管服务：

- **Vercel**: 推荐，支持自动部署
- **Netlify**: 简单易用的静态托管
- **GitHub Pages**: 免费的静态页面托管
- **阿里云OSS**: 国内访问速度快

### 部署步骤
1. 运行 `npm run build` 构建项目
2. 将 `dist/` 目录中的文件上传到服务器
3. 配置服务器支持单页应用路由（如需要）

## 开发指南

### 代码规范
- 使用ESLint进行代码质量检查
- 遵循React Hooks最佳实践
- TypeScript严格模式开发

### 组件开发
- 功能组件优先，使用React Hooks
- Props接口定义清晰的TypeScript类型
- 组件职责单一，易于测试和维护

### 样式开发
- 优先使用Tailwind CSS工具类
- 自定义样式放在对应的CSS文件中
- 保持设计系统的一致性

## 性能优化

- **代码分割**: 使用React.lazy进行组件懒加载
- **图片优化**: 使用WebP格式，添加loading="lazy"
- **CSS优化**: Tailwind CSS按需生成，减少包体积
- **构建优化**: Vite的快速构建和热重载

## 许可证

本项目采用 [MIT](LICENSE) 许可证开源。

## 贡献指南

欢迎提交Issue和Pull Request来改进项目：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

*食光机 - 让每份食材物尽其用，让健康饮食简单起来*

