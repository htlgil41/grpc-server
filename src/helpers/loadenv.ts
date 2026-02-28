export function LoadEnvOrThrow<T>(key: string): T {

    const env = process.env[key] as T;
    if (!env) throw new Error(`No se ha encontrado la vaidable ${key}`);
    return env;
}