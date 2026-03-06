import "../Styles/Studentregister.css"
import { Link } from 'react-router-dom'

const Studentregister= () => {
  return (
    <div>
      <div class="login-page">
        <div class="login-box">
            <h2>Student Register</h2>
            <form>
                <div class="input-group">
                    <label>Name</label>
                    <input type="email" placeholder="Enter your email"/>
                </div>
                <div class="input-group">
                    <label>Email</label>
                    <input type="password" placeholder="Enter your password"/>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password"/>
                </div>
                <div class="input-group">
                    <label>Department</label>
                    <input type="password" placeholder="Enter your password"/>
                </div>
                <button class="login-btn">Login</button>

                <p class="login-text"> Don't have an account?<span>
                <Link to="/Studentregister">Register</Link></span></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Studentregister
