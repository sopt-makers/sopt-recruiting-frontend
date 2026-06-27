export const normalizeHexColor = (hex: string) => (hex.startsWith('#') ? hex : `#${hex}`);

export const toBlendedHexColor = (hex: string, target: number, ratio: number) => {
  const rgb = parseInt(hex.replace('#', ''), 16);

  const blendChannel = (shift: number) => Math.round(((rgb >> shift) & 0xff) * (1 - ratio) + target * ratio);
  const toHex = (channel: number) => channel.toString(16).padStart(2, '0');

  return `#${toHex(blendChannel(16))}${toHex(blendChannel(8))}${toHex(blendChannel(0))}`;
};
