import { api } from "./api";

import type {
  ChatRequest,
  ChatResponse,
} from "../types/chat";

export const chatService = {

  async sendMessage(
    body: ChatRequest
  ): Promise<ChatResponse> {

    const { data } =
      await api.post<ChatResponse>(
        "/chat",
        body
      );

    return data;

  },

};