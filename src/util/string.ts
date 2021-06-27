
  export const camelToSentenceCase = (string: string) => {
    if (!string) return string;
    const tokens = string
      .replace(/([A-Z]+|[0-9]+)/g, ' $1')
      .trim()
      .split(' ');
    return tokens
      .filter((t) => t && t.length)
      .map((token) => {
        const trimmed = token.trim();
        return trimmed[0].toUpperCase() + trimmed.substring(1);
      })
      .join(' ');
  }

  export const camelToKebabCase = (string: string) => {
    if (!string) return string;
    const tokens = string
      .replace(/([A-Z]+)/g, ' $1')
      .trim()
      .split(' ');
    return tokens
      .map((token) => token.trim().toLowerCase())
      .join('-');
  }

  export const toProperCase = (string: string) => {
    if (!string) return string;
    return string[0].toUpperCase() + string.substring(1);
  }

  export const mutateWhile = (
    original: string,
    condition: { (value: string): boolean },
    transform: { (value: string): string },
  ) => {
    let result = original;
    while (condition(result)) {
      result = transform(result);
    }
    return result;
  }

  export const toCamelCase = (string: string) => {
    if (!string) return string;
    const temp = string.replace(/\s/g, '').trim();
    if (temp.length === 0) return '';
    return temp[0].toLowerCase() + temp.substring(1);
  }

  export const removeDoubleSpaces = (string: string) => (
    mutateWhile(
      string,
      (s) => s.indexOf('  ') >= 0,
      (s) => s.replaceAll(/\s\s/g, ' '),
    ).trim()
  )

