// src/components/common/contact-button.tsx
"use client";

import React from "react";
import {
  DiagonalButton,
  DiagonalButtonProps,
} from "@/components/ui/diagonal-button";
import { Button, ButtonProps } from "@/components/ui/button";
import { useContactForm } from "@/contexts/contact-form.context";

interface ContactButtonProps {
  text?: string;
  message?: string;
  variant?: "default" | "diagonal";
  buttonProps?: ButtonProps | Omit<DiagonalButtonProps, "action">;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  text = "Agendar Consultoria",
  message,
  variant = "default",
  buttonProps,
}) => {
  const { openContactForm } = useContactForm();

  const handleClick = () => {
    openContactForm(message);
  };

  if (variant === "diagonal") {
    return (
      <DiagonalButton
        action={handleClick}
        {...(buttonProps as Omit<DiagonalButtonProps, "action">)}
      >
        {text}
      </DiagonalButton>
    );
  }

  return (
    <Button onClick={handleClick} {...(buttonProps as ButtonProps)}>
      {text}
    </Button>
  );
};

export default ContactButton;
