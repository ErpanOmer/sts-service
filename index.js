const Core = require('@alicloud/pop-core')
const requestIp = require('request-ip')
const http = require('http')
const secret = require('./secret.json')


//构建一个阿里云客户端, 用于发起请求。
//构建阿里云客户端时，需要设置AccessKey ID和AccessKey Secret。
var client = new Core({
  accessKeyId: secret.accessKeyId,
  accessKeySecret: secret.accessKeySecret,
  endpoint: secret.endpoint,
  apiVersion: secret.apiVersion
})

async function getAuthToken () {
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
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({
    data: {
      ip: requestIp.getClientIp(req),
      token: await getAuthToken()
    }
  }))
}).listen(8000)