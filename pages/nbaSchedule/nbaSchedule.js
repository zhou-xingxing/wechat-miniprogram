// pages/nbaSchedule/nbaSchedule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schedule:[
      {
        date:"04-10",
        gamenumber:5,
        games:[
          {
            time:"07:00",
            team1:"森林狼",
            team2:"步行者",
          },
          {
            time:"07:00",
            team1:"奇才",
            team2:"魔术",
          },
          {
            time:"07:30",
            team1:"鹈鹕",
            team2:"篮网",
          },
          {
            time:"08:00",
            team1:"灰熊",
            team2:"老鹰",
          },
          {
            time:"08:00",
            team1:"马刺",
            team2:"掘金",
          },
        ]
      },
      {
        date:"04-11",
        gamenumber:4,
        games:[
          {
            time:"07:30",
            team1:"公牛",
            team2:"猛龙",
          },
          {
            time:"07:30",
            team1:"湖人",
            team2:"热火",
          },
          {
            time:"08:00",
            team1:"骑士",
            team2:"雷霆",
          },
          {
            time:"09:00",
            team1:"雄鹿",
            team2:"独行侠",
          },
        ]
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
  onShareAppMessage: function () {

  }
})