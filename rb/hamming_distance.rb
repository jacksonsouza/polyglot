#LEETCODE 461 - HAMMING DISTANCE


#The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
#Given two integers x and y, calculate the Hamming distance.
#Example:
#Input: x = 1, y = 4

#Output: 2

#Explanation:
#1   (0 0 0 1)
#4   (0 1 0 0)
       #↑   ↑
#The above arrows point to positions where the corresponding bits are different.



def make_fixnum( a, length )
  #Includes all interesting bits to a certain length
  length.downto(0).map { | n | a[ n ] }.join
end

def calculate_distance( x, y )
  x = x.split( '' )
  y = y.split( '' )
  distance = 0

  y.each_with_index do | bit, i |
   distance += 1 if bit != x[ i ]
  end

  distance
end

a = 15
b = 4
fixnum_length = [ a, b ].max.to_s(2).length

a = make_fixnum( a, fixnum_length )
b = make_fixnum( b, fixnum_length )


puts a, b
puts calculate_distance( a, b )


