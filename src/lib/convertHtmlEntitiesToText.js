export const convertHtmlEntitiesToText = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  const decodedString = doc.body.innerHTML;
  const textarea = document.createElement('textarea');
  textarea.innerHTML = decodedString;
  return textarea.value;
};
