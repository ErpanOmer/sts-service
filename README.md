
# Command Line

## Docker image

```sh
# 列出所有的镜像
docker images

# 创建镜像
docker build -t [镜像名] .

# 强制删除镜像
docker rmi -f [镜像名]

# 删除所有的镜像
docker rmi $(docker images -q)
```

## Docker container

```sh
# 列出所有的容器 ID
docker ps -aq

# 列出所有的容器
docker ps

# 运行容器
docker run -d -p 8000:8000 --name [容器名] [要运行的镜像名]

# 停止容器
docker stop [容器名]

# 停止所有的容器
docker stop $(docker ps -aq)

# 强制删除容器
docker rm -f [容器名]

# 删除所有的容器
docker rm $(docker ps -aq)
```

## Docker cache

```sh
# 删除缓存
docker system prune --volumes
```

## Shell

```sh
# 强制递归删除目录
 rm -rf [目录名]

# 强制删除文件
 rm -f [文件名]

 # 复制文件
 cp [文件名] [复制到哪里]
```

## Git

```sh
# 强制删除一条分支
git branch -D [branchName]

# 强制删除当前分支外的所有分支
git branch | xargs git branch -D

# 强制删除分支名包含指定'xxx'的分支
git branch | grep 'xxx' | xargs git branch -D

# 列出全部 git 配置
git config --list

# 设置全局 git 配置
git config --global user.name [git名称]
git config --global user.email [git邮箱]
git config --global user.passwrd [git密码]

# 设置 git 代理加速
git config --global url."https://hub.fastgit.org/".insteadOf "https://github.com/"
git config --global protocol.http.allow always

```

## PM2

```sh
# 启动 node 进程
pm2 start [文件]

# 启动 node 进程并命名
pm2 start [文件] --name [进程命名]

# 列出所有的 node 程序
pm2 list

# 显示每个 node 进程的CPU和内存占用情况
pm2 monit

# 显示 node 进程的所有信息
pm2 show [进程名]

# 显示所有 node 进程日志
pm2 logs

# 显示指定 node 进程日志
pm2 logs [进程名]

# 停止所有的 node 进程
pm2 stop all

# 重启所有 node 进程
pm2 restart all

# 零秒停机重新加载所有 node 进程
pm2 reload all

# 关闭并删除所有 node 进程
$ pm2 delete all
```
