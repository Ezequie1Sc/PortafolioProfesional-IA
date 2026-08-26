import { api } from "./api";

let wakeUpPromise: Promise<boolean> | null = null;

const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const wakeUpServer = (): Promise<boolean> => {
  // Si el servidor ya se está despertando,
  // reutilizamos la misma petición.
  if (wakeUpPromise) {
    return wakeUpPromise;
  }

  wakeUpPromise = (async () => {
    let attempt = 1;

    while (true) {
      try {
        console.log(`❤️ Despertando backend... intento ${attempt}`);

        await api.get("/health", {
          timeout: 30000,
        });

        console.log("🟢 Backend listo 🔥");

        return true;
      } catch {
        console.warn(
          `⏳ El backend sigue despertando... intento ${attempt}`
        );

        attempt++;

        // Esperamos y volvemos a intentar
        await wait(3000);
      }
    }
  })();

  return wakeUpPromise;
};