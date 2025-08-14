import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <section className='container-fluid first' style={{ width: '100%', overflowX: 'hidden', height: '450px', backgroundImage: 'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundAttachment: 'fixed', backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
        <div className='row pt-5'>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 shadow border py-5 rounded mt-5 text-center" style={{ backgroundColor: "rgb(255,255,255,0.3)" }}>
            <h3>Designed to get hired</h3>
            <h4>yor skills,your story,your next job - all in one</h4>
            <Link to={'/resume'}><button className='btn btn-primary'>Make Your Resume</button></Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>
      {/* tools */}
      <section className="tools p-5">
        <h1 className="text-center">Tools</h1>
        <div className="row align-items-center">
          <div className="tool-content col-12 col-md-6">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>

            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>

            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>

            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>

          </div>
          <div className="tool-image col-12 col-md-6 p-5">
            <img
              className="w-75 ms-5"
              src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
              alt="tools"
            />
          </div>
        </div>
      </section>
      {/*  */}
      <section className='second' style={{ width: '100%', overflowX: 'hidden', height: '450px', backgroundImage: 'url("https://images.unsplash.com/photo-1681123406597-ce6ed3be8e85?q=80&w=1252&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}>

      </section>
      {/*  */}
      <section className="tools p-5">
        <h1 className="text-center">Testimony</h1>
        <div className="row align-items-center p-5">
          <div className="tool-content col-12 col-md-6">
            <h3 className='mb-5'>Trusted by professionals worldwide.</h3>
            <p className='fs-5'>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p className='fs-5'>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p className='fs-5'>Join thousands of job-seekers who've fast-tracked their careers with a résumé that truly stands out.</p>


          </div>
          <div className="tool-image col-12 col-md-6 p-5">
            <div className="row">
              <div className="col-6 col-md-3 mb-3">
                <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>

              {/* Repeat as many times as needed */}
              <div className="col-6 col-md-3 mb-3">
                <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>


              <div className="col-6 col-md-3 mb-3">
                <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60" style={{ width: '120px', height: '110px', objectFit: 'cover' }} alt="" />
              </div>
            </div>
          </div>


        </div>
      </section>

    </div>
  )
}

export default LandingPage