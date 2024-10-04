import { FC } from "react";
import Header from "../../components/Header";
import * as Yup from "yup";
import profpic from "../../assets/contact/profpic.png";
import { useFormik, Formik, Form, Field, FormikHelpers } from "formik";
import axios from "axios";

const ContactPage: FC = () => {
  const initialFormValue: formSubmission = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (
    values: formSubmission,
    formikHelpers: FormikHelpers<formSubmission>
  ) => {
    const {status} = await axios.post("http://localhost:8080/message",values)
    if(status !== 201){
      console.error("failed to add Product")
    }
    formikHelpers.resetForm();
    alert("sent");
    return;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    subject: Yup.string()
      .required("Subject is required")
      .min(1, "Subject must be longer than 1 character"),
    message: Yup.string()
      .required("Message is required")
      .min(15, "Message should be longer!"),
  });

  return (
    <>
      <Header />
      <div className="px-[80px] mt-[215px] font-inter w-screen">
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
            <div className="">
              {/* FORM */}
              <Formik
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                initialValues={initialFormValue}
              >
                {({ errors, touched }) => (
                  <Form className="block mt-8">
                    <div >
                    <label className="text-lg mb-3 mt-8">Name</label>
                    <Field
                      className="min-w-[100%] text-2xl h-[38px] mb-6 mt-3 pb-4 border-b-[0.5px] border-gray-600"
                      name="name"
                      placeholder="James Riyadi"
                    />
                    {touched && errors.name && <h2 className="text-red-600 text-sm relative transform translate-y-[-10px]">{errors.name}</h2>}
                    </div>
                    <div>

                    <label className="text-lg mb-3 mt-8 w-[624px] ">
                      Email
                    </label>
                    <Field
                      className="min-w-[100%] text-2xl h-[38px] mb-6 border-b-[0.5px] border-gray-600 pb-4 mt-3"
                      name="email"
                      placeholder="jamesriyadi@aswewe.com"
                    />
                    {touched && errors.email && <h2 className="text-red-600 text-sm relative transform translate-y-[-10px]" >{errors.email}</h2>}
                    </div>
                    <div>

                    <label className="text-lg mb-3 mt-12">Subject</label>
                    <Field
                      className="min-w-[100%] text-2xl h-[38px]  mb-6 mt-3 pb-4 border-b-[0.5px] border-gray-600"
                      name="subject"
                      placeholder="James Riyadi"
                    />
                    {touched && errors.subject && <h2 className="text-red-600 text-sm relative transform translate-y-[-10px]" >{errors.subject}</h2>}
                    </div>
                    <div>

                    <label className="text-lg mb-3 mt-8">Message</label>
                    <Field
                      name="message"
                      className="min-w-[100%] text-2xl w-[624px] h-[158px] mb-8 border-b-[0.5px] border-gray-600 "
                      placeholder="Type your message"
                    />
                    {touched && errors.message && <h2 className="text-red-600 text-sm relative transform translate-y-[-10px]" >{errors.message}</h2>}
                    </div>
                    <button
                      className="bg-black text-white w-[193px] h-[70px] rounded-full text-lg   "
                      type="submit"
                    >Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        {/* FOOTER */}
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
