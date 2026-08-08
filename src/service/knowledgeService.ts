import { api } from "./api";

export const knowledgeService = {

  async getProfile() {

    const { data } =
      await api.get("/knowledge/profile");

    return data;

  },

  async getGithub() {

    const { data } =
      await api.get("/knowledge/github");

    return data;

  },

  async getSkills() {

    const { data } =
      await api.get("/knowledge/skills");

    return data;

  },

};