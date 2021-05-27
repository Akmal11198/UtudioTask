import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button,Container} from "react-bootstrap";

function App() {
  const [num,setNum]=useState(0);
  const click=()=>{
    if (num<5)
      setNum(num+1)
  }
  return (
    <Container style={{padding:10,marginTop:10,textAlign:"center",display:"flex",flexDirection:"column"}}>
      <Button variant="outline-success" size="lg" style={{marginTop:40}} onClick={click} disabled={num===5} >{num}</Button>
      {(num>0)&&(<Button variant="link" size="lg" style={{marginTop:40}} onClick={()=>{setNum(0)}}>Reset</Button>)}
    </Container>
  );
}

export default App;
