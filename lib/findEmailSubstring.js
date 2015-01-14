var findEmailSubstring = function(input){

    var winner="";

    var textToSearch = input.split(/\n/);//how do I make this search line by line?

    var searchString = textToSearch[0];

    var arr = [];

    for (i = 1; i < textToSearch.length; i++) {
      counter = 0;

      if (textToSearch[i].sort(searchString)) {
        //the above line needs to find searchString WITHIN textToSearch
        counter++;
        //then I need to count how many times it occurs per string here
        //then I need to record the count per [i] to compare at the end
      };
      return counter;
    };

return ;
//I need to COMPARE the amount of appearances per string here. Or in the loop?
//I need to return the string that has the most occurences here

};



//     var arr = [];

//     for (i = 1; i < textToSearch.length; i++)
//       counter = 0;

//       if (textToSearch[i]==searchString) {
//           counter ++
//           arr.push[i]
//       }
//       else {
//           return "Nothing found."
//       }
//     };


//         //move on to the next line

//     // At the end, compare the arrays. if array[1] has the highest number of occurences,
//     // winner = textToSearch[1].


//     //At the end, map over the array and return the ORIGINAL string with the highest recorded count
//     //Be sure it returns as a string, not a weird array or something


//     return winner;
// };


module.exports=findEmailSubstring;