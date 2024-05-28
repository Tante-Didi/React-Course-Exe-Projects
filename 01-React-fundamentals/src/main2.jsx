// teaching Examples הרצף הכרונולוגי מתחיל מפה לגבי PROPS
function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
console.log(Booklist())

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/61AiILuAb9L._AC_UL600_SR600,400_.jpg"
    alt="Oh, the Places You'll Go!"
  />
)
const Title = () => {
  return <h2>{"Oh, the Places You'll Go!"}</h2>
}
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    Dr. Seuss
  </h4>
)
//או שאפשר לכתוב את זה כך את שורה 35
//דוגמא שנועדה ללמד אותנו כי נוכל להתקל בזה בקוד של משהו אחר
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   }

//   return <h4 style={inlineHeadingStyles}>Dr. Seuss</h4>
// }
export default Booklist
