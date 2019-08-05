export default function(regex: RegExp, string: string): Boolean {
  const match = regex.exec(string);
  if (match === null) return false;
  return match[0].length === string.length;
}
