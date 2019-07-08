class Auth {


  static setToken(token) {
    console.log(localStorage)
    console.log('setting', token)
    localStorage.setItem('token', token)
  }

  static getToken() {

    console.log('getting token')
    console.log(localStorage)
    return localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token')
  }

  static getPayload() {
    const token = this.getToken()
    if (!token) return false
    const parts = token.split('.')
    if (parts.length < 3) return false
    return JSON.parse(atob(parts[1]))
  }

  static isAuthenticated() {
    const payload = this.getPayload()
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }
}

export default Auth
