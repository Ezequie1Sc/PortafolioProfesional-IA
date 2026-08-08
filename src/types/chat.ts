export type MessageRole = "user" | "assistant";

export type ChatIntent =
  | "general"
  | "profile"
  | "project"
  | "contact"
  | "education"
  | "experience"
  | "skill"
  | "certification"
  | "github"
  | "unknown";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: string;
  intent?: ChatIntent;
}

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  response: string;
  intent: ChatIntent;
}

export interface UseChatReturn {
  messages: ChatMessage[];
  loading: boolean;
  error: string | null;
  sendMessage: (message: string) => Promise<void>;
  clearChat: () => void;
}