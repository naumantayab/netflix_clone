import React from "react";
import "./header.css";
function Nav() {
	return (
		<div className='navbar_main'>
			<div className='netflix_logo'>
				<a href='https://www.netflix.com/pk/'>
					<img
						src='https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png'
						alt='neflix_logo'
						height='60px'
					></img>
				</a>
				<div className='nav_right'>
					UNLIMITED TV SHOWS & MOVIES
					<a href='https://www.netflix.com/pk/'>
						<button className='btn_join_now'>JOIN NOW</button>
					</a>
					<a href='https://www.netflix.com/pk/login'>
						<button className='btn_sign'>SIGN IN</button>
					</a>
				</div>
			</div>
		</div>
	);
}
export default Nav;
