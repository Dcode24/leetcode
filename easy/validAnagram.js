function isAnagram(s, t) {
  // Parameters: two strings 's', 't'
  // return true if t is an anagram of s else return false
  // example:Input: s = "anagram", t = "nagaram"
  // example: Output: true

  if (s.length !== t.length) return false;
  const count = {};
  const N = s.length;

  for (let i = 0; i < N; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    if (!count[t[i]]) count[t[i]] = 0;
    count[s[i]]++;
    count[t[i]]--;
  }
  for (let ch in count) {
    if (count[ch] !== 0) return false;
  }
  return true;
}
