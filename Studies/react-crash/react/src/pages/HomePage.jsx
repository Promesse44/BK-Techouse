import React from 'react'
import Hero from '../hero';
import HomeCards from '../HomeCards';
import JobListings from '../JobListings';
import ViewAllJobs from '../ViewAllJobs';


const HomePage = () => {
  return (
    <>
      <Hero/>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>
    </>
    
  );
};

export default HomePage