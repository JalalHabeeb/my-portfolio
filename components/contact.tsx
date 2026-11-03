"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/senderEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  // Controlled fields: React 19 resets uncontrolled fields after every form
  // action, which would wipe the message when sending fails.
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-4 text-center text-gray-600 dark:text-white/60">
        Please contact me directly at{" "}
        <a
          className="font-medium text-accent-600 underline underline-offset-4 hover:text-accent-700 dark:text-accent-300 dark:hover:text-accent-200"
          href="mailto:jalalhabeeb@gmail.com"
        >
          jalalhabeeb@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col items-center"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
          setSenderEmail("");
          setMessage("");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          required
          maxLength={500}
          aria-label="Your email"
          className="h-14 px-4 w-full rounded-xl border border-black/10 bg-white/70 text-gray-950 placeholder:text-gray-400 backdrop-blur transition focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-500/15 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-accent-400"
          placeholder="Your email"
        />
        <textarea
          aria-label="Your message"
          className="my-3 h-52 p-4 w-full rounded-xl border border-black/10 bg-white/70 text-gray-950 placeholder:text-gray-400 backdrop-blur transition focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-500/15 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-accent-400"
          placeholder="Your message"
          required
          maxLength={5000}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
