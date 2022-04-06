// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

 let arrayTaskOne= [1,3,5]
 console.log (arrayTaskOne)
 let i=arrayTaskOne.length
 console.log("\n array lenght is",i)
 let arrayResultTaskOne=[]
 let n=0

 while(i>0){
     console.log(arrayTaskOne[i-1])
     arrayResultTaskOne[n]=arrayTaskOne[i-1]
     --i
     ++n


 }
 console.log(arrayResultTaskOne)
 console.log("\n----------TaskOneAbove-------------\n")

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

i=0
let c=0
let arrayTaskTwo=[2,18,92,21,7,15]
n= arrayTaskTwo.length
while(i<n){
    if(c< arrayTaskTwo[i]){
        c=arrayTaskTwo[i]
    }
    ++i

}
console.log("\n The maxumum value of arrayTaskTwo is:",c)
console.log("\n-------------TaskTwoAbove------------\n")

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/
i=0
let arrayTaskThree=[2,18,92,21,7,15,1]
n= arrayTaskThree.length
c=arrayTaskThree[0]
while(i<n){
    if(c> arrayTaskThree[i]){
        c=arrayTaskThree[i]
    }
    ++i

}
console.log("\n The minimum value of arrayTaskThree is:",c)
console.log("\n-------------TaskThreeAbove------------\n")



/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/
i=0
let j=0
let arrayResultTaskFour=[]
let arrayTaskFour=[2,18,92,21,7,15,1]
n= arrayTaskFour.length
while(i<n){
    if( arrayTaskFour[i]%2==0){
        arrayResultTaskFour[j]=arrayTaskFour[i]
        ++j
    }
    ++i
    

}
console.log("\n The even numbers from arrayTaskFour are",arrayResultTaskFour)
console.log("\n-------------TaskFourAbove------------\n")


/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
i=0
j=0
let arrayTaskFive=[2,18,92,21,7,15,1,16,91,8]
n= arrayTaskFive.length
while(i<n){
    if( arrayTaskFive[i]%2==0){
        delete arrayTaskFive[i]
        
    }
    ++i
    

}
console.log("\n The result is",arrayTaskFive)
console.log("\n-------------TaskFiveAbove------------\n")



/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let wordWithVowels='SuperMarioAndBrothers'
let wordWithoutVowels
n= wordWithVowels.length
i=0
console.log(wordWithVowels.charAt(0))
while(i<n){
    if (wordWithVowels.charAt(i)==='a'|| wordWithVowels.charAt(i)==='e'
    || wordWithVowels.charAt(i)==='i'|| wordWithVowels.charAt(i)==='o'
    || wordWithVowels.charAt(i)==='u'|| wordWithVowels.charAt(i)==='y'
    ){
        wordWithoutVowels=   wordWithVowels.substr(i,wordWithVowels.length)


    }++i
}
console.log("The word after deleting vowels is:",wordWithVowels)
console.log("\n-------------TaskSixAbove------------\n")
/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let arrayTaskSeven=["Word",7,true,18.8,"Tunel"]
console.log(arrayTaskSeven)
n= arrayTaskSeven.length
i=0
while(i<n){
    if(isNaN(arrayTaskSeven[i])){}
    else{
        arrayTaskSeven[i]+=1
}++i
}
console.log(arrayTaskSeven)
console.log("\n-------------TaskSevenAbove------------\n")


/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let arrayTaskEight=["Word","Horse","Pony Tail","Rescue","Tunel"]
console.log(arrayTaskEight)
n= arrayTaskEight.length
i=0
while(i<n){
    /*if(arrayTaskEight[i] instanceof string){
       arrayTaskEight[i]= arrayTaskEight[i].length
    }*/
    arrayTaskEight[i]= arrayTaskEight[i].length
   ++i
}

console.log(arrayTaskEight)
console.log("\n-------------TaskEightAbove------------\n")



/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
