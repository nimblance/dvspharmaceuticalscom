import { type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface ContactSubmission extends InsertContact {
  id: string;
  submittedAt: Date;
}

export interface IStorage {
  saveContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, ContactSubmission>;

  constructor() {
    this.contacts = new Map();
  }

  async saveContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const contact: ContactSubmission = {
      ...insertContact,
      id,
      submittedAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }
}

export const storage = new MemStorage();
