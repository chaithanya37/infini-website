import imageasset from "../../../assets/images/imageassets"
import AboutBox1 from "./AboutBox1"

const About3 = () => {
	return (
		<div className="w-[100%] h-auto flex flex-col items-center justify-start md:gap-[70px] gap-[5dvw] md:pt-[50px] pt-[10dvw] md:px-[50px] px-[10px]">
			<p className="font-heading md:text-[40px] text-[5dvw]">We deliver you great Quality Services</p>
			<div className="w-[100%] md:min-h-[300px] min-h-[10px] flex flex-row items-center justify-around">
				<div className="w-auto min-h-[10px] flex flex-col items-start justify-start md:gap-[15px] gap-[2dvw]">
					<AboutBox1 content={"Mobile App Development"} />
					<AboutBox1 content={"Custom Software Development"} />
					<AboutBox1 content={"Existing Software Extensions"} />
				</div>
				<div className="md:w-[45%] w-[40dvw] h-[100%] rounded-[10px] bg-service-border-linear p-[1px]">
					<div className="w-[100%] h-[100%] rounded-[10px] bg-[#20172f]">
						<img src={imageasset.about2} className="h-[100%] w-[100%] rounded-[10px] md:translate-x-[-40px] md:translate-y-[-40px] translate-x-[-3dvw] translate-y-[-3dvw]" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default About3