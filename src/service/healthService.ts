import { api } from "./api";

let wakeUpPromise: Promise<boolean> | null = null;

const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const wakeUpServer = (): Promise<boolean> => {
  if (wakeUpPromise) {
    return wakeUpPromise;
  }

  wakeUpPromise = (async () => {
    let attempt = 1;

    while (true) {
      try {
        console.log(
          `❤️ Preparando backend e IA... intento ${attempt}`
        );

        await api.get("/warmup", {
          timeout: 60000,
        });

        console.log("🟢 Backend e IA listos 🔥");

        return true;

      } catch (error) {
        console.warn(
          `⏳ Backend o IA todavía preparando... intento ${attempt}`
        );

        attempt++;

        await wait(3000);
      }
    }
  })();

  return wakeUpPromise;
};