import '../App.css'


const Hoc = (App) => {
    return () => {
        return(
            <div className="hoc">
                <App/>

    
        </div>
  )
}  
  
}
export default Hoc;
