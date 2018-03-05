#LEETCODE 771 -  JEWELS AND STONES

#You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

#The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

#Example 1:
#Input: J = "aA", S = "aAAbbbb"
#Output: 3

#Example 2:
#Input: J = "z", S = "ZZ"
#Output: 0

jewels = "aA"
stones = "aAAbbbb"
total = 0

def count_stones_by_type( stones )
  hash = {}
  stones = stones.split('')

  stones.each_with_index do | stone, i |
    hash[ stone ] = 0 unless hash.key?( stone )
    hash[ stone ] += 1
  end

  hash
end

jewels = jewels.split('')
stones = count_stones_by_type stones

jewels.each do | jewel |
  total += stones[ jewel ]
end

puts total


