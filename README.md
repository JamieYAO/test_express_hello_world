#EXPRESS HELLO WORLD EXAMPLE
*  机器上必须安装有node和npm<br />
node官网：https://nodejs.org/en/
*  配置项目：<br />
  <code>$ mkdir you_proj_name //创建项目文件夹</code><br /><br />
  <code>cd you_proj_name //进入项目文件夹</code><br /><br />
  <code>npm init  //初始化npm（填写相关信息），会帮你创建一个package.json</code><br /><br />
  <code>npm install express --save //安装express依赖，并保存配置到package.json，只需要有相关package.json文件，使用npm install即可安装需要的依赖包</code><br /><br />
*  <code>vim app.js //开始编写node服务器，代码如仓库中的app.js文件中</code>
*  <code>$ node app.js //启动node服务器</code>

你将在命令行看到：
<code>Example app listening on port 3000!</code><br .>
  接下来可以打开浏览器访问：localhost:3000<br />
  网页将会显示：Hello World!
