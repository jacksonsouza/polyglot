# anagrams.rb
# Should take in an array of strings and return an object with each string as a keys and an array of matches as the values

anagrams = ["dog", "god", "odg", "whale", "star", "tsar"]
sorted = anagrams.map { |x| x.chars.sort.join}

# Init return hash with word:[] as pairs
result = Hash[anagrams.map { |x| [x, []]}]

sorted.each_with_index do |n, i|
  word = anagrams[i]
  sorted.each_with_index do |o, j|
    # If it has a sorted match and doesn't equal itself, push unsorted word to matches
    if n == o && word != anagrams[j]
      result[word] = result.has_key?(word) ? result[word].push(anagrams[j]) : false
    end
  end
end

puts result
