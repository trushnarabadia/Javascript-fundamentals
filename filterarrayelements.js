function checkLength (phoneNumber){
   if (phoneNumber.length <= 10){
       return true;
   }else{
       return false;
   }
}  

function filterLongNumbers(phoneNumsList){
    return phoneNumsList.filter(checkLength);
} 
 const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];
 
  console.log(filterLongNumbers(numbers));