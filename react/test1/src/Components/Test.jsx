const Test = () => {
    function display(){
        alert("This is one of the event in ReactJS")
    }
  return (
    <div>
        <button onClick={display}>Click here</button>
    </div>
  )
}
export default Test