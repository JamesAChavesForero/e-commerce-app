import Link from "next/link"
import Container from "../Container"
import FooterList from "./FooterList"
import {MdFacebook} from "react-icons/md"
import {AiFillTwitterCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"


function Footer() {
  return (
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="font-bold text-base mb-2">Shop categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
          </FooterList>
          <FooterList>
            <h3 className="font-bold text-base mb-2">Customer Services</h3>
            <Link href="#">Contact Me</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns</Link>
            <Link href="#">Exchanges</Link>
            <Link href="#">FAQ's</Link>
          </FooterList>
          <FooterList>
            <div className="w-full md:1/3 mb-6 md:mb-0">
              <h3 className="font-bold text-base mb-2">About Me</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>&copy; {new Date().getFullYear()} James Chaves E-Commerce</p>
            </div>
          </FooterList>
          <FooterList>
            <h3> Follow Me </h3>
            <div className="flex gap-2">
            <Link href="https://facebook.com"><MdFacebook size={24}/></Link>
            <Link href="#https://twitter.com/iniciarsesion"><AiFillTwitterCircle size={24}/></Link>
            <Link href="https://www.instagram.com/"><AiFillInstagram size={24}/></Link>
            <Link href="https://www.youtube.com/"><AiFillYoutube size={24}/></Link>

            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  )
}

export default Footer