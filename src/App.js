import data from './data.txt'
import './App.css';

function App() {
  let Arr=[[],[],[],[],[]]
  let Arr2=[]
  const spliter=(sdata)=>{
    let x=sdata.split('>')
    sdata=x
    return sdata
  }
  const app=()=>{
    fetch(data)
    .then(r=>r.text())
    .then(text=>{
      let sdata=text.split('\n')
      sdata.map((x,i)=>
        sdata[i]=spliter(x)
      )
      // let y={}
      sdata.map((x,i)=>{
        Arr[0].push(x[0])
      })
      Arr[0] = [...new Set(Arr[0])];
      Arr[0].map((y,j)=>{
       let sub= sdata.map((x,i)=>(y===x[0])?Arr[j][1].push(x[1]):"")
       
      })
    //  Arr2.map((x,i)=>{})
      console.log(Arr)
    })
  }
  return (
    <div className="App" >
    <button style={{width:"100px",height:"50px",fontSize:"35px"}} onClick={app}>Click</button>
    </div>
  );
}

export default App;
