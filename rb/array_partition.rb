#LEETCODE 561 - ARRAY PARTITION I

#Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

#Example 1:
#Input: [1,4,3,2]

#Output: 4
#Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).


pairs = 2
numbers = [1,4,3,2]

numbers = numbers.sort

def partition( arr, pairs )
  partitioned = []
  partitions = ( arr.length / pairs ).floor

  partitioning = true
  index = 0

  while partitioning
    current_partition = []

    partitions.times do
      current_partition << arr[ index ]
      index += 1
    end

      puts "#{current_partition} \n"
    partitioned << current_partition

    partitioning = false if index >= arr.length
  end

  partitioned
end

def sum_partitions( arr )
  sum = 0

  arr.each do | n |
    sum += n.min
  end

  sum
end

partitions = partition( numbers, pairs )
puts sum_partitions( partitions )
