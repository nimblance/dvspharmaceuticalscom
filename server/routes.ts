import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body with Zod schema
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({
          error: "Validation failed",
          details: result.error.errors,
        });
      }

      // Save contact submission
      const contact = await storage.saveContactSubmission(result.data);

      // In a real application, this would send an email notification
      // For now, we'll just return success
      console.log("New contact submission:", {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        company: contact.company,
        submittedAt: contact.submittedAt,
      });

      return res.status(200).json({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
        submissionId: contact.id,
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        error: "An error occurred processing your request. Please try again later.",
      });
    }
  });

  // Optional: Get all contact submissions (for admin/testing purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      return res.status(200).json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return res.status(500).json({
        error: "An error occurred fetching contacts.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
