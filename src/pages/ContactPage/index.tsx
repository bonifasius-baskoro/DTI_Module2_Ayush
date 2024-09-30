import { FC } from "react";
import Header from "../../components/Header";
import profpic from "../../assets/contact/profpic.png";
const ContactPage: FC = () => {
  return (
    <>
      <Header />
      <div className="px-[80px] mt-[215px] font-inter">
        <div className="flex justify-between gap-[100px]">
          <div className="">
            <div>
              <img
                className="h-[297px] w-[297px]"
                src={profpic}
                alt="profpic"
              />
            </div>
            <div className="mt-14">
              <h1 className="text-lg">Contact Details</h1>
              <div className="text-[27px]">
                <h1>ayush.pajak@dirjenpajak.co.id</h1>
                <h1>+021813048120</h1>
              </div>
            </div>
            <h1 className="mt-10 mb-2">social</h1>
            <div className="text-2xl space-y-[6px]">
              <h2>Linkedin</h2>
              <h2>Instagram</h2>
              <h2>Twitter</h2>
              <h2>Webflow</h2>
              <h2>Figma</h2>
            </div>
          </div>
          <div className="w-[50%] ">
            <h1 className="font-inter text-6xl mb-9">
              Let's build something cool together
            </h1>
            <div>
              <form className="block mt-8">
                <label className="text-lg mb-3 mt-8">Name</label>
                <input
                  className="min-w-[100%] text-2xl h-[38px] mb-6 mt-3 pb-4 border-b-[0.5px] border-gray-600"
                  type="text"
                  name="name"
                  placeholder="James Riyadi"
                />
                <label className="text-lg mb-3 mt-8 w-[624px] ">Email</label>
                <input
                  className="min-w-[100%] text-2xl h-[38px] mb-6 border-b-[0.5px] border-gray-600 pb-4 mt-3"
                  type="text"
                  id="email"
                  placeholder="jamesriyadi@aswewe.com"
                />
                <label className="text-lg mb-3 mt-12">Subject</label>
                <input
                  className="min-w-[100%] text-2xl h-[38px]  mb-6 mt-3 pb-4 border-b-[0.5px] border-gray-600"
                  type="text"
                  id="subject"
                  placeholder="James Riyadi"
                />
                <label className="text-lg mb-3 mt-8">Message</label>
                <input
                  className="min-w-[100%] text-2xl w-[624px] h-[158px] mb-8 border-b-[0.5px] border-gray-600 "
                  type="message"
                  placeholder="Type your message"
                />
                <input
                  className="bg-black text-white w-[193px] h-[70px] rounded-full text-lg   "
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>

       
      </div>
      <div className="bg-[#0B0C0E] px-[80px]">
          <div className="mt-32 pb-8 flex justify-between py-8">
            <div>
              <h1 className="text-[#C7D0D9]">
                Build with 💖 by Brightscout & Ayush{" "}
              </h1>
            </div>
            <div className="text-[#C7D0D9] flex justify-between gap-3 ">
              <p>Linkedin</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p> Webflow</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default ContactPage;
