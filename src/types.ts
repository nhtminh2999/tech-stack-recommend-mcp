export type Scalability = "low" | "medium" | "high";
export type Budget = "low" | "medium" | "high";
export type ProjectType =
  | "web-app"
  | "api"
  | "real-time"
  | "mobile"
  | "data-pipeline"
  | "e-commerce"
  | "cms"
  | "microservices";

export interface Stack {
  name: string; // e.g. "MERN"
  displayName: string; // e.g. "MERN Stack"
  languages: string[]; // e.g. ["javascript", "typescript"]
  tags: string[]; // searchable keywords
  scalability: Scalability;
  cost: Budget; // infra + licensing cost tier
  bestFor: ProjectType[];
  strengths: string[];
  weaknesses: string[];
  components: {
    frontend?: string;
    backend: string;
    database: string;
    runtime?: string;
  };
  resources: {
    docs: string;
    github?: string;
  };
}
