import imageasset from "../../../assets/images/imageassets"
import AboutBox2 from "./AboutBox2"

const About4 = () => {
	return (
		<div className="w-auto h-auto m-auto md:pt-[50px] pt-[5dvw] flex flex-col items-center justify-start md:gap-[30px] gap-[5dvw]">
			<p className="font-heading md:text-[40px] text-[5dvw]">We are commited with great</p>
			<div className="w-auto h-auto flex flex-row items-center justify-between md:gap-[30px] gap-[2dvw]">
				<AboutBox2 content={"Honest"} />
				<AboutBox2 content={"Belief"} />
				<AboutBox2 content={"Credibility"} />
				<AboutBox2 content={"Regard"} />
				<AboutBox2 content={"Perfectness"} />
			</div>
			<br />
			<br className="hidden md:block" />
			<hr className="bg-divider-linear h-[2px] border-none w-screen" />
		</div>
	)
}

export default About4