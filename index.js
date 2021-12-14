const Core = require('@alicloud/pop-core')
const requestIp = require('request-ip')
const http = require('http')
const url = require('url')
const secret = require('./secret.json')

//构建一个阿里云客户端, 用于发起请求。
//构建阿里云客户端时，需要设置AccessKey ID和AccessKey Secret。
var client = new Core({
  accessKeyId: secret.accessKeyId,
  accessKeySecret: secret.accessKeySecret,
  endpoint: secret.endpoint,
  apiVersion: secret.apiVersion
})

async function getAuthorizationToken () {
  //设置参数。关于参数含义和设置方法，请参见《API参考》。
  const params = {
    RegionId: secret.RegionId,
    RoleArn: secret.RoleArn,
    RoleSessionName: secret.RoleSessionName,
    DurationSeconds: secret.DurationSeconds
  }

  const requestOption = {
    method: 'POST'
  }

  try {
    const { Credentials }  = await client.request('AssumeRole', params, requestOption)
    return Credentials
  } catch (error) {
    console.log(error)
    return error.message
  }
}

// http server
http.createServer(async (req, res) => {
  // not get
  if (req.method !== 'GET') {
    return res.writeHead(403).end('Request error')
  }

  // 200
  res.writeHead(200, { 'Content-Type': 'application/json' })
  // get mac
  const mac = req.url.substring(1)
  // not authorization mac
  if (!secret.macs.includes(mac)) {
    return res.end(JSON.stringify( { message: 'You don’t have authorization' }))
  }

  try {
    return res.end(JSON.stringify( ...await getAuthorizationToken() ))
  } catch (error) {
    return res.end(JSON.stringify( { message: error.message }))
  }
}).listen(8000)