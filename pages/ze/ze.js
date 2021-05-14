// pages/ze/ze.js
const app=getApp()
const util = require('../../utils/util.js')
Page({
  skipSwitchTeam:function(){
    wx.navigateTo({
      url: '../switchTeam/switchTeam',
    })
  },
  skipTeamSchedule:function(){
    wx.navigateTo({
      url: '../nbaSchedule/nbaSchedule',
    })
  },
  skipTeamSchedule:function(){
    wx.navigateTo({
      url: '../nbaSchedule/nbaSchedule',
    })
  },
  skipFeedback:function(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    openid:null,
    host_team_name:"",
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
    //全局变量写法
    // let openid=app.globalData.openid
    /*本地存储异步写法
    let that=this
    wx.getStorage({
      key: 'openid',
      success (res) {
        // console.log(openid_store)
        that.setData({
          openid:res.data
        })
      }
    })
    */
    //同步写法
    this.setData({
       openid:wx.getStorageSync('openid'),
      }     
    )
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let team_name=util.team_map(app.globalData.host_team)
    // console.log(team_name)
    this.setData({
    host_team_name:team_name
  })
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

  }
})