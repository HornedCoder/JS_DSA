/*
Encode and Decode StringsDifficulty: MediumDescription:Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.Machine 1 (sender) has the function:Pythondef encode(self, strs):
    # ... your code
    return encoded_string
Machine 2 (receiver) has the function:Pythondef decode(self, s):
    # ... your code
    return strs
So Machine 1 does:string encoded_string = encode(strs);And Machine 2 does:vector<string> strs2 = decode(encoded_string);strs2 in Machine 2 should be the exact same as strs 
in Machine 1.Implement the encode and decode methods.Note:You are not allowed to use built-in serialization methods (such as eval, str, split, join, pickle, json, etc.)
to solve this problem.The string may contain any possible characters out of 256 valid ASCII characters. Your algorithm should be generalized enough to work on 
any possible characters.ExamplesExample 1:Input: dummy_input = ["neet","code","love","you"]Output: ["neet","code","love","you"]Explanation:Machine 1: codec.encode(["neet","code","love","you"]) 
outputs a custom encoded string, for example "4#neet4#code4#love3#you".Machine 2: codec.decode("4#neet4#code4#love3#you") returns
["neet","code","love","you"].Example 2:Input: dummy_input = ["we", "say", ":", "yes", "!@#$%^&*()"]Output: ["we", "say", ":", "yes", "!@#$%^&*()"]
  Explanation: The algorithm should be able to handle special characters correctly.
Example 3:Input: dummy_input = []Output: []Example 4:Input: dummy_input = [""]Output: [""]Constraints:$0 \le \text{strs.length} \le 200$$0 \le \text{strs}[i]\text{.length} \le 200$strs[i] 
  contains any possible characters out of 256 valid ASCII characters.A Hint on the Standard ApproachBecause the strings can contain any ASCII character (including spaces, commas, or # symbols), 
simply joining them with a delimiter like strs.join(",") will fail if a string naturally contains a comma.The standard approach is to use Chunked Transfer 
Encoding (Length + Delimiter). For every string in the array, you encode it as:[length of string] + [#] + [actual string].
For example, the array ["hello", "world"] becomes "5#hello5#world". When decoding, you read the integer until you hit the #,
  which tells you exactly how many characters to extract next!

*/
class Codec {
    /**
     * Encodes a list of strings to a single string.
     *
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let encodedString = "";
        for (let s of strs) {
            // Format: [length of string] + '#' + [string]
            encodedString += s.length + "#" + s;
        }
        return encodedString;
    }

    /**
     * Decodes a single string to a list of strings.
     *
     * @param {string} s
     * @return {string[]}
     */
    decode(s) {
        let decodedStrings = [];
        let i = 0;
        
        while (i < s.length) {
            // j will look for the delimiter '#'
            let j = i;
            while (s[j] !== "#") {
                j++;
            }
            
            // The number before the '#' tells us the length of the string
            let length = parseInt(s.substring(i, j), 10);
            
            // Extract the actual string using the length we just found
            // The string starts at j + 1 and goes up to j + 1 + length
            let parsedString = s.substring(j + 1, j + 1 + length);
            decodedStrings.push(parsedString);
            
            // Move the pointer i to the start of the next encoded string
            i = j + 1 + length;
        }
        
        return decodedStrings;
    }
}

// Your Codec object will be instantiated and called as such:
// const codec = new Codec();
// codec.decode(codec.encode(strs));
