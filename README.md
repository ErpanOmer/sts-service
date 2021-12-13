
# Docker 命令

## 镜像

```sh
// 列出所有的镜像
docker images

// 创建镜像
docker build -t [镜像名] .

// 强制删除镜像
docker rmi -f [镜像名]

// 删除所有的镜像
docker rmi $(docker images -q)
```

## 容器

```sh
// 列出所有的容器 ID
docker ps -aq

// 列出所有的容器
docker ps

// 运行容器
docker run -d -p 8000:8000 --name [容器名] [要运行的镜像名]

// 停止容器
docker stop [容器名]

// 停止所有的容器
docker stop $(docker ps -aq)

// 强制删除容器
docker rm -f [容器名]

// 删除所有的容器
docker rm $(docker ps -aq)
```

## 缓存

```sh
// 删除缓存
docker system prune --volumes
```

## Linux

```sh
// 强制递归删除目录
 rm -rf [目录名]

 // 强制删除文件
 rm -f [文件名]
```
