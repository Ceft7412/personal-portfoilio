export default function splitStringUsingRegex(inputString: string): string[] {
  const characters: string[] = [];

  const regex = new RegExp("[\\s\\S]", "gu");
  let match;
  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);
  }
  return characters;
}
