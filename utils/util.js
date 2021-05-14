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



module.exports = {
  formatTime,
  team_map,
  nba_teams
}
