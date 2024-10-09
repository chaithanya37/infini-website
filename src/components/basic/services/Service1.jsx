import imageasset from "../../../assets/images/imageassets"
import Person from "@mui/icons-material/Home"

const Service1 = () => {
	return (
		<div className="w-[100%] md:min-h-[550px] flex flex-col md:flex-row items-center justify-start md:justify-center pl-[0px]">
			<p className="text-[8dvw] font-heading font-[600] block md:hidden">Welcome to InfiniMove</p>
			<img src={imageasset.website1} className="block md:hidden w-[70dvw]" />
			<div className="md:w-[40%] w-[90%] min-h-[100px]">
				<p className="text-[65px] font-heading font-[600] hidden md:block">Welcome to InfiniMove</p><br />
				<p className="md:text-[120%] text-[3dvw] font-[600] text-center md:text-left">If you're looking for cutting-edge software solutions and innovative mobile app development, you’ve come to the right place. At Infinimove, we turn your ideas into reality with technology that drives results.</p><br />
				<button className="px-[30px] py-[10px] text-[120%] ml-[25px] hidden md:block rounded-[80px] bg-gradient-to-r from-[#1A225AF5] to-[#3848C0F5] hover:from-[#4057F9FC] hover:via-[#616DC4BD] hover:to-[#0020FFFC] transition-[1s] hover:shadow-[4px_4px_6px_white] hover:scale-[1.1] origin-top-left font-bold">Know More About Us</button>
			</div>
			<img src={imageasset.website1} className="hidden md:block h-auto" />
			<hr className="bg-divider-linear h-[2px] border-none w-screen block md:hidden mt-[1dvw]" />
		</div>
	)
}

export default Service1;