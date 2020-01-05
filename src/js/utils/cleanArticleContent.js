const cleanArticleContent = (arr) => {
  const articleArr = [...arr];

  const cleanedArray = articleArr.reduce((array, article, index) => {
    const charRegex = / \[.*\]$/;
    const articleArrCopy = [...articleArr];
    if (article.content !== null && article.content.match(charRegex)) {
      const cleanedContentStr = article.content.replace(charRegex, '');
      articleArrCopy[index].cleanedContent = cleanedContentStr;
      array.push(articleArrCopy[index]);
    } else {
      articleArrCopy[index].cleanedContent = articleArrCopy[index].content;
      array.push(articleArrCopy[index]);
    }
    return array;
  }, []);
  return cleanedArray;
};

export default cleanArticleContent;
