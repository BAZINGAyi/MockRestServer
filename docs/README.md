## 项目介绍

### 项目背景
在企业软件开发过程中，团队通常需要与各种外部系统、客户 API 或第三方服务进行集成。这些外部接口往往涉及到复杂的对接流程，不仅依赖外部团队的进度，还可能面临接口未完成或频繁更改的问题。这种外部依赖会导致开发和测试阶段的延迟，阻碍项目按时交付。

为了克服这些挑战，本工具应运而生，专门用于 模拟 REST API。它提供了一种灵活的方式，让开发者能够在没有实际后端服务或外部系统的情况下，模拟 API 交互。这对于企业软件开发尤为重要，尤其在以下场景中：

1. 客户或第三方 API 尚未准备好：在开发过程中，客户的 API 可能尚在构建中，但前端或其他模块的开发仍需继续进行。通过模拟 API，团队可以在不依赖客户接口的情况下，独立完成开发。

2. 第三方系统频繁变更：与外部服务的集成时，第三方 API 可能处于频繁变更或不稳定的状态。本工具可以提前模拟这些 API，确保项目进度不被外部因素影响。

3. 并行开发与测试：当前后端或不同模块团队需要并行开发时，模拟 API 工具可以提供虚拟接口，供前端或其他服务调用，避免由于后端接口未准备好而导致的进度滞后。

### 项目功能
1. **配置模拟 API 和属性**：
   - 用户可以通过前端页面配置需要模拟的 API，包括 API 的名称、描述、URL、请求方法等。
   - 用户可以为每个 API 配置响应属性，包括响应状态码、响应内容等。

2. **提供模拟 API 服务**：
   - 项目启动后，用户配置的 API 会被注册到 Express 服务器中，用户可以通过相应的 URL 访问这些模拟 API。
   - 当用户访问配置的 API 时，服务器会返回预先配置的响应内容。

### 项目结构

```
.
├── .gitignore                              # git 忽略文件
├── app.js                                  # express 项目入口
├── config/
│   └── database.js                         # 数据库配置文件，初始化 Sequelize 连接
├── controllers/
│   ├── apiController.js                    # 处理 API 配置相关的请求，如创建、读取、更新和删除 API
│   └── apiPropertyController.js            # 处理 API 属性配置相关的请求，如创建、读取、更新和删除 API 属性
├── docs/

│   ├── init_db.sql                         # 初始化数据库的 SQL 脚本
├── frontend/
│   ├── babel.config.js                     # Babel 配置文件，用于前端代码的编译
│   ├── jsconfig.json                       # JavaScript 配置文件，用于前端项目的路径和编译选项
│   ├── package.json                        # 前端项目的依赖和脚本配置文件
│   ├── public/                             # 前端项目的公共资源目录
│   ├── README.md                           # 前端项目的说明文档
│   ├── src/                                # 前端项目的源代码目录
│   └── vue.config.js                       # Vue.js 项目的配置文件
├── middleware/
│   └── errorMiddleware.js                  # 错误处理中间件，处理服务器错误并返回响应
├── models/
│   ├── api.js                              # 定义 API 模型及其属性和关联
│   ├── apiProperty.js                      # 定义 API 属性模型及其属性和关联
│   ├── apiToProperty.js                    # 定义 API 和属性之间的关联模型
│   └── index.js                            # 初始化所有模型并建立关联
├── package.json                            # 项目根目录的依赖和脚本配置文件
├── public_static/
│   ├── css/                                # 静态资源目录，包含 CSS 文件
│   ├── index.html                          # 静态资源目录，包含 HTML 文件
│   └── js/                                 # 静态资源目录，包含 JavaScript 文件
└── routes/
    ├── apiPropertyRoutes.js                # 定义 API 属性相关的路由
    ├── apiRoutes.js                        # 定义 API 配置相关的路由
    └── dynamicRoutes.js                    # 定义动态生成的 API 路由
```

### 前端部分
前端使用 Vue.js 框架开发，主要功能包括：
1. **API 管理页面**：
   - 显示所有已配置的 API 列表。
   - 提供添加、编辑和删除 API 的功能。

2. **属性管理页面**：
   - 显示所有已配置的 API 属性列表。
   - 提供添加、编辑和删除 API 属性的功能。

3. **服务调用**：
   - 前端通过 Axios 调用后端提供的 API 接口，实现对 API 和属性的管理。

#### 主要文件
- [frontend/src/services/apiService.js](frontend/src/services/apiService.js)：封装了与后端交互的 API 服务。
- [frontend/src/components/ApiTable.vue](frontend/src/components/ApiTable.vue)：显示 API 列表的组件。
- [frontend/src/components/ApiForm.vue](frontend/src/components/ApiForm.vue)：用于添加和编辑 API 的表单组件。

### 后端部分
后端使用 Express 框架开发，主要功能包括：
1. **API 配置管理**：
   - 提供创建、读取、更新和删除 API 的接口。
   - 提供创建、读取、更新和删除 API 属性的接口。

2. **动态路由**：
   - 根据用户配置的 API 动态生成路由，并返回相应的模拟响应。

#### 主要文件
- [controllers/apiController.js](controllers/apiController.js)：处理 API 配置相关的请求。
- [controllers/apiPropertyController.js](controllers/apiPropertyController.js)：处理 API 属性配置相关的请求。
- [routes/apiRoutes.js](routes/apiRoutes.js)：定义 API 配置相关的路由。
- [routes/dynamicRoutes.js](routes/dynamicRoutes.js)：定义动态生成的 API 路由。


### 开发指南

#### 前端开发
1. 安装依赖：
   ```sh
   cd frontend
   npm install
   ```

2. 启动服务

```
npm run serve
```

#### 后端开发

1. 安装依赖
```
app.js 同级，项目根目录

npm install
```

2. 运行后端：

```
node app.js
```

## 开发环境

```
node --version
v20.18.0

npm --version
10.9.0
```

## Docker 部署

部署结构：

```
api_mock_server$ tree -L 2
.
├── docker-compose.yaml
└── projects
    ├── app.js
    ├── config
    ├── controllers
    ├── Dockerfile
    ├── docs
    ├── frontend
    ├── middleware
    ├── models
    ├── node_modules
    ├── package.json
    ├── package-lock.json
    ├── public_static
    └── routes
```

```
# 把 DockerFile 拷贝到 app.js 同级，执行 build 命令
sudo docker build --no-cache  -t mock_rest_server .

# 进入到 docker-compose.yaml 同级目录。

sudo docker compose up -d
```