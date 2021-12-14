
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

```
