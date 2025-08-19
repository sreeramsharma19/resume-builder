import React from 'react'

function PageNotFound() {
  return (
    <div style={{height:'80vh',marginTop:'5px'}} className='d-flex flex-column align-items-center justify-content-center'>
<img src="https://klizos.com/wp-content/uploads/funny-404-error-page-GIF-klizo-solutions.gif" alt="" height={'800px'} width={'800px'} />
      <h1>

        Page Not Found

      </h1>
      <h3>Sorry,we couldn't find the page</h3>
      <button className='btn btn-primary'>Go to home</button>
    </div>
  )
}

export default PageNotFound