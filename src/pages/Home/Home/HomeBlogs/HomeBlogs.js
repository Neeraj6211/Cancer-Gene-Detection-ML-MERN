import React from 'react';
import { Link } from 'react-router-dom';
import HomeSingleBlogLeftSide from '../../../../components/HomeSingleBlogLeftSide/HomeSingleBlogLeftSide';
import HomeSingleBlogLeftSide1 from '../../../../components/HomeSingleBlogLeftSide/HomeSingleBlogLeftSide1';

import HomeSingleBlogLeftSide2 from '../../../../components/HomeSingleBlogLeftSide/HomeSingleBlogLeftSide2';

import HomeSingleBlogRightSide from '../../../../components/HomeSingleBlogRightSide/HomeSingleBlogRightSide';

const HomeBlogs = () => {
   return (
      <>
         <section className="latest-news-area pt-115 pb-20">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text pos-rel">
                           <h5>News</h5>
                           <h1>Get Every Single Updates Here.</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt="" />
                        </div>
                     </div>
                  </div>

               
               </div>

               <div className="row">

                  <HomeSingleBlogLeftSide image="1" />
                  <HomeSingleBlogLeftSide1 image="2" />
                  <HomeSingleBlogLeftSide2 image="3" />

                  <div className="col-xl-4 col-lg-12 col-md-12">
                     {/* <div className="recent-news-list mb-120">

                        <HomeSingleBlogRightSide />
                        <HomeSingleBlogRightSide />
                        <HomeSingleBlogRightSide border="border-0" />

<<<<<<< HEAD
                     </div>
                     
                        
               
=======
                     </div> */}
                     <div className="mk-call-btn f-right mb-30">
                        <Link to="/contact" className="primary_btn btn-icon btn-icon-green ml-0">
                           <span><i className="fas fa-phone"></i></span>make call</Link>
                     </div>
>>>>>>> 5cb27e55f0c99df9c16e4fa58397b5706b5554f7
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeBlogs;