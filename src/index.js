module.exports = function check(str, bracketsConfig) {
  var bracketsDict = new Map(bracketsConfig);
  var openBrackets = [];
  var closeResultString = "";
  var closeInputString = "";
  for(var i = 0; i < str.length; i++)
  {  if(bracketsDict.has(str[i]) && bracketsDict.get(str[i]) !== openBrackets[openBrackets.length - 1])
    {
      openBrackets.push(str[i]);
    }
    else
    {
      if(openBrackets.length === 0)
        return false;
      closeResultString += bracketsDict.get(openBrackets.pop());
      closeInputString += str[i];
    }
  }
  return closeInputString === closeResultString && openBrackets.length === 0;
}
