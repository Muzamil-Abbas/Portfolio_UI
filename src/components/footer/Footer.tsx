import React from "react";
import { Button } from "primereact/button";

const Footer: React.FC = () => {
  return (
    <div className="footer flex flex-col items-center justify-center h-40">
      {/* Social Icons */}
      <div className="social-icons flex space-x-10">
        <Button
          icon="pi pi-facebook"
          className="p-button-round h-10 p-button-secondary bg-black text-white hover:bg-gray-800 p-button-lg"
          aria-label="Facebook"
        />
        <Button
          icon="pi pi-instagram"
          className="p-button-round p-button-secondary bg-black text-white hover:bg-gray-800 p-button-lg"
          aria-label="Instagram"
        />
        <Button
          icon="pi pi-twitter"
          className="p-button-round p-button-secondary bg-black text-white hover:bg-gray-800 p-button-lg"
          aria-label="Twitter"
        />
        <Button
          icon="pi pi-linkedin"
          className="p-button-round p-button-secondary bg-black text-white hover:bg-gray-800 p-button-lg"
          aria-label="LinkedIn"
        />
      </div>

      {/* Copyright Text */}
      <div className="text-center text-base mt-4">
        <p>Copyright ©2020 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
