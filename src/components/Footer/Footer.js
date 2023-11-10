import React from "react";
import images from "~/assests/images";
function Footer() {
  return (
    <footer>
      <img src={images.twitterIcon} alt={images.twitterIcon} />
      <img src={images.facebookIcon} alt={images.facebookIcon} />
      <img src={images.insIcon} alt={images.insIcon} />
      <img src={images.githubIcon} alt={images.githubIcon} />
    </footer>
  );
}

export default Footer;
