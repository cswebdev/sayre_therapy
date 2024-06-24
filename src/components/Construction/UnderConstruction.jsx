import "./UnderConstruction.css";

const UnderConstruction = () => {
   return (
      <>
         <div className="Container construction-container">
            <div className="text-container">
               <h1 className="bg">
                  We are making
                  <br />
                  some <span>upgrades</span>
                  <br />
                  to our website!
               </h1>
               <h2>Please check back later.</h2>
               <p className="">
                  {" "}
                  Thank you, <br />
                  Sayre Counseling
               </p>
               <div className="social-bar">
                  <a href="https://www.psychologytoday.com/us/therapists/megan-sayre-libertyville-il/240981">
                     <div className="btn btn-primary">book an appointment</div>
                  </a>
               </div>
            </div>
         </div>
      </>
   );
};

export default UnderConstruction;
