# Shadcn-Vue + Nuxt 3 + Tauri 项目模板

这是一个集成了shadcn/ui组件库的Nuxt 3和Tauri桌面应用开发模板。

## 技术栈

- **前端框架**: [Nuxt 3](https://nuxt.com/) (Vue 3)
- **UI组件库**: [shadcn/ui](https://ui.shadcn.com/) (基于Tailwind CSS)
- **桌面运行时**: [Tauri](https://tauri.app/) (Rust)
- **构建工具**: Vite
- **包管理**: pnpm

## 项目结构

```
├── components/            # Vue组件
│   └── ui/               # shadcn/ui组件
├── lib/                  # 工具函数
├── public/               # 静态资源
├── server/               # Nuxt服务端代码
├── src-tauri/            # Tauri相关代码
│   ├── src/              # Rust源代码
│   └── tauri.conf.json   # Tauri配置
├── app.vue               # 应用入口
├── nuxt.config.ts        # Nuxt配置
└── package.json          # 前端依赖
```

## 开发环境准备

1. 安装Node.js (>=18.x)
2. 安装Rust工具链
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```
3. 安装pnpm
   ```bash
   npm install -g pnpm
   ```

## 本地开发

1. 安装依赖
   ```bash
   pnpm install
   ```
2. 启动开发服务器
   ```bash
   pnpm run dev
   ```

## 生产构建

1. 构建前端资源
   ```bash
   pnpm run generate
   ```
2. 构建Web页面
   ```bash
   pnpm run build
   ```
3. 预览Web页面
   ```bash
   pnpm run preview
   ```
4. 构建桌面应用
   ```bash
   pnpm run tauri build
   ```
   构建结果位于 `src-tauri/target/release/`

## 使用shadcn/ui组件

本项目已预置Button组件示例，位于`components/ui/button`。

添加新组件：
```bash
pnpm dlx shadcn-vue@latest add 组件名
```

## 注意事项

1. Nuxt配置中必须保持`ssr: false`
2. 生产构建必须使用`npm run generate`而非`npm run build`
3. Tauri API已预装，可通过`@tauri-apps/api`调用
