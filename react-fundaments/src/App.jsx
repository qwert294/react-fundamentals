import Id from "./Id.jsx";
import "./Id.css"
import "./App.css"
function App() {
        const name="SURYA"
        const course="COURSE:   RED LIGHT AREA "
        const roll="JOB: BLOWJOB"
        const blood="Blood Group: HIV +"
        const dob="DOB: 21/9/2005"
        const photo="photo.jpg"


  return (
    <div className="aplicant"> 
          <Id  name={name} course={course} roll={roll} blood={blood} dob={dob} photo={photo}/>

    </div>

  
  )
     
}

export default App;
