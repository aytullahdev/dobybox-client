import React from 'react';

const Blogs = () => {
    return (
        <div className='dark:text-white'>
           <div className='w-3/4 mx-auto py-5 '>
               <h1 className='text-3xl uppercase pb-3 font-bold' >Difference between Javascript and nodeJS?</h1>
               <p className='text-2xl capitalize'>
                   Javascript is a scripting programming language which can only run buy the browser Javascript Engine.<code>Nodejs</code> is javascript runtime or interprater which helps Javascript to run outside the browser. 
               </p>
           </div>
           <div className='w-3/4 mx-auto py-2 '>
               <h1 className='text-3xl uppercase pb-3 font-bold'> When should you use nodejs and when should you use mongodb?</h1>
               <p className='text-2xl capitalize'>
                   Nodejs is a javascript run time if we want to make some programme backend we can use Nodejs.
                   For example: if we want to make some api then we can use NodeJS. On the other hand If we want to 
                   store Some Data like user Information , Product Information other information Then we can use Mongodb Mongodb is NoSql database which is very flexiable for Data store and data update.
               </p>
           </div>
           <div className='w-3/4 mx-auto py-2 '>
               <h1 className='text-3xl uppercase pb-3 font-bold'>Differences between sql and nosql databases. </h1>
               <p className='text-2xl capitalize'>
               SQL is a structure quarry language. In SQL we use some structure to apply CRUD operation and We have to memorize some keyword to apply those querry opration. SQL database are well describe and immutable after we build the instances. SQL database are row based data Collection and it Is not flexiable.
               On the other hand NoSQl database are Document based database base it store data in documents or JSON structure it provide flexiable data update Insert , querry, delete without sql. NoSql in an nonrelational Database.
                  
               </p>
           </div>
           <div className='w-3/4 mx-auto py-2 '>
               <h1 className='text-3xl uppercase pb-3 font-bold'>What is the purpose of jwt and how does it work </h1>
               <p className='text-2xl capitalize'>
                To provide secure API connection we use JWT ---  JSON WEB TOKEN . It provide a level of web security in our API. It is highly encryped . By using JWT we can easily make our Middleware to provide the user Access for a certain API. Middleware is a programme which  check the current request is a server is valid or not.
                  
               </p>
           </div>
        </div>
    );
};

export default Blogs;