# Prefix Math
Take a prefix `P` and match in given dictionary 
## Approach 1
- Bruteforce
- len(P) * n
## Apply sorting on dictionary 
- len(P) * log(n)
## Trie
- Compress all duplicate prefix
- Edge store character
- Node doesn't store data
- End word is marked as word complete indicator
## Radix trie
- Extension of Trie
- Edge are not character, instead string
- It is much more compress
- Modification is complicated
# Suffix Trie
- Exactly same as Trie
- It contains suffix instead of prefix
- Every substring is prefix of suffix
- It's nothing but, prefix of suffix
Following problems are solved
- substring serach
- substring exist
- common substring between two file

Following are suffixes for `mississippi`
- i
- pi
- ppi
- ippi
- sippi
- ssippi
- issippi
- sissippi
- ssissippi
- ississippi
- mississippi

If you are try to build Trie for these suffixes then it would be huge.

## Implementation
- A suffix tree is a compressed trie containing all the suffixes of the given text as their keys and positions in the text as their values.
- Suffix tree allows fast implementation of many important string operations
## Reference 
https://www.youtube.com/watch?v=VA9m_l6LpwI
https://www.youtube.com/watch?v=UrmjCSM7wDw

## Properties of Suffix Tree
- A suffix tree of a text X of size n from an alphabet of size d
- Stores all the n(n-1)/2 suffixes of X in O(n) spaces
- Can be constructed in O(dn) time

Following are some problems