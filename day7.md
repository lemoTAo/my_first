登录业务（难度）
1.注册存储名字密码
2.登录—成功下发taken，后台才能区分你这个用户是谁
登录接口，做的不完美，一般登录成功服务器会下发token，前台持久化存储token

登录存在问题
登录之后：不能跳转到登录页面
多个组件展示用户信息，需要在每一个组件的mounted中触发

交易页面完成（一般）


个人中心（一般）
图片懒加载:
vue_lazyload
表单验证（validate）必要
路由懒加载
使用component:()=>import('dir')


上线去掉.map.js文件
在vue.config.js中配置
productionSourceMap:false

云服务器
阿里云，腾讯云
设置安全组，让服务器一些端口打开
设置Xshell7工具登录服务器
xftp代理文件操作
进入etc文件 查找Nginx 没有 yum install nginx 
找到nginx.conf wenian 
vim 进行编辑
1.
location / {
    root /root/jch/www/shagngpinghui;
    index index.html;
    try_files $uri $uri/ /index.html;
}
2.配置文件资源请求
location /api {
    proxy_pass http://39.98.123.211
}