import imageasset from "../../../assets/images/imageassets"
import ServiceCard from "./ServiceCard"

const Service2 = () => {
	return (
		<>
			<div id="services" className="md:w-[80%] w-[92%] min-h-[200px] md:p-[5px] p-[1px] m-auto mt-[20dvw] rounded-[20px] bg-white bg-service-border-linear">
				<div className="w-[100%] min-h-[200px] md:rounded-[15px] rounded-[19px] relative md:p-[50px] p-[20px] bg-[#0b021c] flex flex-col items-center justify-start md:pt-[100px] pt-[50px] md:gap-[50px] gap-[20px]">

					<div className="w-fit h-auto px-[20px] py-[0px] absolute translate-x-[-50%] left-[50%] md:top-[-50px] top-[-7dvw] bg-[#0b021c] rounded-[20px] border-[rgba(255,255,255,0.5)] md:border-[5px] border-[1px]">
						<p className="md:text-[60px] text-[7dvw] whitespace-nowrap font-heading">Our Services</p>
					</div>

					<div className="w-[100%] md:min-h-[200px] max-[768px]:h-[25dvw] rounded-[20px] bg-service-border-linear md:p-[4px] p-[1px]">
						<ServiceCard src={imageasset.service3} number={0} title={"Custom Software Development"} description={"We build tailored solutions that meet your unique business needs."} />
					</div>

					<div className="w-[100%] md:min-h-[200px] max-[768px]:h-[25dvw] rounded-[20px] bg-service-border-linear md:p-[4px] p-[1px]">
						<ServiceCard src={imageasset.service1} number={1} title={"Mobile App Development"} description={"Creating user-friendly mobile apps (Android and iOS) to help your business reach a broader audience."} />
					</div>

					<div className="w-[100%] md:min-h-[200px] max-[768px]:h-[25dvw] rounded-[20px] bg-service-border-linear md:p-[4px] p-[1px]">
						<ServiceCard src={imageasset.service2} number={2} title={"Existing Software Extensions"} description={"Modernise your existing software with latest cutting edge technology and new innovative features"} />
					</div>


				</div>
			</div >
			<hr className="bg-divider-linear h-[2px] border-none w-screen block md:hidden mt-[50px]" />
		</>
	)
}

export default Service2