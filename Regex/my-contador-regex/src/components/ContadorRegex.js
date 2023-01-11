function getMatches(str, regex) {
  var m = str.match(regex);
  return m === null ? 0 : m.length;
}

export const ContadorRegex = ({ titulo, texto, regex }) => (
  <p>
    {getMatches(texto, regex)}
  </p>
);