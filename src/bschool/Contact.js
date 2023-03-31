import React from "react";

class Contact extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(<>
        <h2><span className="border-bottom border-danger">Vacancy:</span></h2>
        <div className="col-md-4">
            <b>1.Mathematics:</b>
                    <ul>
                    <b>Responsibilities:</b>
                        <li>planning and presebting lessons to facilitate students understanding and application of mathematical concepts.</li>
                        <li>Sourcing the resources and supplies needed for lessons.</li>
                        <li>Grading assignments and quizzes in a timely manner.</li>
                        <li>Documentation and reporting on students progress.</li>
                    
                    <b>Requirements/Skills/Qualification:</b>
                        <li>minimun of HND certificate in Education with a specialization in Mathematics, or equivalent.</li>
                        <li>Outstanding interpersonal skills.</li>
                        <li>A thorough understanding of best practices in teaching.</li>
                        <li>Excellent verbal and written communication skills.</li>
                    </ul>
        </div>
        <div className="col-md-4">
            <b>2.Bursar:</b>
            <ul>
                    <b>Responsibilities:</b>
                        <li>Oversee day-to-day cash management.</li>
                        <li>Keeps organized books of tuition fees and files of receipts.</li>
                        <li>Prepare expense reports on a regular basis.</li>
                        <li>Report to the school general on performance and investment/funding opporttunities</li>
                    
                    <b>Requirements/Skills/Qualification:</b>
                        <li> minimun of HND certificate in Accounting,Business Management.</li>
                        <li>Computer literacy(Ms Excel in particular).</li>
                        <li>Strong finncial management skills.</li>
                        <li>Familiarity with budget preparation and cash flow management.</li>
                        <li>Excellent analytical skills and experience creating reports and presentations.</li>
                    </ul>
        </div>
        <div className="col-md-4">
                <b>3.others</b>
                <ul>
                <li>Crech Asstiant</li>
                <li>Cleaner</li>
                </ul>
        </div>
            <p><b>N:B
                <br/>
                To Apply:</b>Send you application letter to the school email(bschool@edu.gmail).</p>

        </>)
    }
}

export default Contact