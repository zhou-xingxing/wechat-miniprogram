// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let that=this
        wx.request({
          url: 'https://127.0.0.1:9527/getopenid',
          method:'POST',
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            console.log(res.data)
            //全局变量写法
            // that.globalData.openid=res.data.openid
            // console.log(that.globalData.openid)
            /*异步写法 
            wx.setStorage({
              data: res.data.openid,
              key: 'openid',
            })
            */
           wx.setStorageSync('openid', res.data.openid)
           that.globalData.host_team=res.data.host_team
          }
        })
      }
    })
    //检查更新
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      // console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    
    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })    
  },
  globalData: {
    userInfo: null,
    openid:null,
    host_team:"",
  }
})





