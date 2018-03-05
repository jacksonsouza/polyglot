#LEETCODE 728 - SELF DIVIDING NUMBERS

#A self-dividing number is a number that is divisible by every digit it contains.
#For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
#Also, a self-dividing number is not allowed to contain the digit zero.
#Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

#Example 1:

#Input:
#left = 1, right = 22

#Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]


upper_bound = 22
lower_bound = 1
output = []


(lower_bound..upper_bound).each do | number |
  digits = number.to_s.chars.map(&:to_i)
  self_dividing = true

  digits.each do | digit |
    self_dividing = false if digit == 0 || number % digit != 0
  end

  output << number if self_dividing
end

puts output


