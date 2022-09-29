import { Fragment } from "react";
import React from "react";


    function BookContainer({title, author, publication, edition, id}) {

        function deleteElem(e){
            fetch(` http://localhost:4000/books/${id}`,{
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(r=>r.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
            alert('You\'re delete has been successful')
    
        }
        
        return(
          <Fragment>
           <table className="table table-striped table-hover" key={id} >
                            <thead>
                                <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Publication</th>
                                <th scope="col">Edition</th>
                                
                                </tr>
                            </thead>

                            <tbody>
                                <tr key={id}>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>{publication}</td>
                                <td>{edition}</td>
                                <td></td>
                                <button id={id} onClick={deleteElem} type="button display in-line padding: 0 20px" className=" btn-danger btn-xsm">DELETE</button>
                                </tr>
                               
                                
                                {/* <td>
                                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(entry.id)}>DELETE</button>
                                </td>
                                 */}
                            </tbody>
                            </table>                   
          </Fragment>
        )

    
}
export default BookContainer;