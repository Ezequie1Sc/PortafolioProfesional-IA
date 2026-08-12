import { api } from "./api";

export const wakeUpServer = async (): Promise<boolean> => {
  try {
    await api.get("/health", {
      timeout: 70000,
    });

    console.log("🔥 Backend listo");

    return true;
  } catch (error) {
    console.warn("⏳ El backend todavía está despertando...");

    return false;
  }
};