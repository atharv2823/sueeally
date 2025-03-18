import Testimonial from "../_components/testimonial"

function page() {
  return (<>

  <h1 className="font-bold text-3xl text-[#860764] mt-20 text-center">About Comapny</h1>

  <img src="./certificate.png" alt="certificate" className="w-[500px] mx-auto mt-5 border-[5px] border-black"/>
  <p className=" text-lg text-[#860764] mt-2 text-center">Certified Transporter</p>


  <div>
    <h2 className="text-[#860764] text-2xl text-center font-semibold">(CIN : U60230MH2021PTC373621)</h2>
  </div>

  <div>
    <h2 className="text-[#860764] text-2xl text-center font-semibold">(GSTIN : 27ABHCS5267N1ZL)</h2>
  </div>

 <div className="p-6 ">
 <p className="text-[#860764] text-lg"> SueeAlly Private Limited as one of the Leading Logistics service providers in India. SueeAlly is providing end-to-end logistic solutions to the specific needs of its prestigious customers, aiming to branch out into allied businesses in India.<br/>
 SueeAlly handles the logistics of all sizes and weights of cargo like large equipment, automobiles, heavy machinery. We can deliver cargo from any location in India to anywhere in India, Bhutan, Nepal, Bangladesh


</p>
<p className="text-[#860764] text-lg">
Government Recognized Startup SueeAlly has grown rapidly since its inception from 2021, we have kept pace with our customers, working together to provide solutions to our customers, meeting all their requirements in Road Transportation, Project Logistics, ODC & Part Load movement etc., The team of young, enthusiastic, experienced, and committed to helping us ensure full service to our customers with the highest confidence. <br/>
With the rapid development in recent years, SueeAlly is known as one of the dynamic company active in the field of LOGISTICS services. The company had considered the need to improve the quality of services to meet the increasing requirements of our customers. 

</p>
 </div>

<div>
  <h1 className="text-2xl text-[#860764] ml-10 font-semibold">Why To Choose Us ?</h1>

  <ul className="mt-2 list-disc ml-20 text-[#860764]">
    <li>Dedicated Team of Logistics Professionals</li>
    <li>Project Logistics PAN India</li>
    <li>Cost Effective</li>
    <li>Daily Status Report with Time Bound Delivery</li>
    <li>Hands-on Experience Technology</li>
    <li>Responsive-Coordination</li>
  </ul>
</div>


 {/* Our Clients */}

 <div>
 <section className="text-gray-600 mt-5 ">
  <div className="container   mx-auto ">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl w-full bg-[#860764]  font-bold mb-4 text-white py-1">Our Clients</h1>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Trust Partners.</p> */}
    </div>
    <div className="flex flex-wrap px-5  ">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pimwp.s3-accelerate.amazonaws.com/2023/12/Untitled_design_-_2023-12-20T184347.643-removebg-preview.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Tata Project Ltd</h2>
            {/* <p className="text-gray-500">UI Designer</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://assets.entrepreneur.com/content/3x2/2000/1722238308-LTThumbnail.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">L&T</h2>
            {/* <p className="text-gray-500">CTO</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-28 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-8798,resizemode-75,msid-109184977/tech/startups/zetwerk-earmarks-rs-1000-crore-investments-to-grow-its-electronics-business.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> ZETWERK Manufacturing Business Pvt</h2>
            {/* <p className="text-gray-500">Founder</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://www.eqimg.com/images/2024/1280x720/12272024-image6-equitymaster.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Interarch Building Products Limited
            </h2>
            {/* <p className="text-gray-500">DevOps</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxAi4XzEzhKHhmbv0zF-HJdi0aVpOUjeu2eGLSOaG5ER3GqUmEqei1jZ8hNGLDoCo_qc&usqp=CAU"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> BMW Industries Limited
            </h2>
            {/* <p className="text-gray-500">Software Engineer</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXFS1c44u5hwaFexecD5Stf3AQ3EV9_X3kQ&s"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Rite Water Solution ( I ) Pvt Ltd
            </h2>
            {/* <p className="text-gray-500">UX Researcher</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-20 h-16 bg-gray-100 object-conatin object-center flex-shrink-0 rounded-full mr-4" src="https://www.confidencegroup.co/assets_new/images/cpil-logo.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Confidence Petroleum India Ltd
            </h2>
            {/* <p className="text-gray-500">QA Engineer</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://play-lh.googleusercontent.com/2ij3bSlajLxBLfCFnw9Yr_zTGjMUY4ue6T-tInBUtH4HUS-GijFZ6JPN6ZlKyrfw42w"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> MOGLI LABS (INDIA) PRIVATE LIMITED
            </h2>
            {/* <p className="text-gray-500">System</p> */}
          </div>
        </div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4" src="https://www.blueladderepc.com/wp-content/uploads/2023/02/Blue-Ladder-LOGO-1.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> PEB BlueLadder EPC Solutions Private Limited
            </h2>
            {/* <p className="text-gray-500">System</p> */}
          </div>
        </div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4YhXtDh40hJQJm301V-dj6Y6cEtFLv9HMS4fc9xgewPPjPZ71jMOU09OUmxVGuzDpjg&usqp=CAU"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> ISB Infrastructure
            </h2>
            {/* <p className="text-gray-500">System</p> */}
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>




 </div>
  <Testimonial/>

   
   </>)
}

export default page