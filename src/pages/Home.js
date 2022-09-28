import React from "react";
import { useState, useEffect } from "react";
import BookContainer from "./BookContainer";
function Home ({title, author, publication, edition}) {

    const [books, setBooks] = useState([]);
    const [change, setChange] = useState([]);
        useEffect(() => {

          fetch("http://localhost:4000/books")
            .then((response) => response.json())
            .then((books) => {
             
                setBooks(books)
               
            
      
            })
            .catch((error) => console.log(error));

        }, [])

       console.log(books)
    
    return(
        <>

        

  {books?.map((book, i) => (
              
              <BookContainer
             key={book?.id || i}
             title={book?.title}
             author={book?.author}
             publication={book?.publication}
             edition={book?.edition}
          
             id={book?.id || i } 
             setChange={setChange} />
           

          

         ))
         }
       

        </>
        
    
    )
}
export default Home;