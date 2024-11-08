import Mock, { Random } from 'mockjs'

export const useMock = () => {
  function getSongs() {
    const data = Mock.mock({
      'list|5-10': [{
        'id|+1': 1,
        'songName': `I got ${Mock.Random.word(5)}`,
        'singer': function () {
          return `豆包·${Mock.Random.cname()}`
        },
        'date': '@date("yyyy-MM-dd")',
        'img': Mock.Random.image('200x100', '#50B347', '#FFF', 'YYQX'),
        'time': Random.now(),
      }],
    })
    return data.list
  }
  return {
    getSongs,
  }
}
