import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';



import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    messagee: "",
  });
  const[loading ,setLoading] = useState(false);

  const handleChange = (e) =>{
    const{ name, value } = e.target;
    setForm({...form, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.name,
      to_name: "Parmida",
      messagee: form.messagee,
      reply_to: form.email,
    };

    console.log("Sending email with params:", templateParams); // ✅ Debug log

    emailjs
      .send(
       'service_fmmf9le', 'template_c5wcvcv', // ✅ Your template ID
        templateParams,
        "QNjfNYYZuDZF1s6rT" // ✅ Your public key
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you! I'll get back to you ASAP.");
          setForm({ name: "", email: "", messagee: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error('Oops, something went wrong. Please try again.');
        }
      );
  };


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left','tween' ,0.2 ,1 )}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact. </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What is your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
                outlined-none border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What is Email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
                outlined-none border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows='7'
                name="messagee"
                value={form.messagee}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
                outlined-none border-none font-medium"/>
            </label>

            <button
              type='submit'
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold
              shadow-md shadow-primary rounded-xl">
                {loading ? 'sending...' : 'send'}
              </button>
          </form>
      </motion.div>
      <motion.div variants={slideIn('right','tween' ,0.2 ,1 )}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact ,'contact')