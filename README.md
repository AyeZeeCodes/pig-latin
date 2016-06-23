#Pig Latin Translator App
##Description
This app will take a user's input and translate it to pig latin.

##Specs

###Spec No.1
The program should add "ay" to words that being with a vowel.
Example Input: animal
Example Output: animalay

###Spec No.2
The program should look for words that begin with a single consonant and the program should move the first consonant to the end of the word, then add "ay".
Example Input: cat
Example Output: atcay

###Spec No.3
The program should look for words that start with 2 or more consonants and then move those to the end of the word and add "ay"
Example Input: stop
Example Output: opstay

###Spec No.4
If the program is given a word where the first consonants include "qu", move the "u" along with the "q".
Example Input: quit
Example Output: itquay

###Spec No.5
If the program is given a word that that starts with a consonant **and** is followed by qu, then the program should move the consonant and the qu to the end while adding ay.
Example Input: squeal
Example Output: ealsquay

##Spec No.6
If the program is given a word that starts with "y", treat the "y" as a consonant.
Example Input: year
Example Output: earyay

##Spec No.7
If the program is given multiple words then the program should handle each word individual and then return each as a string.
Example Input: Hello World
Example Output: elloway orldway
