// pages/show/show.js
Page({
    // 事件处理函数
    skipRandom() {
      wx.navigateTo({
        url: '../random/random'
      })
    },
   
    // 事件处理函数
    skipNote:function() {
      wx.navigateTo({
        url: '../note/note'
      })
    },

    skipnbaStandings:function(){
      wx.navigateTo({
        url: '../nbaStandings/nbaStandings'
      })
    },
    skipchatbot:function(){
      wx.navigateTo({
        url: '../chatbot/chatbot'
      })
    },
    skipmoviebot:function(){
      wx.navigateTo({
        url: '../moviebot/moviebot'
      })
    },
  /**
   * 页面的初始数据
   */
  data: {
    func:[
      {imgsrc:"/images/building-Fill.png",
       title:"摇骰子",
       bindtap:"skipRandom"
      },
      {imgsrc:"/images/cloud-Fill.png",
       title:"NBA球队排名",
       bindtap:"skipnbaStandings"
      },
      {imgsrc:"/images/robot.png",
      title:"聊天机器人",
      bindtap:"skipchatbot"
     },
     {imgsrc:"/images/robot.png",
      title:"电影问答机器人",
      bindtap:"skipmoviebot"
     },
    ]
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
  onShareAppMessage: function (res) {
    return{
      title:"Ze小工具"
    }
  },

  onShareTimeline:function(){
    return{

    }
  }


})