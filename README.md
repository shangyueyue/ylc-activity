## 环境搭建

基于create-react-app小脚架搭建

## 技术栈

react + react-router-dom + redux + fetch + ES6/ES5 + less

## 项目结构
```bash
# webpack的配置文件
config/

# 生产代码
build/

# 模板入口
public/

# 项目代码
src/
  entries    // 入口文件
  server        // 接口配置、mock数据等
  common     // 公共：css、fonts、js
  component  // 公共组件
  middleware // redux中间件处理
  reducer    // redux的reducer
  router     // router管理
  store      // 全局store
  util       // 工具处理
  view       // 界面
```
## 项目构建步骤
```bash
# 初始化依赖
npm install

# 启动项目，http://localhost:3000
npm start

# 生产部署
npm run build

# 测试
npm run test

# 代码格式化、检测
npm run lint
```

## 开发模块注意
1.view下，一个模块一个文件夹，可以包括：该模块的scss、配置文件、组件  
2.reducer下，一个小模块一个文件，代码包括：type、reducer、action  
3.component下，一个组件一个文件夹，组件高度抽象、可复用

## 项目代码管理
1.git push 时先执行npm run lint格式化、检测  
2.一个view文件下.js文件代码不能超过300行  

## 代码注意
1.注意代码的整洁  
2.注意命名  


