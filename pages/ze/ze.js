// pages/ze/ze.js
const app=getApp()
const util = require('../../utils/util.js')
Page({
  skipSwitchTeam:function(){
    wx.navigateTo({
      url: '../switchTeam/switchTeam',
    })
  },
  skipTeamSchedule:function(team){
    let url='../nbaSchedule/nbaSchedule?team='+team
    wx.navigateTo({
      url: url,
    })
  },
  skipHostTeamSchedule:function(){
    let team=app.globalData.host_team
    if(team==null){
      wx.showToast({
        title: "您还未选择球队",
        icon: 'error',
        duration: 1500,
      })
      return
    }
    this.skipTeamSchedule(team)
  },
  skipFeedback:function(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  bindPickerChange:function(e){
    // console.log(e.detail)
    let chooseTeam=this.data.team_list[e.detail.value].value
    console.log(chooseTeam)
    this.skipTeamSchedule(chooseTeam)
  },
  skipUserInfo(){
    wx.navigateTo({
      url: '../userInfo/userInfo',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    host_team_name:"",
    team_list:null,
  },

  gethostTeamName(){
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
    this.setData({
      team_list:util.nba_teams
    })
    // console.log(this.data.team_list)
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
    if(app.globalData.host_team==null){
      // console.log('第一次加载')
      util.login().then(this.gethostTeamName)
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