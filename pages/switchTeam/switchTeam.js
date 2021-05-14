// pages/switchTeam/switchTeam.js
const app=getApp()
const util=require('../../utils/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    host_team:"",
    items: null,
  },
  //radio变化
  radioChange(e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      host_team:e.detail.value
    })
  },

  //提交事件
  formSubmit(e){
    // console.log(this.data.host_team)
    if(this.data.host_team==""){
      wx.showToast({
        title: '请做出您的选择',
        icon: 'error',
        duration: 1500
       })
       return
    }
    //发送修改数据
    let that=this
    wx.request({
      url: 'https://localhost:9527/switchTeam',
      method:'POST',
      data:{
        host_team:that.data.host_team,
      },
      header:{
        'token':app.globalData.token
      },
      success(res){
        // console.log(res.data)
        if(res.data.ok==false){
          wx.showToast({
            title: res.data.msg,
            icon: 'error',
            duration: 1500
          })
        }
        else{
          //修改全局变量
          app.globalData.host_team=that.data.host_team
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 1000,
            success: function() {
              setTimeout(function() {
                //要延时执行的代码
                wx.navigateBack({
                  delta: 1 //返回上级页面
                })
              }, 1000) //延迟时间
            },
          })
        }
      },
      fail:function(){
        wx.showToast({
          title: '请求失败',
          icon: 'error',
          duration: 1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      items:util.nba_teams
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