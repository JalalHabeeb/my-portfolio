"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/senderEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

interface FormData {
  senderEmail: string;
  message: string;
}

const Contact: React.FC = () => {
  const { ref } = useSectionInView("Contact");

  const [formData, setFormData] = useState<FormData>({
    senderEmail: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataObject = new FormData();
    formDataObject.append("senderEmail", formData.senderEmail);
    formDataObject.append("message", formData.message);

    const { data, error } = await sendEmail(formDataObject);
    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully");

    // Clear the form after successful submission
    setFormData({
      senderEmail: "",
      message: "",
    });
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 text-center -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jalalhabeeb@gmail.com">
          jalalhabeeb@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          value={formData.senderEmail}
          onChange={handleInputChange}
          required
          maxLength={500}
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={5000}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
