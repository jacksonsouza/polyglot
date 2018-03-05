#LEETCODE 339 - NESTED WEIGHT SUM

#Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

#Each element is either an integer, or a list -- whose elements may also be integers or other lists.

#Example 1:
#Given the list [[1,1],2,[1,1]], return 10. (four 1's at depth 2, one 2 at depth 1)


def sum_depth ( x, weight = 1 )
  sum = 0

  x = [ x ] if x.is_a? Integer

  x.each do | n |
    if n.is_a? Array
      sum += sum_depth( n, weight + 1 )
    else
      sum += n * weight
    end
  end

  return sum
end

arr = [ [1,1], 2, [1,1] ]
puts sum_depth( arr )
