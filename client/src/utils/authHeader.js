export default function authHeader() {
    const token = localStorage.getItem('token');  
    if (token) {
      return token // for Node.js Express back-end
    } else {
      return null
    }
}