import './style.css'
import img from './nerds_rainbow.png'

export default function Testing(){
return(
    <div className="container">
    <img src={img} id='pic' alt='main' />
        <h1 className="text">NeRdS</h1>
    </div>

);

}