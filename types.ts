export type SlideID = "main" | "toc" | "team" | "progress" | "details" | "features" | "f-detail-1" | "f-detail-2" | "f-detail-3" | "f-detail-4" | "trouble-1" | "trouble-2" | "trouble-3" | "roadmap";

export interface TeamMember {
  name: string;
  role: string;
  parts: string[];
  image: string;
}

export interface Feature {
  title: string;
  desc: string;
  image: string;
}

export interface Trouble {
  issue: string;
  solution: string;
  tag: string;
}
