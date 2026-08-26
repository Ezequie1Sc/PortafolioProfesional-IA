import { api } from "./api";

let wakeUpPromise: Promise<boolean> | null = null;

export const wakeUpServer = (): Promise<boolean> => {
  // Si ya hay una petición despertando el servidor,
  // reutilizamos la misma.
  if (wakeUpPromise) {
    return wakeUpPromise;
  }

  wakeUpPromise = new Promise(async (resolve) => {
    const maxAttempts = 5;
    const retryDelay = 3000;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        console.log(`❤️ Despertando backend... intento ${attempt}`);

        const response = await api.get("/health", {
          timeout: 30000,
        });

        if (response.status === 200) {
          console.log("🟢 Backend listo 🔥");

          resolve(true);
          return;
        }
      } catch (error) {
        console.log(
          `⏳ Backend aún despertando... intento ${attempt}/${maxAttempts}`
        );
      }

      if (attempt < maxAttempts) {
        await new Promise((resolve) =>
          setTimeout(resolve, retryDelay)
        );
      }
    }

    console.warn("🔴 No se pudo confirmar que el backend esté listo");

    wakeUpPromise = null;

    resolve(false);
  });

  return wakeUpPromise;
};