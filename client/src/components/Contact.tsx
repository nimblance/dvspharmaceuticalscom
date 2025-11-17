import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function Contact() {
  const { toast } = useToast();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: async (error: unknown) => {
      let message = "Please try again later.";
      
      // Extract error message from Response object
      if (error instanceof Response) {
        try {
          const errorData = await error.json();
          message = errorData.error || errorData.message || message;
        } catch {
          message = error.statusText || message;
        }
      } else if (error instanceof Error) {
        message = error.message;
      }
      
      setErrorMessage(message);
      toast({
        title: "Error sending message",
        description: message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    // Only clear error message on new submission, keep mutation state
    setErrorMessage("");
    contactMutation.mutate(data);
  };

  // Reset mutation state when user starts editing (clears success/error banners)
  const handleFieldChange = () => {
    if (contactMutation.isSuccess || contactMutation.isError) {
      contactMutation.reset();
      setErrorMessage("");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Ready to explore strategic partnerships? Contact us to discuss how we can support your business development goals.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form - 3 columns */}
          <div className="md:col-span-3">
            <Card className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Inline Status Message */}
                  {contactMutation.isSuccess && (
                    <div className="p-4 rounded-md bg-primary/10 border border-primary/20 text-primary" data-testid="status-success">
                      <p className="text-sm font-medium">✓ Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}
                  {contactMutation.isError && (
                    <div className="p-4 rounded-md bg-destructive/10 border border-destructive/20 text-destructive" data-testid="status-error">
                      <p className="text-sm font-medium">✗ {errorMessage || "Failed to send message. Please try again."}</p>
                    </div>
                  )}
                  {contactMutation.isPending && (
                    <div className="p-4 rounded-md bg-muted border" data-testid="status-pending">
                      <div className="flex items-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin text-primary" />
                        <p className="text-sm font-medium text-muted-foreground">Sending your message...</p>
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              data-testid="input-name"
                              disabled={contactMutation.isPending}
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                handleFieldChange();
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@company.com"
                              data-testid="input-email"
                              disabled={contactMutation.isPending}
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                handleFieldChange();
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company name"
                            data-testid="input-company"
                            disabled={contactMutation.isPending}
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange();
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your business development needs..."
                            rows={6}
                            data-testid="input-message"
                            disabled={contactMutation.isPending}
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange();
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto min-w-[200px]"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          {/* Contact Info - 2 columns */}
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6 hover-elevate transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground">
                  Reach out to discuss partnership opportunities
                </p>
                <a
                  href="mailto:contact@dvspartners.com"
                  className="text-primary hover:underline font-medium inline-block"
                  data-testid="link-email"
                >
                  contact@dvspartners.com
                </a>
              </div>
            </Card>

            <Card className="p-6 hover-elevate transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Global Reach</h3>
                <p className="text-muted-foreground">
                  Operating across MENA, LATAM, APAC, and Europe with strategic partnerships worldwide
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM (CET)
                </p>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
