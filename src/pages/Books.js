// function Books(){

//     const[books, setBooks] = useState([])
//     const match = useRouteMatch();
//     console.log(match);

//     useEffect(() => {
    
//         // fetch("http://localhost:9292/departments")
//         fetch("http://localhost:4000/books")

    
//         .then(res => res.json())
//         .then(data => {
//           setBooks(data)
//         })
//       },[])


//     return(
//         <div>
//             <BookList departments={departments} />
//             <Route path={`${match.url}/:bookId`}>
//                 <BookContainer books={books}/>
//             </Route>
//         </div>
//     )
// }


// export default Books;