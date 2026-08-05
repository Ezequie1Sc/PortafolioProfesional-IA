import axios from "axios";
import type { ChatRequest, ChatResponse } from "../types/chat";

const api = axios.create({
  baseURL: import.meta.env.VITE_CHAT_API,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const chatService = {
  async sendMessage(body: ChatRequest): Promise<ChatResponse> {
    const { data } = await api.post<ChatResponse>("/chat", body);
    return data;
  },
};