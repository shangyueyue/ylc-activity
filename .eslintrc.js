module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
    },
    "extends": "airbnb",
    "plugins": [
      "react",
      "jsx-a11y"
    ],
    "rules": {
      //缩进采用2个空格
      "indent": [2, 2],
      //换行符编码采用unix编码。尤其是Git应该统一采用unix编码，防止不必要的提交
      "linebreak-style": [2, "unix"],
      //使用单引号表示字符串
      "quotes": [2, "single"],
      //不能遗漏分号，一个完整代码语句应该以分号结尾
      "semi": [2, "always"],
      //在定义对象或数组时，最后一项不能加逗号
      "comma-dangle": [2, "never"],
      //在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
      "comma-spacing": [2, { "before": false, "after": true }],
      //该规则规定了在对象字面量语法中，key和value之间的空白，冒号前和冒号后面都需要一个空格
      "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
      //如果逗号可以放在行首或行尾时，那么请放在行尾
      "comma-style": [2, "last"],
      //每一行最大字符数为110
      'max-len': [2, 110], // airbnb use 100, wishlist, one day
      //reduce的参数可以做处理
      "no-param-reassign": 0,
      //生产环境应该禁止console，错误级别为2
      'no-console': 0,
      //tab为2个space
      "no-tabs": 0,
      //声明但没有用，提示但不报错
      "no-unused-vars": 0,
      //箭头函数返回
          "consistent-return": 0,
      //关掉props-types检测
      "react/prop-types": 0,
      //react组件文件的后缀为.js airbnb is using .jsx
      'react/jsx-filename-extension': [2, {extensions: ['.js']}],
      // static element 可以添加事件
      "jsx-a11y/no-static-element-interactions": 0,
      // no-noninteractive 可以添加事件
      "jsx-a11y/no-noninteractive-element-interactions": 0,
      // prototype 可以
      "no-prototype-builtins": 0,
      // 组件缩减2个space
      "react/jsx-indent": [2, 2],
      // react中事件的this
      "class-methods-use-this": 0,
      // 混合式return
      "no-return-assign": 0,
      // 函数按字母排序
      "react/sort-comp": 0,
      // 允许使用jsx直接用bind
      "react/jsx-no-bind": 0,
      // label允许没有for属性
      "jsx-a11y/label-has-for": 0,
      // 匿名函数
      "func-names":0,
      "prefer-promise-reject-errors": 0,
      "react/prefer-stateless-function": 1
    },
    "parserOptions":{
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true, // 支持对象的解构赋值
        "jsx": true
      },
      "sourceType": "module"
    },
    "globals": {
      "document": true,
      "window": true
    }
  }