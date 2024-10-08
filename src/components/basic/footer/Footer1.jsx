import imageasset from "../../../assets/images/imageassets"

const Footer1 = () => {
	return (
		<div className="md:w-[250px] w-[100%] h-[100%] flex flex-col items-start justify-start gap-[0px]">
			<div className="w-[100%] h-auto flex md:flex-row flex-col md:items-start items-center justify-between  md:translate-x-[-55px]">
				<img src={imageasset.infinimove_logo} className="md:w-auto w-[20dvw] md:translate-y-[-20px]  md:translate-x-[15px]" />
				<p className="font-bold md:text-[130%] text-[3dvw]">infiniMove</p>
			</div>
			<p className="hidden md:block">At InfiniMove, we create seamless software solutions that drive innovation and growth for businesses worldwide.</p>
		</div>
	)
}

export default Footer1