// Q1

// function setAdder(number)
// {
//     return function(num)
//     {
//         return num+number;
//     }
// }

// const addFive = setAdder(10);
// console.log(addFive(5));
// console.log(addFive(10));   


// Q2

// function searchArray(arr,val)
// {
//     if(arr.length===0)
//     {
//         return false;
//     }
    
//     else if(arr[0]=== val)
//     {
//         return true;
//     }
//     else
//     {
//         arr.shift();
//         return searchArray(arr,val)
//     }
// }

// const arr = [1,2,3,4,5];
// const val1 = 3;
// const val3 = 5;
// const val2 = 6;

// console.log(searchArray(arr, val1)); // true
// console.log(searchArray(arr, val2));
// console.log(searchArray(arr, val3));



// Q3

// function addNewParagraph(text)
// {
// var newPara = document.createElement('p');
// newPara.textContent = text
// document.body.appendChild(newPara);
// }


// Q4

// function addNewList(text)
// {
//     const node = document.createElement('li');
//     node.textContent = text;
//     // node.appendChild(document.createTextNode(text)) //This line also produces the same result as text content
//     document.querySelector('ul').appendChild(node);
// }



// Q5
// function changeBackgroundColor(element,color)
// {
//     // var backColor = document.getElementById('color');
//     element.style.backgroundColor = color;
// }

// var element = document.getElementById('color');
// changeBackgroundColor(element,"cyan")


// Q6
// function saveObjectLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }

// const myObj = { name: "Moin", age: 30 };
// saveObjectLocalStorage("myKey", myObj);  

//const savedObj = JSON.parse(localStorage.getItem("myKey"));
// console.log(savedObj); // { name: "Moin", age: 20 }

// Q7
// function getObjectFromLocalStorage(key) {
//     const item = localStorage.getItem(key);
//     return JSON.parse(item);
//   }

// const savedObj = getObjectFromLocalStorage("myKey");
// console.log(savedObj); // { name: "Moin", age: 20 }