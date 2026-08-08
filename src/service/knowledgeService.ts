import { api } from "./api";

import type {
  Profile,
  Github,
  Skills,
} from "../types/knowledge";

export const knowledgeService = {

  async getProfile(): Promise<Profile> {

    const { data } =
      await api.get<Profile>(
        "/knowledge/profile"
      );

    return data;

  },

  async getGithub(): Promise<Github> {

    const { data } =
      await api.get<Github>(
        "/knowledge/github"
      );

    return data;

  },

  async getSkills(): Promise<Skills> {

    const { data } =
      await api.get<Skills>(
        "/knowledge/skills"
      );

    return data;

  },

};