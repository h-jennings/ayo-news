const cleanArticleContent = (arr) => {
  const articleArr = [...arr];

  // Mapping through array copy
  const cleanedArray = articleArr.map((article) => {
    const articleObj = {
      ...article,
    };
    // Grabbing content property
    const {
      content,
    } = articleObj;
    // Creating new object property to store the modified content string
    articleObj.cleanedContent = '';

    // Checking content string for information and splitting the characters for evaluation
    const containsBracket = content.includes('[');
    const charArr = content.split('');
    const charIndex = charArr.indexOf('[');

    // Creating array that maps over all of the chars in original content string,
    // creating a new content array with the chars that meet the criteria
    const cleanedContentArr = charArr.map((char, index) => {
      if (index < charIndex || !containsBracket) {
        return char;
      }
    });

    // Setting the new object property `cleanedContent`
    // with the cleaned content array joined into one string
    articleObj.cleanedContent = (cleanedContentArr.join(''));

    // return object with added property
    return articleObj;
  });
  return cleanedArray;
};

export default cleanArticleContent;
