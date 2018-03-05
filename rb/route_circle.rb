#LEETCODE 657 - JUDGE ROUTE CIRCLE

#Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

#The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

#Example 1:
#Input: "UD"
#Output: true

#Example 2:
#Input: "LL"
#Output: false


moves = "LL"

#X, Y
position = [0, 0]

def move( position, direction )
  x, y = position

  case direction
    when "U"
      y += 1
    when "D"
      y -= 1
    when "L"
      x -= 1
    when "R"
      x += 1
  end

  [x, y]
end

moves = moves.split('')

moves.each do | direction |
  position = move( position, direction )
end

puts position
puts position == [0, 0]
