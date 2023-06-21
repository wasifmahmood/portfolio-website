import './education.css'



const Education = () => {
    return (
        <div className="Education" >
            <h3 style={{ fontWeight: 'bold' }}>Education</h3>
            <div className="data ">
                <h3  >Government College University Faisalabad</h3>
                <div className='info '>
                    <div className='head '>
                        <span style={{ color: 'orange', fontWeight: 'bold' }}>Master in Information Technology</span><br></br>
                        <span style={{ color: 'orange' }}>GPA(3.02)</span><br></br>
                        <span style={{ color: 'orange' }}>2019-2021</span><br></br>
                    </div>
                    <div className='bottom '>
                        <p style={{ color: '#213b52' }}>A Master's in Information Technology (IT) is a two-year program that provides advanced knowledge and skills in the IT field. Students study topics such as programming, database management, network security, and emerging technologies. The program prepares graduates for leadership roles in IT management, software development, cybersecurity, and data analysis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
