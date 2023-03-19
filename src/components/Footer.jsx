
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon  from '@mui/icons-material/Facebook';
import TwitterIcon  from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon   from '@mui/icons-material/Reddit';
import logo from "../assets/logo.png"

function Footer() {

  return (
    <>
    <footer id="About" className="flex flex-col sm:flex-row justify-center items-center Menu_bg p-1 m-4 rounded-sm">
      <div className="flex justify-center flex-col items-start">
        <p  ><img src={logo} alt="logo" className="w-[30%] h-[30%]"/></p>
      </div>
      <div className="flex flex-col justify-center items-start">
        <h1 className="font-bold text-xl">Join Community</h1>
        <p className="m-2 text-2xl font-semibold cursor-pointer  hover:text-blue-300">Career</p>
        <p className="m-2 text-2xl font-semibold cursor-pointer  hover:text-blue-300">Movies</p>
        <p className="m-2 text-2xl font-semibold cursor-pointer  hover:text-blue-300">Latest</p>
        <p className="m-2 text-2xl font-semibold cursor-pointer  hover:text-blue-300">contact us</p>
      </div>
      <div className="flex justify-center items-start">
        <p className=" m-2 cursor-pointer  hover:text-blue-300"><InstagramIcon></InstagramIcon></p>
        <p className=" m-2 cursor-pointer  hover:text-blue-300"><FacebookIcon></FacebookIcon></p>
        <p className=" m-2 cursor-pointer  hover:text-blue-300"><TwitterIcon></TwitterIcon></p>
        <p className=" m-2 cursor-pointer  hover:text-blue-300"><LinkedInIcon></LinkedInIcon></p>
        <p className=" m-2 cursor-pointer  hover:text-blue-300"><RedditIcon></RedditIcon></p>
      </div>
      <hr />
    </footer>

   <div className="m-1 text-center mb-5">© 2023 Your Company. All rights reserved.</div>
   </>
  );
}

export default Footer;
