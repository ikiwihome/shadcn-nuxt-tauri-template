# Shadcn-Vue + Nuxt 3 + Tauri 项目模板

这是一个集成了shadcn/ui组件库的Nuxt 3和Tauri桌面应用开发模板。

## 技术栈

- **前端框架**: [Nuxt 3](https://nuxt.com/) (Vue 3)
- **UI组件库**: [shadcn/ui](https://ui.shadcn.com/) (基于Tailwind CSS)
- **桌面运行时**: [Tauri](https://tauri.app/) (Rust)
- **包管理**: pnpm

## 项目结构

```
├── src/                  # 前端源代码
│   ├── app.vue           # 应用入口
│   ├── assets/           # 静态资源
│   │   └── css/          # 样式文件
│   │       └── tailwind.css
│   ├── components/       # Vue组件
│   │   ├── ui/          # shadcn/ui组件
│   │   │   ├── button/  # 按钮组件
│   │   │   ├── input/   # 输入框组件
│   │   │   ├── label/   # 标签组件
│   │   │   ├── radio-group/ # 单选组组件
│   │   │   ├── select/  # 选择器组件
│   │   │   ├── switch/  # 开关组件
│   │   │   ├── table/   # 表格组件
│   │   │   └── tooltip/ # 提示组件
│   ├── lib/             # 工具函数
│   ├── pages/           # 页面路由
│   ├── public/          # 公共资源
│   ├── server/          # Nuxt服务端代码
│   ├── stores/          # 状态管理
│   ├── types/           # 类型定义
│   └── utils/           # 工具函数
├── src-tauri/           # Tauri相关代码
│   ├── src/             # Rust源代码
│   ├── capabilities/    # Tauri能力配置
│   ├── gen/             # 生成代码
│   └── target/          # 构建输出
├── .gitignore
├── components.json      # shadcn组件配置
├── Dockerfile
├── LICENSE
├── nuxt.config.ts       # Nuxt配置
├── package.json         # 前端依赖
└── tsconfig.json        # TypeScript配置
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
2. 生产构建必须使用`pnpm run generate`而非`pnpm run build`
3. Tauri API已预装，可通过`@tauri-apps/api`调用
