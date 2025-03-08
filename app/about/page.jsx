import Testimonial from "../_components/testimonial"

function page() {
  return (<>

  <h1 className="font-bold text-3xl text-[#860764] mt-20 text-center">About Comapny</h1>

  <img src="./certificate.png" alt="certificate" className="w-[500px] mx-auto mt-5 border-[5px] border-black"/>

 <div className="p-6 ">
 <p className="text-[#860764] text-lg"> Government Recognized Startup SueeAlly has grown rapidly since its inception
 from 2021, we have kept pace with our customers, working together to provide
 solutions to our customers, meeting all their requirements in Road
 Transportation, Project Logistics, ODC & Part Load movement etc., The team of
 young, enthusiastic, experienced, and committed to helping us ensure full
 service to our customers with the highest confidence.   
</p>
<p className="text-[#860764] text-lg">
With the rapid development in recent years, SueeAlly is known as one of the
 dynamic companies, active in the field of LOGISTICS services. The company
 had considered the need to improve the quality of services to meet the
 increasing requirements of our customers.
</p>
 </div>

 <div>
  <h1 className="text-2xl text-[#860764] ml-5 font-semibold">Why To Choose Us ?</h1>

  <ul type='disk' className="mt-2">
    <li className="ml-5 text-[#860764]">ODC, SODC, OWC Specialist  </li>
    <li className="ml-5 text-[#860764]">Project Logistics PAN India</li>
    <li className="ml-5 text-[#860764]">We have a strong network of logistics partners</li>
    <li className="ml-5 text-[#860764]">Rate Contract Basis Transportation </li>
    <li className="ml-5 text-[#860764]">Road Transportation – Trailers, Taurus, LPT, JCB, MXL</li>
    
  </ul>
 </div>

 {/* Our Clients */}

 <div>
 <section className="text-gray-600 body-font">
  <div className="container px-5  mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl  font-bold mb-4 text-[#860764]">Our Clients</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Trust Partners.</p>
    </div>
    <div className="flex flex-wrap ">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
         
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Confidence Enterprises Private Limited</h2>
            <p className="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
         
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">MOGLI LABS (INDIA) PRIVATE LIMITE</h2>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
          
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> PEB BlueLadder EPC Solutions Private Limited</h2>
            <p className="text-gray-500">Founder</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
          
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Punam Construction</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
         
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> ISB Infrastructure</h2>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
          
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Metalfab Hightech Private Limited</h2>
            <p className="text-gray-500">UX Researcher</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
         
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">PNC Infratech</h2>
            <p className="text-gray-500">QA Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> Lloyd Engineering Works Limited</h2>
            <p className="text-gray-500">System</p>
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