#L33tspeak - the act of speaking like a computer hacker (or hax0r) - was popularized in the late 1990s as a mechanism of abusing ASCII art and character mappings to confuse outsiders. It was a lot of fun. One popular comic strip in 2000 showed just how far the joke ran.
#In L33Tspeak you substitute letters for their rough outlines in ASCII characters, e.g. symbols or numbers. You can have 1:1 mappings (like E -> 3) or 1:many mappings (like W -> `//). So then you wind up with words like this:
#BASIC => 6451C
#ELEET => 31337 (pronounced elite)
#WOW => `//0`//
#MOM => (V)0(V)

#Mappings

#For this challenge we'll be using a subset of American Standard Leetspeak:
#A -> 4
#B -> 6
#E -> 3
#I -> 1
#L -> 1
#M -> (V)
#N -> (\)
#O -> 0
#S -> 5
#T -> 7
#V -> \/
#W -> `//
#Your challenge, should you choose to accept it, is to translate to and from L33T.

def hacker_speak(string)
  subset = {'a'=> 4, 'b'=> 6, 'e'=> 3, 'i'=> 1, 'l'=> 1, 'm'=> '(V)', 'n'=> '(\)', 'o'=> 0, 's'=> 5, 't'=> 7, 'v'=> '\/', 'w'=> '`//'}
  p string
  p string.chars
  p string.chars.map { |letter| subset[letter]}
  p string.chars.map { |letter| subset[letter]}.join
end

p hacker_speak("chair")

def l33t_this(string)
    array = string.upcase.chars
    #p array
    conversions = { "A" => "4", "B" => "6", "E" => "3", "I" => "1", "L"=> "1", "M" =>"(V)", "N" => "(\\)", "O"=> "0", "S"=> "5", "T" => "7", "V" => "\\/", "W" => "`//" }
    #p conversions
    conversions2 = conversions.invert
    #p conversions2

  if /[0-9`()\/]/.match(string)
    #convert from l33t
    #puts "Converting from l33t"
    (0..array.length).each do |i|
      if array[i] == "`" && array[i+1] == "/"
        array[i] = "W"
        array[i+1] = ""
        array[i+2] = ""
      elsif array[i] == "\\" && array[i+1] == "/"
        array[i] = "V"
        array[i+1] = ""
      elsif array[i] == "(" && array[i+1] == "V"
        array[i] = "M"
        array[i+1] = ""
        array[i+2] = ""
      elsif array[i] == "(" && array[i+1] == "\\"
        array[i] = "N"
        array[i+1] = ""
        array[i+2] = ""
      else
        if conversions2.has_key?(array[i])
          array[i] = conversions2[array[i]]
        end
      end

    end
    puts array.join

  else
    #convert to L33t
    #puts "Converting to l33t"
    (0..array.length).each do |i|
      #p i
      if conversions.has_key?(array[i])
        array[i] = conversions[array[i]]
        #print "Changing #{array[i]} to #{conversions[array[i]]}"
      end
    end
    puts array.join
  end
end

l33t_this("elite")
l33t_this("alpha")
l33t_this("wow")
l33t_this("41PH4")
l33t_this("`//0`//")

l33t_this("I am elite.")
l33t_this("Da pain!")
l33t_this("Eye need help!")
l33t_this("3Y3 (\\)33d j00 t0 g37 d4 d0c70r.")
l33t_this("1 n33d m4 p1llz!")  