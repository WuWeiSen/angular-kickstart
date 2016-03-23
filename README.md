## MOCK安装与启动 （进入到_mock文件下）

    npm install

> 请务必安装 nodemon 启动项目提高调试效率 `npm install nodemon -g`


```shell
nodemon -w fms.js fms.js
```
或者

```shell
node fms.js
```
ps：修改后，需要自己手动重启

## 项目启动

> 先启动MOCK再启动项目

- npm install 
- bower install
- gulp serve


## 自定义指令
### 1.城市选择控件
该城市控件支持选择、搜索城市，目前搜索城市的结果是返回固定数组

![city](./app/images/city.png)

## 自定义过滤器
### 1.截断过滤器
给一个字符串指定显示长度，截断过滤器将该字符串超过指定长度的字符用...代替

![city](./app/images/filter-trim.png)

### 2.数组分隔过滤器
有别与js的数组join函数，该过滤器支持指定数组的某一属性进行分隔

![city](./app/images/filter-array-join.png)
