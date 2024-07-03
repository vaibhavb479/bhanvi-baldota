import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";



const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h2 className="heading heading-footer lg:max-w-[45vw]">
          Please send the necessary <span className="text-purple">documents</span> digital.
       
        </h2>
       
         <h1 className="text-white-500 md:mt-10 text-center">Documents Required</h1>
             <div className="text-white-200 md:mt-10 my-5">
    
      <ul>
  
          <li>- Form 16/16A (if any) </li>
          <li>- Salary slips (if any)  </li>
          <li>- Bank statements for all accounts.  </li>
          <li>- Investment proof (e.g., ELSS, PPF, NSC, etc.) </li>
          <li>- Home loan interest certificate (if any) </li>
          <li>- Details of any other income (e.g., rental income, interest, etc.) </li>
          <li>- TDS certificates  </li>
           <li>- Form 26AS </li>
            <li>- Proof of deductions (e.g., medical insurance, donations, etc.) </li>
             <li>- Any other relevant financial documents  </li>
              
      
      </ul><br></br>
      <p>Please ensure that all documents are sent to us at the earliest.</p>
    </div>
       
        <a href="mailto:bhanvibaldota@gmail.com">
          <MagicButton
            title="Share Your Documents"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 
        </p>

        {/* <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
