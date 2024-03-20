function capitalize(string) {
  var words = string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
  return words;
}

export { capitalize };
