import React from 'react' //if it is installed from the package jason we dont need to specify location, he knows how to find it from the module.
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // it is my file
import './index.css' //צריך להוסיף את כל שם הקובץ כולל סיומת

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book-1.jpg',
  id: 1,
}
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  id: 2,
}

function BookList() {
  return 
    <section className="booklist">
      {BookList.map(()=>   
      const {img,title,author,id}=book
      return
      <Book
     img={img} title={title} author={author} key={id}/>})}
    </section>
  )
}
const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

//main.jsx--entry point react in strict mode components renders the components of the App.

//App.jsx-- main component, from here all other components will be rendered

//deleting :
//index.css ,App.css ,reacts.svg ,public--vite.svg,
