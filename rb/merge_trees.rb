# LEETCODE 617 - MERGE TWO BINARY TREES

#Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

#You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

#Example 1:
#Input:
	#Tree 1                     Tree 2
          #1                         2
         #/ \                       / \
        #3   2                     1   3
       #/                           \   \
      #5                             4   7
#Output:
#Merged tree:
			 #3
			#/ \
		 #4   5
		#/ \   \
	 #5   4   7

#Note: The merging process must start from the root nodes of both trees.


class Node
  attr_accessor :value
  attr_accessor :left_child
  attr_accessor :right_child

  def initialize( value, left_child, right_child )
    @value = value
    @left_child = left_child
    @right_child = right_child
  end
end

def merge_trees( t1, t2 )
  return log_node( "LEAF", t2 ) if t1.nil?
  return log_node( "LEAF", t1 ) if t2.nil?

  sum = t1.value + t2.value
  merged = Node.new( sum,
            merge_trees( t1.left_child, t2.left_child ),
            merge_trees( t1.right_child, t2.right_child )
          )

  return log_node( "SUM", merged )
end

def log_node( i, n )
  puts "NODE #{ i }: #{ n.nil? ? "nil" : n.value }"
  n
end

t1 = Node.new( 1, Node.new( 3, Node.new(5, nil, nil), nil), Node.new( 2, nil, nil ))
t2 = Node.new( 2, Node.new( 1, nil, Node.new(4, nil, nil)), Node.new( 3, nil, Node.new( 7, nil, nil )))
merged_tree = merge_trees( t1, t2 )
