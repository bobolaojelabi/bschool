import React from "react";
import logo11 from './images/logo11.png'

class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(<>
            <div className="col-md-3">
                <img src={logo11} className="img-fluid rounded" alt="pic"/>
            </div>
            <div className="col-md-3">
                <h5><span className="border-bottom border-white">Location:</span></h5>
                <p>No2, akomolafe street,ori-oke,ogudu,Lagos State.</p>
            </div>
            <div className="col-md-3">
                <h5><span className="border-bottom border-white">For Equiries:</span></h5>
                <p>Phone: 08145673890</p>
                <p>Email: bschool@edu.ng</p>
                <p>Whatsapp: 08145673890</p>
            </div>
        </>)
    }
}

export default Footer