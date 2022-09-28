import { Fragment } from "react";
import React from "react";
import { NavLink } from "react-router-dom";


    function BookContainer({title, author, publication, edition, id}) {
        
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
                                
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>{publication}</td>
                                <td>{edition}</td>
                                <td><NavLink to="/books/#{:id}"></NavLink></td>
                                
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