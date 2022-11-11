import data from './data.txt'
// import data from './data1.txt'
import './App.css';
import { useEffect, useState } from 'react';
import Optioner from './option';
function App() {
  let [lineSubArray, setLineSubArray] = useState([])

  const spliter = (text) => {
    let x = text.split('>')
    text = x.map(h => h.trim())
    return text
  }
  useEffect(() => {
    fetch(data)
      .then(r => r.text())
      .then(text => {
        let newLine = text.split('\n')
        newLine.map((x, i) => newLine[i] = spliter(x))
        // newLine.map((x, i) => newLine[i] = Shorter(spliter(x)))
        console.log("newLine", newLine)
        setLineSubArray([...newLine])
        // let aArr=[]
        //         newLine.forEach(element => {
        //           if(element.length==1){
        // aArr.push(element)
        //           }
        //         });
        // console.log(aArr)
      })
  }, [])

  const Shorter = (arr, i = 0, data = {}, cnt = 0) => {
    if (arr[i] == undefined)
      return ''
    data[arr[i]] = {}
    Shorter(arr, i + 1, data[arr[i]])
    return data
  }


  return (
    <div className="App" >
      {
        lineSubArray.map(x => <p> {JSON.stringify(x)}</p>)

      }
    </div>
  );
}
export default App;