"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { X } from "lucide-react";

interface ContactDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.length > 100) {
    errors.name = "Name must be less than 100 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  } else if (data.email.length > 255) {
    errors.email = "Email must be less than 255 characters";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (data.message.length > 1000) {
    errors.message = "Message must be less than 1000 characters";
  }

  return errors;
};

export const ContactDialog: React.FC<ContactDialogProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
        details?: string[];
      };

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setFormErrors({});
        // Auto-close after success
        setTimeout(() => {
          onOpenChange(false);
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
        if (response.status === 429) {
          setError(
            "Too many requests. Please wait before sending another message.",
          );
        } else if (result.details && result.details.length > 0) {
          setError(result.details.join(", "));
        } else {
          setError(result.error ?? "Unable to send message. Please try again.");
        }
      }
    } catch (error) {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormData,
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear field error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleClose = () => {
    if (status !== "sending") {
      onOpenChange(false);
      // Reset form after closing
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormErrors({});
        setError(null);
        setStatus("idle");
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogClose
          className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
          disabled={status === "sending"}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Send me a message and I&apos;ll get back to you soon.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="p-4 text-center">
            <div className="rounded-md border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200">
              <h3 className="font-medium">Message sent successfully!</h3>
              <p className="mt-1 text-sm">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 p-4">
            {status === "error" && error && (
              <div className="bg-destructive/10 border-destructive/30 text-destructive rounded-md border p-3 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "name")
                }
                required
                maxLength={100}
                aria-label="Your Name"
                aria-invalid={!!formErrors.name}
                aria-describedby={formErrors.name ? "name-error" : undefined}
                disabled={status === "sending"}
                className={formErrors.name ? "border-destructive" : ""}
              />
              {formErrors.name && (
                <p id="name-error" className="text-destructive text-sm">
                  {formErrors.name}
                </p>
              )}
              <p className="text-muted-foreground text-xs">
                {formData.name.length}/100 characters
              </p>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, "email")
                }
                required
                maxLength={255}
                aria-label="Your Email"
                aria-invalid={!!formErrors.email}
                aria-describedby={formErrors.email ? "email-error" : undefined}
                disabled={status === "sending"}
                className={formErrors.email ? "border-destructive" : ""}
              />
              {formErrors.email && (
                <p id="email-error" className="text-destructive text-sm">
                  {formErrors.email}
                </p>
              )}
              <p className="text-muted-foreground text-xs">
                {formData.email.length}/255 characters
              </p>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Message <span className="text-destructive">*</span>
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handleInputChange(e, "message")
                }
                required
                minLength={10}
                maxLength={1000}
                rows={4}
                aria-label="Your Message"
                aria-invalid={!!formErrors.message}
                aria-describedby={
                  formErrors.message ? "message-error" : undefined
                }
                disabled={status === "sending"}
                className={formErrors.message ? "border-destructive" : ""}
              />
              {formErrors.message && (
                <p id="message-error" className="text-destructive text-sm">
                  {formErrors.message}
                </p>
              )}
              <p className="text-muted-foreground text-xs">
                {formData.message.length}/1000 characters (minimum 10)
              </p>
            </div>

            <DialogFooter>
              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
