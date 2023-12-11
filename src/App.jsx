
import './App.css'
import Content from './content'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function App() {
 const exportPDF=()=>{
 const input=document.getElementById("App")
html2canvas(input,{logging:true, letterRendering:1,useCORS:true}).then(canvas => {
  const imgWidth=208;
  const imgHeight=canvas.height * imgWidth/canvas.width;
  const imgData=canvas.toDataURL('img/png');
  const pdf=new jsPDF('p','mm','a4');
  pdf.addImage(imgData,'PNG',0,0,imgWidth,imgHeight);
  pdf.save("List")
})
 }
  return (
    <div className="App">
      <button onClick={()=>exportPDF()}>Print in PDF</button>
      <header id="App" className="App-header">
      <Content/>
      </header>
      
    </div>
     
    
  )
}

export default App
