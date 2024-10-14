import imageasset from "../../../assets/images/imageassets"
import AboutBox from "./AboutBox"


const About1 = () => {
	return (
		<div className="w-[100%] min-h-[200px] flex flex-col items-center justify-start md:gap-[20px] gap-[2dvw] md:pt-[50px] pt-[1dvw] md:px-[50px] px-[10px]">
			<p className="font-heading md:text-[65px] text-[9dvw]">About Us</p>
			<div className="w-[100%] min-h-[10px] flex flex-row items-end justify-around">
				<div className="md:w-[45%] w-[50dvw] h-[100%] rounded-[10px] bg-service-border-linear p-[1px]">
					<div className="w-[100%] h-[100%] rounded-[10px] bg-[#20172f]">
						<img src={imageasset.about1} className="h-[100%] w-[100%] rounded-[10px] md:translate-x-[40px] md:translate-y-[40px] translate-x-[3dvw] translate-y-[3dvw]" />
					</div>
				</div>
				<div className="w-auto min-h-[10px] flex flex-col items-start justify-start md:gap-[15px] gap-[1.5dvw]">
					<AboutBox content={"3+ Years"} />
					<AboutBox content={"20+ Clients"} />
					<AboutBox content={"30+ Projects"} />
				</div>
			</div>
			<br />
			<br className="hidden md:block" />
			<p className="text-[190%] leading-[1.1] hidden md:block text-center font-heading font-[200]">At InfiniMove, we are passionate about transforming ideas into cutting-edge digital realities. With over two years of experience, we specialize in delivering innovative and functional solutions that make a lasting impact. Our team is driven by a shared vision of creating digital experiences that not only meet but exceed expectations.</p>
			<p className="text-[4dvw] block md:hidden text-center font-heading ">Get your dream project in your budget in quick time !</p>
			<br />
			<hr className="bg-divider-linear h-[2px] border-none w-screen" />
		</div>
	)
}

export default About1