// pages/nbaSchedule/nbaSchedule.js
const app=getApp()
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    team_name:"",
    team_schedule:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取球队信息
    console.log(options)
    let team=options.team
    let that=this

    this.setData({
      team_name:util.team_map(team)
    })
    //请求
    wx.request({
      url: 'https://localhost:9527/team_schedule',
      method:'GET',
      data:{
        team:team
      },
      success(res){
        // console.log(res.data)
        that.setData({
          team_schedule:res.data
        })
      },
      fail(){
        wx.showToast({
          title: '请求失败',
          icon: 'error',
          duration: 1500
        })
      }
    })
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

  }
})