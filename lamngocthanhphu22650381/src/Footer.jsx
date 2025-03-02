
import logo from './assets/img/chefifywhite.png'
import './css/footer.css'
function Footer(){
    return(
        <>
            <div className="footer">
                <div className="left">
                    <div className="left-top">
                       <h3>About us</h3>
                        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                        <div className="input-group">
                            <input type="text" placeholder="Enter your email" name="" id="" />
                            <button>Send</button>
                        </div> 
                    </div>
                    <div className="logo-group">
                        <img src={logo} alt="" />
                        <span>2023 Chefify Company</span>
                        <span>Terms and Sevical Privacy Policy</span>
                    </div>
                    

                </div>
                
                <div className="center">
                    <div className="center-top">
                        <ul>
                            <li>Learn More</li>
                            <li>Our Cooks</li>
                            <li>See Our Features</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div className="center-bottom">
                        <ul>
                            <li>Shop</li>
                            <li>Gift Subscription</li>
                            <li>Send Us Feedback</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                <ul>
                            <li>Recpies</li>
                            <li>What to cook this week</li>
                            <li>Pasta</li>
                            <li>Dinner</li>
                            <li>Healthy</li>
                            <li>Vegetarian</li>
                            <li>Vegan</li>
                            <li>Chrismas</li>
                        </ul>
                </div>
            </div>
        </>
    )
}
export default Footer