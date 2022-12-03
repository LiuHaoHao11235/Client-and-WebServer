class Auth {
  constructor() {
    this.authenticated = false;
  }
  login(callback) {
    this.authenticated = true;
    callback && callback();
  }
  logout(callback) {
    this.authenticated = false;
    callback && callback();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}
export default new Auth();
