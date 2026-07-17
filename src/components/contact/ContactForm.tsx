"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "../ui/textarea";
import { Send } from "lucide-react";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("Email must be a valid email."),
  message: z.string().min(2, { message: "Write something." }),
});

function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const emailjs = (await import("@emailjs/browser")).default;
    emailjs
      .send("service_bei77gf", "template_ib88cr4", data, "3B5_KCYznJHc6RLTz")
      .then(
        function (response) {
          form.reset();
          toast({
            title: "Email sent successfully.",
          });
        },
        function (error) {
          toast({
            title: "Email not sent.",
          });
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-code text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold mb-1 ml-1">
                Name
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your name" 
                  {...field} 
                  className="bg-background/50 dark:bg-zinc-950/40 border border-border/60 hover:border-border/80 focus-visible:border-brandColor focus-visible:ring-brandColor/25 rounded-2xl px-4 py-3.5 placeholder:text-muted-foreground/60 transition-all duration-300 w-full font-sans text-sm focus-visible:ring-offset-0 focus-visible:ring-1" 
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-code text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold mb-1 ml-1">
                Email
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your email" 
                  {...field} 
                  className="bg-background/50 dark:bg-zinc-950/40 border border-border/60 hover:border-border/80 focus-visible:border-brandColor focus-visible:ring-brandColor/25 rounded-2xl px-4 py-3.5 placeholder:text-muted-foreground/60 transition-all duration-300 w-full font-sans text-sm focus-visible:ring-offset-0 focus-visible:ring-1" 
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-code text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold mb-1 ml-1">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here..."
                  {...field}
                  rows={6}
                  className="bg-background/50 dark:bg-zinc-950/40 border border-border/60 hover:border-border/80 focus-visible:border-brandColor focus-visible:ring-brandColor/25 rounded-2xl p-4 placeholder:text-muted-foreground/60 transition-all duration-300 w-full resize-none font-sans text-sm focus-visible:ring-offset-0 focus-visible:ring-1"
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1" />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          size="lg" 
          aria-label="Submit Contact Form"
          className="group/btn bg-gradient-to-r from-brandColor to-orange-500 hover:scale-[1.02] active:scale-95 text-white rounded-full shadow-lg shadow-brandColor/25 hover:shadow-brandColor/40 transition-all duration-300 px-8 py-3.5 font-bold font-code tracking-wider text-xs uppercase flex items-center gap-2.5 w-full sm:w-auto justify-center border-none cursor-pointer"
        >
          <span>Send Message</span>
          <Send className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
