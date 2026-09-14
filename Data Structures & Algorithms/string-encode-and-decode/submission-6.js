class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
encode(strs) {
        let output = '';
        for (const wrds of strs){
            output = `${output}#${wrds.split("").length}#${wrds}`;
        }
      return output;
    }
  
decode(str) {
  const out = [];
  let i = 0;

  console.log(str)
  while (i < str.length) {
    // 1) Skip stray delimiters (handles cases like "#3#abc" or "3#abc#5#hello")
    while (i < str.length && str[i] === "#") i++;

    if (i >= str.length) break;

    // 2) Parse length digits
    let j = i;
    while (j < str.length && str[j] >= "0" && str[j] <= "9") j++;

    if (j === i) {
      throw new Error(`Invalid encoding: expected digits at index ${i}, found "${str[i]}"`);
    }

    const len = parseInt(str.slice(i, j), 10);

    // 3) Next must be '#'
    if (str[j] !== "#") {
      throw new Error(`Invalid encoding: expected "#" after length at index ${j}, found "${str[j] ?? "EOF"}"`);
    }

    const start = j + 1;
    const end = start + len;

    if (end > str.length) {
      throw new Error(`Invalid encoding: length ${len} goes past end of string (index ${start}..${end})`);
    }

    out.push(str.slice(start, end));
    i = end; // next chunk starts right after the word
  }

  return out;
}
}