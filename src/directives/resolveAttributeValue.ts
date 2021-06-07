export default function resolveAttributeValue(key: string, value?: any) {
  if (!value) return value;
  return value.hex ? value.hex() : value;
}
