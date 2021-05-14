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
    host_team_name:"",
  },

  gethostTeam(){
    let team_name=util.team_map(app.globalData.host_team)
    // console.log(team_name)
    this.setData({
    host_team_name:team_name
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.login().then(this.gethostTeam)
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
    if(app.globalData.host_team==""){
      // console.log('第一次加载')
      util.login().then(this.gethostTeam)
    }
    else{
      this.setData({
        host_team_name:util.team_map(app.globalData.host_team)
      })
    }
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