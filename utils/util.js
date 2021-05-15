const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const nba_teams=[
  {value: 'nets', name: '篮网'},
  {value: 'lakers', name: '湖人' },
  {value: 'clippers', name: '快船'},
  {value: 'sixers', name: '76人'},
  {value: 'bucks', name: '雄鹿'},
  {value: 'jazz', name: '爵士' },
  {value: 'suns', name: '太阳'},
  {value: 'warriors', name: '勇士'},
  {value: 'nuggets', name: '掘金'},
]

const team_map=(key)=>{
  let name_map={    
    "nets":"篮网",
    "lakers":"湖人",
    "clippers":"快船",
    "sixers":"76人", 
    "bucks":"雄鹿",
    "jazz":"爵士",
    "suns":"太阳",
    "warriors":"勇士",
    "nuggets":"掘金",
  }
  return name_map[key]
}
// 登录 promise实现同步
function login(){
  let promise = new Promise((resolve,reject)=>{
    wx.login({
      success (res) {
        if (res.code) {
          // console.log(res.code)
          //发起网络请求
          wx.request({
            url: 'https://localhost:9527/getopenid',
            method:'POST',
            data: {
              code: res.code
            },
            success (res) {
              let app=getApp()
              app.globalData.token=res.data.token
              app.globalData.host_team=res.data.host_team
              // console.log(app.globalData.host_team)
              resolve()
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  })
  return promise;
}

function emailcheck(email){
  let reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(email)
}

module.exports = {
  formatTime,
  team_map,
  nba_teams,
  login,
  emailcheck,
}
