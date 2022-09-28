import React from "react";
import { useState } from "react";


function CreateBook () {
const [form, setForm] = useState({
    title: '',
    author: '',
    publication: '',
    edition: '',
})



const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:4000/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            title: form.title,
            author: form.author,
            publication: form.publication,
            edition: form.edition,
          
        })
    })
    .then(r=>r.json())
    .then(d=>console.log(d))
    .catch(error=>console.log(error));
    document.querySelector('.form').reset()
};

const handleChange = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
 
   
}
// function Redirect () {
//     let navigate = useNavigate();
//     function handleSubmit() {
//         navigate('/home')



return (
    
    <>
        <h3>Create book</h3>
        <form onSubmit={handleSubmit} className='form'>
        <div className='title'>
        </div>
        <input type="text" className='form-control' placeholder = "Title" name="title" onChange={handleChange} value={form.title}/>
        <input type="text" className='form-control' placeholder = "Author" name="author" onChange={handleChange} value={form.author}/>
        <input type="text" className='form-control' placeholder = "Publication" name="publication" onChange={handleChange} value={form.publication}/>
        <input type="text" className='form-control' placeholder = "Edition" name="edition" onChange={handleChange} value={form.edition}/>
        
        <button type="button" className="btn btn-success primary btn-sm" onClick={handleSubmit}>Submit</button>
        <hr/>
        </form>
        <div className="go-home">
        <a href="/">
          <button className="home-btn">Home</button>
        </a> 
        </div>
        
    </>
)

}
export default CreateBook;
