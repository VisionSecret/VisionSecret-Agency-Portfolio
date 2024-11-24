import React from "react";

const Social = () => {
  return (
    <div className="fixed top-[35%] -right-1 flex flex-col items-center justify-center z-50">
      <div className="socials bg-black rounded-md h-fit flex flex-col justify-around gap-2 p-2">
        {/* Linkedin Link */}
        <a
          href="https://www.linkedin.com/in/vision-secret/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-light flex items-center"
        >
          <i className="w-10 h-10 text-white bg-[#0A66C2] hover:fill-blue-700 flex items-center justify-center rounded-md mr-2 ri-linkedin-fill"></i>
        </a>

        {/* Whatsapp Link */}
        <a
          href="https://wa.me/+923096448573"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-light flex items-center"
        >
          <i className="w-10 h-10 text-white bg-[#25D366] hover:fill-green-500 flex items-center justify-center rounded-md mr-2 ri-whatsapp-line"></i>
        </a>
        {/* Mail Link */}
        <a
          href="mailto:ansali251@gmail.com?subject=Hire Me&body=I am interested in hiring you for a project. Please let me know how we can proceed."
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-light flex items-center"
        >
          <i className="w-10 h-10 text-white bg-[#D14836] hover:fill-red-500 flex items-center justify-center rounded-md mr-2 ri-mail-fill"></i>
        </a>
        {/* Behance Link */}
        <a
          href="https://www.behance.com/in/ansali251"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-light flex items-center"
        >
          <i className="w-10 h-10 text-white bg-[#1769FF] hover:fill-blue-500 flex items-center justify-center rounded-md mr-2 ri-behance-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
