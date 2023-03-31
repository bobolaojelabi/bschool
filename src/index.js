import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './bschool/About';
import Why from './bschool/Why';
import Contact from './bschool/Contact';
import Footer from './bschool/Footer';


let y = (<div className='row justify-content-center position-absolute bottom-0'>
  <div className='col-md-3 bg-light border-end '>
  <h5><b>NURSERY SCHOOL</b></h5>
								<p>
									Our nursery school is designed to equip your child 
									with learning fundamentals. With a sufficient blend 
									of work and play, we lay a strong foundation on 
									which your child’s education will bloom.
								</p>
  </div>
  <div className='col-md-3 bg-light'>
  <h5><b>PRIMARY SCHOOL</b></h5>
								<p>
									The importance of primary education can not be overemphasized.
									This is why we have a robust curriculum for your child. We pay
									attention to your child’s cognitive needs, values and develop their physical abilities.
								</p>
  </div>
</div>)

let x = (<>
  <h2><span className='border-bottom border-danger'>Location</span></h2>
  <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.0287796070133!2d3.402293822816519!3d6.57601228003226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92a4e0f84005%3A0x8cf97cec687a9ca1!2sAkomolafe%20Oluwole%20St%2C%20105102%2C%20Lagos!5e1!3m2!1sen!2sng!4v1679405825271!5m2!1sen!2sng" width="100%" height="450"  loading="lazy" referrerPolicy='no-referrer-when-downgrade' className="shadow-lg my-3 bg-body rounded"></iframe>
</>)

//const intro = ReactDOM.createRoot(document.getElementById('intro'))
//intro.render(y)

const about = ReactDOM.createRoot(document.getElementById('about'))
about.render(<About/>)

const why = ReactDOM.createRoot(document.getElementById('why'))
why.render(<Why/>)

const locate = ReactDOM.createRoot(document.getElementById('locate'))
locate.render(x)

const contact = ReactDOM.createRoot(document.getElementById('contact'))
contact.render(<Contact/>)

const foot = ReactDOM.createRoot(document.getElementById('foot'))
foot.render(<Footer/>)