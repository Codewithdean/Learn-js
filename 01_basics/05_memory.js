// There are two types of memory
 // Stack and Heap Memory
 // All Premitive type of data always use in stack memory.
 // All non-premitive type of data always use in heap memory.
 // if use in stack memory always get in the copy value.
 // if use in heap memory always get in the original value

 // reference means -- change in original value (non premitive data type).
 // In premitive datatype -- always find a copy value. 

 let myYoutubename = "amanverma"
 let anothername=myYoutubename
 anothername="averma"
 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
    email:"user@gmail.com"
 }

 let userTwo = userOne

 userTwo.email="abc@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);

// please learn mdn documentation to improve the javascript knowledge.
 