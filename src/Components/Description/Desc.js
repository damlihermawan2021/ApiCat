function Desc({image , desc}){
    return(
        <>
        <div className="content-cats visible text-center flex justify-center flex-col items-center">
        <div>
        <img className="w-96 h-80" src={image} alt=""/>
        </div>    
        <div>
        <p className="w-128 mt-5 ">{desc}</p>
        </div>
        
        </div>
        </>
        
    );  
}

export default Desc;