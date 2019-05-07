export default class Storage {
  
  static set commodityInfo (commodityInfo) {
    this.save('commodityInfo', commodityInfo)
  }

  static get commodityInfo () {
    return this.getOut('commodityInfo')
  }

// 清理缓存

  static clear () {
    for (const item in window.app.$store.mutations) window.app.$store.commit(item, null)
    try {
      for (const item in localStorage) localStorage[item] = ''
    } catch (error) {}
  }

  static getsaveInLocalStorage (name) {
    try {
      localStorage.getItem(name)
    } catch (error) {}
  }

  static save (name, content) {
    window.app.$store.commit('save' + name.substring(0, 1).toUpperCase() + name.substring(1), content)
    try {
      let result = content
      if (typeof content === 'object') result = JSON.stringify(content)
      localStorage.setItem(name, result)
    } catch (error) {}
  }

  static getOut (name) {
    let result = null
    try {
      result = localStorage.getItem(name)
      if (typeof JSON.parse(result) === 'object') result = JSON.parse(result)
    } catch (error) {}
    if (window.app.$store.state[name] !== null) {
      result = window.app.$store.state[name]
    } else if (result !== null) {
      this.save(name, result)
    }
    return result
  }
}
