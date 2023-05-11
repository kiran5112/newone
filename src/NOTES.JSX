// NOTES OF REACT  therotycle part
// REACT===React is a free and open source front-end javascript library for
// building user interface based on componets./its developed and  managed by facebook.
// react make single page application no reload or refresh on jumping on other page and link.
// it has  high demand due to fast speed, large community for your support   
//
// features of react jsx, compontes,  one-way data binding,  virual dom  ,simlpicity, good performance


// NPM====npm is the worlds largest softwere registry
// the restry contains over 8 lakhs code packages its open source node packege manager.
// NODE js== is runtime enviroment that runs on cromes v8 engine

// LIBRARY == IS pre-defife heap of multiple codes we have to just call it
//  to use like consol.log its not softwere we can call work flow

// FRAMEWORK == is softwere it helps in bulding a kind of application
// framework decide workflow
// JEST= its unit testing framework. 

// HTTPS = send uesers request to the server and server give the respons like otput.

// index.html =entry point of react app.
//         COMPLILER== is computer program that translate computer code written in one programing
// langues to another langues like source langues to target langues and/ aslo like to traslate  source code
// from a high-level programing langues to a lower level language.

// this keyword = is used reffer current  varable or object in a program


// PACKAGE.JOSN ++ this file profile application details such as version,node package description etc

//     fullforms
// MVC   = MODAL view controler
// HTTPS = hyper text transfer protocol SECURE.
// HTTP =  hyper text transef protocol.
// FTP =   file transfer protocol.
// API = application programing interface.
// JSX = javascript extentoins
// CDN = containt delevary network.
// NPM = NODE PACKEGE MANEGERS  // neds to install
// NPX = NODE PACKAGE EXPLORER.// do not need to install
// URL = universal resource locketer.
// TLD = TOP LEVEL DOMAINS. EX= .com, .in, .org
// .in = for india, .jovt for govrnment
// org = use for non profite organization.
// .com = comrtaial website.
// SPA = single page application

// HOISTING===== to go our website live , we have to perchage domain/server to host our website globaly

// topics wise notes===================
// props vrs state
// props are immutable      state are mutable
// props can not change     state can be changed.
// props get passed to      state is managed within the componets
//  the componants
// props are like a         state is like a varaible declered in a function body
// function parameter
//


//  REAL DOM                          VERSUAL DOM
//it updates slow                     it updates fast
//can directly updates HTML.          can not  directly update HTML 
//creats a newDOM if element update.  only updates the jsx if elements updates.
//dom menuplationis very expensive    DOM maniplation is very easy
//Too much of memory wastage          No memory wastage.

// STATEFUL COMPONNENTS                   STATELESS COMPONENTS
// store info abaut state                 calculates the internal state of the coponants       
//  change in memory
//  stateless compo notyfy them          the receive the props  from the stafull componats and
// abaut the requirement of the state    treat them as callback functions.

// NORMAL FUNCTION                       ARROW FUNCTION
// arrguments object are awailable       arguments objects are not awailable in arrow f.
// in normal function                      arrow function have not their own this.
// it has own this keyword                also not have construtiable 

// GIT                                       GIT HUB
// git is softwere                         github is a service
// mentained linux                        it is mentained by microsoft since(2018)
// it install locally in systeam           it is use on web clowd base
// realised 2005                               realised 2008
// dont have user managment systeam           it has user manegment syteam
// git can manage code history                  it manage git repojetry
// open source and free                         pay and free 



// Copmonates+==
// coponants are a pieace of code that can resuse like function but powerfull than function
// pure componants-- in react are the componants
//  which do not re-render when the value of stets and props 
// has been updated with the same values.
// DUMB COMPONANTS can easyly be defiend as a stateless functional componants
// class componats that has ES6 classit has life  cycle methods and state no needs
//  to use hooks
// componats shuld be independant to other functions for project.
// componts communication ==== pass data between componts call cc.
// STATE =====
// states are the objects which determine componats rendering  and behavior , 
// we can use them as a variable.
//  when state is update  render function re-render automatically.
// sending data to parent componats  is called lifting up state .
// we can do it only props ,state can not access outside the componets .
// we can not use state otside of the  variable .
// HOC===high order function this type of componts take input as function
//  and aslo  give out put as function
// hoc is function that takes a componants and return a new componants

// RENDER PROPS==== a componants with a render props takes a function that returns
//  a react elements and cal it
// instead of implementing its own render logic.

// PROPS ====
// props are the parameters of the componots with help of the we can share the data
//  between componants 
// and they are read-only.React Props are read-only! You will get an error if you 
// try to change their value.
// Props are arguments passed into React components

// LIFECYCLE METHOS === when a copmonets  creat , update or remove that time life 
// cycle methods will call 
// we can update state ,update variable ,call api ,loop, etc .
// JSX === is  a shortland for javascript xml it  allows html code inside js code dirctly.

// HOOKS === functional components do not have state and life  cycle methods
//  .to use that  we can import
//  hooks in fuctional componts we can not use hooks inside  class componts.
//
// Hoisting==== is JavaScript's default behavior of moving declarations to the top. 
//CLOSURE ==== a function with a lexical scope is knowns closure,it can  return
//  function in a function
// JAVASCRIPT   event loop hoisting clourse, call back hell semantry tag diff possit 
// ab rel box modal 
// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.

// LIST AND KEYS===Generally, the key should be a unique ID assigned to each item. 
// As a last resort, you can use the array index as a key.

// GIT ===Git is a version control system.Git helps you keep track of code changes.
// Git is used to collaborate on code

// axios => promise based HTTP client 
//      a library that we install to make API requests
// 
// npm i axios
// import axios from "axios";axios.get('URL').then(res=>console.log(res))

// REST => Representational State Transfer
// get => accessing the data => Read
//     post => create a new data => Create
//     put => update the data => Update
//     delete => delete the data => Delete[10:30] Aditya  Bhoir

// Topics

// axios => promise based HTTP client 

//      a library that we install to make API requests
// npm i axios import axios from "axios";
// axios.get('URL').then(res => console.log(res))
// REST => Representational State Transfer
// get => accessing the data => Read
// post => create a new data => Create
// put => update the data => Update
// delete => delete the data => Delete
// CRUD => Create Read Update Delete
// get => params, query
// post, put => body
// delete => params, query



// Topics
// React Router => to give URLs to our components
// Installation  npm i react-router-dom
// Setup the Routes
//  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Link
//  import { Link } from "react-router-dom";
// Nested Routes
// children:[ {},{} ]
//  import { Outlet } from 'react-router-dom';

// Topics MEMOIZATION

// Memoization => store the result, instead of recalculating it
// useMemo(fn,[]) => it lets store the result of a calculation between renrenders

//    => memoizes the result of a function call
// useCallback(fn,[]) => it will let you cache a function between rerenders

// 1. import { useRef } from 'react'
//     2. const inpRef = useRef()
//     3. ref={inpRef}
//  inpRef.current.value
//     inpRef.current.focus()

// DSA TOPICS
// statically typed
// //dynmically
// // arrays are reference types
// let arr=[1,2,3,3];
// let g=arr;
// g.push(99);
// console.log(arr);  //output
// console.log(g); // output

// arrays are contiguous blocks of memory 
// or you can say they are placed next to each other

// Time complexity is dependent on your input size or
// is in relation with your input size 
//  small O ,big o ,and theta
// big o --->worst case time complexity --->
// time complexity is NOT the time taken to run the algorithm on your system


