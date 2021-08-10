// //THIS and prototypes
// function identify(paams) {
//     return this.name.toUpperCase();
// };
// function speak() {
//     let greeting = "Hello, I'm " + identify.call( this );
//  console.log( greeting );
// };
// let me = {
//     name:'Hasik'
// };
// let you = {
//   name:'Vardan'
// };
// identify.call( me ); 
// identify.call( you ); 
// speak.call( me ); 
// speak.call( you );

// function identify(context) {
//     return context.name.toUpperCase();
//    }
//    function speak(context) {
//     let greeting = "Hello, I'm " + identify( context );
//     console.log( greeting );
//    };
//    identify(you);
//    speak(me)

//    function foo(num) {
//        console.log('foo:' + num);
//        this.count++
//    }
//    foo.count = 0;
//    let i;
//    for (i=0; i<9; i++) {
//     if (i > 2) {
//     foo( i );
//     }
//    }
//    console.log( data.count );
//    function foo1() {
//        foo.count = 7
//    }
//    setTimeout( function(){} , 9);


//    function foo() {
//     let a = 5;
//     this.bar();
//    }
//    function bar() {
//     console.log( this.a );
//    };
//    foo(); 
//    function baz() {
//     console.log( 'baz' );
//     bar()
//    };
//    function bar(){
//        console.log('bar')
//    };
//    function foo() {
//        console.log('foo');
//    };
//    function foo() {
//        console.log(this.a)
//    }
//    var a = 2;
//    foo();


//    function foo() {
//        console.log(this.a);
//    };
// let a = 5;
// (function () {
//     'use strict';
//     foo()
// })();




// function foo() {
//     console.log(this.a)
// };
// let obj = {
//     a: 2 ,
//     foo: foo,
// };
// obj.foo();


// function foo1() {
//     console.log(this.a);
// };
// let obj2 = {
//     a:14,
//     foo:foo,
// };
// let obj1 = {
//     a:2,
//     obj2: obj2,
// };
// obj1.obj2.foo();




// function foo1() {
//     console.log( this.a );
//    }
//    let obj = {
//     a: 6,
//     foo1: foo1
//    };
//    let bar = obj.foo1; 

//    var a =  "oops, global";
//    bar();





// function foo() {
//     console.log(this.a);
// };
// function duFoo(fn) {
//     fn()
// };
// let obj ={
//     a:77,
//     foo:foo,
// };
// let a = 'oops, global';
// doFoo( obj.foo );






// function foo() {
//     console.log(this.a)
// }
// let obj ={
//     a: 2,
//     foo: foo,
// };
// let a = 'oops, global';
// setTimeout(obj.foo,100)
// function setTimeout(fn,delay) {
//     fn();
//     delay()
// };




// function foo(){
//     console.log(this.a)
// };
// let obj = {
//     a:10
// };
// foo.call(obj);



// function foo() {
//     console.log(this.a);
// };
// let obj ={
//     a:5,
// };
// let bar = function () {
//     foo.call(obj)
// };
// bar() 
// setTimeout(bar,100);
// bar.call;



// function foo(something) {
//   console.log(this.a,something) 
//   return this.a + something;
// };
// let obj ={
//     a: 8
// };
// let bar = function () {
//     return foo.apply(obj.arguments)
// };
// let b = bar(2);
// console.log(b);





// function foo(something) {
//     console.log(this.a,something)
//     return rhis.a +something
// };
// function bind(fn, obj) {
//     return function() {
//     return fn.apply( obj, arguments );
//     };
//    }
//    let obj = {
//     a: 6
//    };
//    let bar = bind( foo, obj );
//    let b = bar(5);
//    console.log(b);







// function foo(something) {
//     console.log(this.a,something)
//     return rhis.a - something
// };

// let obj ={
//     a:5
// };
// let bar = foo.binde(obj);
// let b = bar(3);
// console.log(b);






// function foo(el) {
//     console.log(el,this.id)
// }
// let obj = {
//     id:'Hasik'
// }
// [1,2,3].forEach(foo,obj);






// function foo() {
//     console.log(this.a)
// };
// let obj1 ={
//     a: 7,
//     foo:foo
// };
// let obj2 ={
//     a:3,
//     foo:foo
// };
//  obj1.foo();
//  obj2.foo();


//  obj1.foo.call(obj2);
//  obj2.foo.call(obj1);




//   function foo(something) {
//       this.a = something
//   } ;
//   let obj1 = {
//       foo:foo
//   };
//   let obj2 = {};

//   obj1.foo(5);
//   console.log(obj1.a);

//   obj1.foo.call(obj2,7);
//   console.log(obj2.a);

//   let bar = new obj1.foo(4);
//   console.log(obj1.a);
//   console.log(baz.a);



//   function bind(fn, obj) {
//     return function() {
//     fn.apply( obj, arguments );
//     };
//    }
//    if (!Function.prototype.bind) 
//     Function.prototype.bind = function(oThis) {
//     if (typeof this !== "function") {
//         throw new TypeError(
//             "Function.prototype.bind - what is trying " +
//             "to be bound is not callable"
//             );
//         }
//         let aArgs = Array.prototype.slice.call( arguments, 1 ),
//         fToBind = this,
//         fNOP = function(){},
//         fBound = function(){
//         return fToBind.apply(
//         (
//         this instanceof fNOP &&
//         oThis ? this : oThis
//         ),
//         aArgs.concat(
//         Array.prototype.slice.call( arguments )
//         ),
        
//         fNOP.prototype = this.prototype);
//         fBound.prototype = new fNOP();
//         return fBound;
//         };
//        } 
//        this instanceof fNOP &&
// oThis ? this : oThis
          
// fNOP.prototype = this.prototype;
// fBound.prototype = new fNOP();



// function foo(x,y) {
//   console.log( "x:" + x + ", y:" + y );
//  };
//  foo.apply( null, [8, 10] );
// let bar = foo.bind( null, 8 );
// bar( 10 ); 





// function foo() {
//   console.log("name: " + this.name);
//  }
//  let obj = { name: "obj" },
//   obj2 = { name: "obj2" },
//   obj3 = { name: "obj3" };
//  let fooOBJ = foo.softBind( obj );
//  fooOBJ(); 
//  obj2.foo = foo.softBind(obj);
// obj2.foo(); 
// fooOBJ.call( obj3 );
// setTimeout( obj2.foo, 10 );






// function foo() {
//   return (a) => {
//     console.log( this.a );
//   };
//  }
//  let obj1 = {
//   a: 4
//  };
//  let obj2 = {
//   a: 5
//  };
//  let bar = foo.call( obj1 );
//  bar.call( obj2 ); 







//  function foo() {
//   setTimeout(() => {
//     console.log( this.a );
//  },1000);
// }
// let obj = {
//  a: 10
// };
// foo.call( obj ); 





// function foo() {
//   let self = this; 
//   setTimeout( function(){
//   console.log( self.a );
//   }, 50 );
//  }
//  let obj = {
//   a: 5
// };
// foo.call( obj );

















//Scope and Closures

// function foo(str, a) {
//   eval( str ); 
//   console.log( a, b );
//  }
//  let b = 2;
//  foo( "var b = 3;", 1 );



//  function foo(str) {
//   "use strict";
//   eval( str );
//   console.log( a );
// }
// foo( "var a = 2" );





// function foo(a) {
//   let b = 2;}
//   function bar() {
//     let c = 3;
// } 
// bar();
// console.log( a, b, c );





// function doSomething(a) {
//   b = a + doSomethingElse( a * 5 );
//   console.log( b * 10 );
//  }
//  function doSomethingElse(a) {
//   return a - 5;
//  }
//  let b;
//  doSomething( 5 );



//  function doSomething(a) {
//   function doSomethingElse(a) {
//   return a - 5;
//   }
//   let b;
//   b = a + doSomethingElse( a * 5 );
//   console.log( b * 5 );
//  }
//  doSomething( 5 );
 
 



//  function foo() {
//   function bar(a) {
//   i = 3;
//   console.log( a + i );
//  }
//  for (let i=0; i<10; i++) {
//  bar( i * 2 );
// }
// }
// foo();





// let MyReallyCoolLibrary = {
//   awesome: "stuff",
//   doSomething: function() {
//   },
//   doAnotherThing: function() {
//   }
// };





// let a = 2;
// function foo() { 
//   let a = 3;
//  console.log( a );
// }
// foo();
// console.log( a ); 






// let a = 8;
// (function foo(){
//   let a = 3;
//  console.log( a )
// })(); 
// console.log( a ); 




// let a = 2;
// (function foo(){
//  let a = 3;
//  console.log( a );
// })();
// console.log( a );




// let a = 4;
// (function IIFE(){
//  let a = 7;
//  console.log( a ); 
// })();
// console.log( a );



// let a = 7;
// (function IIFE( global ){
//  let a = 8;
//  console.log( a );
//  console.log( global.a )
// })( window );
// console.log( a );





// let a = 10;
// (function IIFE( def ){
//  def( window );
// })(function def( global ){
//  let a = 5;
//  console.log( a ); 
//  console.log( global.a ); 
// });




// let foo = true;
// if (foo) {
//  let bar = foo * 2;
//  bar = something( bar );
//  console.log( bar );
// }



// function process(data) {

// };
// {
//   let someReallyBigData = {  };
//   process( someReallyBigData );
//  };
//  let btn = document.getElementById( "my_button" );
//  btn.addEventListener( "click", function click(evt){
//   console.log("button clicked");
//  }, false );
 

//  for (let i=0; i<10; i++) {
//   console.log( i );
//  }
//  console.log( i );




//  function foo() {
//   let a = 7;
//   function bar() {
//   console.log( a );
//   }
//   return bar;
//  }
//  let baz = foo();
//  baz(); 





// function foo() {
//  let a = 4;
//  function baz() {
//  console.log( a ); 
//  }
//  bar( baz );
// }
// function bar(fn) {
//  fn(); 
// }



// let fn;
// function foo() {
//  let a = 2;
//  function baz() {
//  console.log( a );
//  }
//  fn = baz;
// }
// function bar() {
//  fn();
// }
// foo();
// bar();




// function wait(message) {
//   setTimeout( function timer(){
//   console.log( message );
//   }, 1000 );
//  }
//  wait( "Hello, closure!" );

 

//  function setupBot(name,selector) {
//   $( selector ).click( function activator(){
//   console.log( "Activating: " + name );
//   } );
//  }
//  setupBot( "Closure Bot 1", "#bot_1" );
//  setupBot( "Closure Bot 2", "#bot_2" );

 


//  function foo() {
//   let something = "cool";
//   let another = [7,8,9];
//   function doSomething() {
//   console.log( something );
//   }
//   function doAnother() {
//   console.log( another.join( " ! " ) );
//   }
//  }




//  function CoolModule() {
//   let something = "cool";
//   let another = [1, 2, 3];
//   function doSomething() {
//   console.log( something );
//   }
//   function doAnother() {
//   console.log( another.join( " ! " ) );
//   }
//   return {
//   doSomething: doSomething,
//   doAnother: doAnother
//   };
//  }
//  let foo = CoolModule();
//  foo.doSomething(); 

//  foo.doAnother(); 






//  function CoolModule(id) {
//   function identify() {
//   console.log( id );
//   }
//   return {
//   identify: identify
//   };
//  }
//  let foo1 = CoolModule( "foo 1" );
//  let foo2 = CoolModule( "foo 2" );
//  foo1.identify(); 
//  foo2.identify();



