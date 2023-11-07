import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Kapil Patil</h4>
      <h4>Copyright &copy; 2023 KP</h4>
      <div className='footerLinks'>
        <a href="https://github.com/kapilpatil1989" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/kapil-patil-9a12a3107/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:kapilpatil1998@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer
