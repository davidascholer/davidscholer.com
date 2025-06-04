"use client";
import type React from "react";
import { cn, sendEmail } from "@/lib/utils";
import { IconMessage } from "@tabler/icons-react";
import { Label } from "@/components/ui/form/Label";
import { Input } from "@/components/ui/form/Input";
import { TextArea } from "@/components/ui/form/TextArea";
import { toast } from "sonner";

export default function FormComponent() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const body: string = `
      From: ${data.name} <${data.email}>
      Message: ${data.message}
    `;
    const emailResponse = sendEmail({ msg: body });
    if (!emailResponse) {
      toast("Failed to send message. Please try again later.");
      return;
    }
    toast("Message sent successfully!");
    const formElement = document.getElementById(
      "email-form"
    ) as HTMLFormElement;
    if (formElement) {
      formElement.reset();
    }
  };
  return (
    <div className="shadow-input mx-auto w-full rounded-none bg-white dark:bg-black p-4 md:rounded-2xl md:p-8 min-w-[300px] sm:min-w-[550px] md:min-w-[600px]">
      <h2 className="text-xl font-bold text-primary">
        Get In Touch!
      </h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Send me any questions you may have.
      </p>

      <form id="email-form" className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="name">Your name</Label>
            <Input id="name" placeholder="Jane Doe" type="text" name="name" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            placeholder="you@yourdomain.com"
            type="email"
            name="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">What would you like to know?</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Ask me anything..."
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <div className="flex flex-col space-y-4 ">
          <button
            onClick={() => {
              window.open(
                "mailto:davidascholer@gmail.com?subject=Inquiry%20from%20DavidScholer.com"
              );
            }}
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2  px-4 font-medium dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] border-2 border-primary rounded-xl cursor-pointer"
          >
            <IconMessage className="h-4 w-4 text-neutral-800 dark:text-neutral-300 " />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Email me directly
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-primary-foreground to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
