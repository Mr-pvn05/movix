import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import {Container} from "../components/index";

const Footer = () => {
    return (
        <footer className="bg-black3 text-center py-8">
            <Container>
                <ul className="flex justify-center gap-2 md:gap-8">
                    <li className="cursor-pointer">Terms Of Use</li>
                    <li className="cursor-pointer">Privacy-Policy</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Blog</li>
                    <li className="cursor-pointer">FAQ</li>
                </ul>
                <div className="py-8 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="flex justify-center lg:gap-16">
                    <span className="icon cursor-pointer bg-black2 p-3 rounded-full">
                        <FaFacebookF />
                    </span>
                    <span className="icon cursor-pointer bg-black2 p-3 rounded-full">
                        <FaInstagram />
                    </span>
                    <span className="icon cursor-pointer bg-black2 p-3 rounded-full">
                        <FaTwitter />
                    </span>
                    <span className="icon cursor-pointer bg-black2 p-3 rounded-full">
                        <FaLinkedin />
                    </span>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;