# LEETCODE 760 - FIND ANAGRAM MAPPINGS


#Given two lists A and B, and B is an anagram of A. B is an anagram of A means B is made by randomizing the order of the elements in A.

#We want to find an index mapping P, *FROM A TO B*. A mapping P[i] = j means the ith element in A appears in B at index j.

#These lists A and B may contain duplicates. If there are multiple answers, output any of them.

#For example, given

#A = [12, 28, 46, 32, 50]
#B = [50, 12, 32, 46, 28]
#We should return
#P as [1, 4, 3, 2, 0]

#P[0] = 1 because the 0th element of A appears at B[1]
#P[1] = 4 because the 1st element of A appears at B[4]

def array_to_index_hash ( arr )
  hash = {}

  arr.each_with_index do | val, i |
    hash[ val.to_s ] = i
  end

  hash
end

array_a = [12, 28, 46, 32, 50, 23]
array_b = [50, 12, 32, 46, 28]

index_hash = array_to_index_hash array_b
output = []

array_a.each do | val |
  b_index = index_hash[ val.to_s ]
  unless b_index.nil?
    output << b_index
  end
end

puts output.to_s

