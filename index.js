//task 1:

var name = 'Elizabeth';
console.log (name);
var friendName = 'Anastasiya';
console.log  (friendName);


//task 2: //task 2 Условный оператор if:

var x = prompt ("Сколько вам лет?");
        if (x > 16){
            alert("Great");
        } else {
            alert ("Приходите, когда вам исполнится 16!")
        }
    //task 3 Циклический оператор for:
var count = 0;
for(var i = 0; i < 10; i++){
    alert( 'i: ' + i );
    count++;
}  
alert ('Count = ' + count);  

//task 4 Функции:


function sum (p1, p2, p3) {
    return (p1 + p2 + p3);
}

var result = sum (10, 20, 30);
alert ("Sum1 = " + result);
var result = sum (3, 2, 5);
alert ("Sum2 = " + result);
var result = sum (-5, 20, -14);
alert ("Sum3 = " + result);

//task 5 Массивы и объекты:Задание 1:


var arr = ["привет", "loftschool"];
arr.push ("я изучаю", "javascript")

alert("размер массива: " + arr.length);
for (var i = 0; i < arr.length; i++){
    alert ("все элементы массива " + arr[i]);
}

//Задание 2:

var Arr = [56, 152, 18, 202, 1, 123, 198, 101, 15, 38];

for (var i = 0; i < Arr.length;  i++) {
    if(i > 100){
        alert (i);
    }  
}



let user = {     
    name: "Elizabeth",
    lastName: "Syniakina", 
    age: 29    
  };
  alert(Object.keys(user));
alert( "name: " + user.name ); 
alert( "lastName: " +  user.lastName ); 
alert( "age: " +  user.age );
user["city"] = "Kharkov";

alert(Object.keys(user));

/*Создайте функцию с именем hello и параметром human.
Напишите код вашей функции так, чтобы она возвращала фразу ‘Привет, меня зовут ИМЯ ФАМИЛИЯ и мне ВОЗРАСТ лет!’.
Вместо ИМЯ нужно подставить значение свойства name из объекта, который вы передадите в human
Вместо ФАМИЛИЯ нужно подставить значение свойства lastName из объекта, который вы передадите в human
Вместо ВОЗРАСТ нужно подставить значение свойства age из объекта, который вы передадите в human
Ниже вызовите созданную функцию и перейдите ей в качестве аргумента объект, который вы создали в предыдущем задании
Результат вызова функции запишите в переменную и выведите ее значение на экран
Подсказка: для того, чтобы объединять строки со значениями переменных, можно использовать оператор ‘+’,
 например ‘Привет ’ + name
*/


 let human = {
    name: "Elizabeth",
    lastName: "Syniakina", 
    age: 29    
 }
function hello (human) {
    var welc = 'Привет, меня зовут ' + name + ' ' + lastName + 'и мне ' + age + 'лет!' ;
    alert( welc );
  }
