export const getSessionStorage = (key: string): string | null => {
  return typeof window !== 'undefined' ? sessionStorage.getItem(key) : null;
};

export const setSessionStorage = (key: string, value: string): void => {
  return sessionStorage.setItem(key, value);
};

export const removeSessionStorage = (): void => {
  return sessionStorage.clear();
};
