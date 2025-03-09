import Testimonial from "../_components/testimonial"

function page() {
  return (<>

  <h1 className="font-bold text-3xl text-[#860764] mt-20 text-center">About Comapny</h1>

  <img src="./certificate.png" alt="certificate" className="w-[500px] mx-auto mt-5 border-[5px] border-black"/>
  <p className=" text-lg text-[#860764] mt-2 text-center">Certified Transporter</p>

  <div>
    <h2 className="text-[#860764] text-2xl text-center font-semibold">(GSTIN : 27ABHCS5267N1ZL)</h2>
  </div>

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
  <h1 className="text-2xl text-[#860764] ml-10 font-semibold">Why To Choose Us ?</h1>

  <ul className="mt-2 list-disc ml-20 text-[#860764]">
    <li>ODC, SODC, OWC Specialist</li>
    <li>Project Logistics PAN India</li>
    <li>We have a strong network of logistics partners</li>
    <li>Rate Contract Basis Transportation</li>
    <li>Road Transportation – Trailers, Taurus, LPT, JCB, MXL</li>
  </ul>
</div>


 {/* Our Clients */}

 <div>
 <section className="text-gray-600 mt-5">
  <div className="container   mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl w-full bg-[#860764]  font-bold mb-4 text-white py-1">Our Clients</h1>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Trust Partners.</p> */}
    </div>
    <div className="flex flex-wrap px-5 ">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://media.licdn.com/dms/image/v2/D4D0BAQF2DDeEthDW_A/company-logo_200_200/company-logo_200_200/0/1690276299001?e=1749686400&v=beta&t=pFjm9uZLiWrjS0EBzchb01IRwPTiIYIZjUgPdVLOIkc"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Confidence Enterprises Private Limited</h2>
            {/* <p className="text-gray-500">UI Designer</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://static.startuptalky.com/2022/01/Moglix-Logo-Success-Story-Startuptalky.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">MOGLI LABS (INDIA) PRIVATE LIMITE</h2>
            {/* <p className="text-gray-500">CTO</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-28 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://www.blueladderepc.com/wp-content/uploads/2023/02/Blue-Ladder-LOGO-1.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> PEB BlueLadder EPC Solutions Private Limited</h2>
            {/* <p className="text-gray-500">Founder</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQSGRWNrd1DZUHUZOFXutm-voNnPjW7PWnw&s"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Punam Construction</h2>
            {/* <p className="text-gray-500">DevOps</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQSGRWNrd1DZUHUZOFXutm-voNnPjW7PWnw&s"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> ISB Infrastructure</h2>
            {/* <p className="text-gray-500">Software Engineer</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://media.licdn.com/dms/image/v2/C4E0BAQGWGvwlDaiz1Q/company-logo_200_200/company-logo_200_200/0/1630611586705?e=2147483647&v=beta&t=zHlKkjhzmImkRbCyAAA4RGBjXb9Neruy8QO8Cqp7SUM"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Metalfab Hightech Private Limited</h2>
            {/* <p className="text-gray-500">UX Researcher</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-20 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://www.drvijaymalik.com/wp-content/uploads/2021/08/PNC-Infratech-Ltd-Logo.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">PNC Infratech</h2>
            {/* <p className="text-gray-500">QA Engineer</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#860764] border p-4 rounded-lg">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://i.ytimg.com/vi/JH8DHVPjJrM/maxresdefault.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium"> Lloyd Engineering Works Limited</h2>
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