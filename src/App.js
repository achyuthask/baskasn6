
import './App.css';

const App=()=> {

  function checkprime(n){

    var i,flag = true;
    if (n<2) return false;
    for(i=2 ; i<=n-1 ;i++)
    if(n % i=== 0 ) {
      flag=false;
      break;
    }

    if ( flag===true)
       return true
       return false
  }
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>{
              Array(32).fill(" ").map((e,i)=>
              <div
               style={{
                height:"60px" ,
                width:"60px",
                border:"1px solid white",
                backgroundColor: checkprime(i)?"red":i%2===0? "green":"yellow",
              }}>
                {i}
                </div>)
          } 
    </div>
  );
}

export default App;
