// pages/moviebot/moviebot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList: [{
      type: 1,
      msg: "可以随便问我问题哦!",
      key: (new Date()).valueOf
    }],
  
    scrolltop:'',
    searchinput:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
    /**
   * 判断发送信息是否为空
   */
  isEmpty: function (e) {
    if (e.length === 0) {
      return false
    } else {
      return true
    }
  },
  send: function (e) {
    let msg = e.detail.value.msg
    // 输入框清空
    this.setData({
      searchinput: '',  
    })
    if (!this.isEmpty(msg)) {
      wx.showToast({
        title: '不能发送空信息',
        icon: 'none'
      })
      return
    }
    let msgList = this.data.msgList
    msgList.push({
      type: 0,
      msg: msg,
      key:(new Date()).valueOf
    })
    let charlenght = msgList.length;
    this.setData({
      msgList: msgList,
      scrolltop: "scroll" + charlenght,
    })
    this.getReply(msg)
  },

  getReply: function (sendMsg) {
    let that = this
    wx.request({
      url:'https://ss.xiaozeze.top:9527/movieQA',
      method: "get",
      data: {
       question:sendMsg
      },
      success: function (res) {
      //  console.log(res)
       let msgList = that.data.msgList
       msgList.push({
        type: 1,
        msg: res.data.answer,
        key: (new Date()).valueOf
      })
       that.setData({
         msgList: msgList,
         scrolltop: "scroll" + msgList.length,
       })
      },
      fail:function(res){
        var msgList = that.data.msgList
        msgList.push({
          type: 1,
          msg: "出错了!",
          key: (new Date()).valueOf
        })
        console.log(res)
        that.setData({
          msgList: msgList,
        })
      }
    })
  }
})