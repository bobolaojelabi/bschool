import React from "react"
import school13 from './images/school13.jpg'
import school10 from './images/school10.jpg'
import school14 from './images/school14.jpg'
import school11 from './images/school11.jpg'

class Why extends React.Component{
    constructor(){
        super()
    }
    render(){
        var pic = {heigth:"200px", width:"200px", boxShadow:"2px 2px red", marginBottom:"30px"}
        return(<>

            <div className="col-md-12 text-center my-4"><h2><span className="border-bottom border-danger">Why Choose Us</span></h2></div>
        <div className="col-md-3 text-center">            
        <h5>State of Art Facilities</h5>
            <img src={school13} style={pic} className="shadow-lg my-3 bg-body rounded" alt="pic"/>
            <p>Your child is sure to enjoy education with 21st century facilities. Your child will enjoy:Ultramodern swimming pool, Footbal pitch, Laptop equipped computer laboratoty, projectors and smart, boards in all classes,	air-conditioned classrooms and hallways</p>
					
        </div>
            <div className="col-md-3 text-center">
            <h5>GREAT STAFF</h5>
            <img src={school13} style={pic} className="shadow-lg my-3 bg-body rounded" alt="pic"/>
                <p>With the ratio 3:1,our amazing team of highly qualified, dedicated and passionate professionals 
                    are committed to giving your child the best learning experience.</p>
            </div>
            <div className="col-md-3 text-center">
            <h5>SPORT</h5>
            <img src={school14} style={pic} className="shadow-lg my-3 bg-body rounded" alt="pic"/>
                <p>With activities like swimming, football, basketball and athletics incorporated into 
                the curriculum, the physical development of your child is guaranteed.</p>
            </div>
            <div className="col-md-3 text-center">
            <h5>TECHNOLOGY</h5>
            <img src={school11} style={pic} className="shadow-lg my-3 bg-body rounded" alt="pic"/>
                <p>The world is changing so all so our education.We provide an  ultra modern 
                    ICT Lab and integrate technology into the learning experiences 
                    of pupils. Like they say "CATCH THEM YOUNG"</p>
            </div>
        </>
        )
    }
}

export default Why