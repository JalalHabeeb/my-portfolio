"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, isValidEmail, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500) || !isValidEmail(senderEmail)) {
    return {
      error: "Invalid Sender Email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // Resend throws on a missing key, so check before creating the client.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error: "Email service is not configured",
    };
  }
  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "jalalhabeeb@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail,
      }),
    });

    // Resend returns API failures instead of throwing them.
    if (error) {
      return { error: error.message };
    }

    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
