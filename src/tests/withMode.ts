import { vi } from 'vitest';

export type BuildMode = 'sopt' | 'makers';

export const withMode = async (mode: BuildMode, fn: () => void | Promise<void>): Promise<void> => {
  const previous = __IS_MAKERS__;
  vi.stubGlobal('__IS_MAKERS__', mode === 'makers');

  try {
    await fn();
  } finally {
    vi.stubGlobal('__IS_MAKERS__', previous);
  }
};
