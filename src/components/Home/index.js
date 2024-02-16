import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-page-background">
    <Header />
    <div className="content-container">
      <h1 className="home-page-heading">Find The Job That Fits Your Life</h1>
      <p className="home-page-para">
        Millions of people are searching for jobs, salry information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <button type="button" className="find-jobs-button">
        Find Jobs
      </button>
    </div>
  </div>
)

export default Home
