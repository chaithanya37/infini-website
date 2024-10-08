
const ServiceCard = ({number, src, title, description }) => {
	if(number%2==0){
		return (
			<div className="group w-[100%] h-[100%] md:rounded-[16px] rounded-[19px] bg-[#20172f] flex flex-row items-center justify-between py-[10px] px-[25px] gap-[30px] hover:bg-[#D6D6D6]">
				<div className="group-hover:scale-[1.3] transition-[0.3s] w-[40%] h-[100%] flex items-center justify-center">
					<img src={src} className="h-[100%]" />
				</div>
				<div className="w-[50%] h-[100%] flex flex-col md:items-start items-center md:justify-start justify-center gap-[15px]">
					<p className="group-hover:text-[#1A225A] font-subheading text-center md:text-left md:text-[50px] text-[4dvw] font-bold leading-[1.2]">{title}</p>
					<p className="group-hover:text-[#3749C0] group-hover:font-[500] text-[140%] font-[100] hidden md:block ">{description}</p>
				</div>
			</div>
		)
	}
	else{
		return (
			<div className="group w-[100%] h-[100%] md:rounded-[16px] rounded-[19px] bg-[#20172f] flex flex-row-reverse md:flex-row  items-center justify-between py-[10px] px-[25px] gap-[30px] hover:bg-[#D6D6D6]">
				<div className="group-hover:scale-[1.3] transition-[0.3s] w-[40%] h-[100%] flex items-center justify-center">
					<img src={src} className="h-[100%]" />
				</div>
				<div className="w-[50%] h-[100%] flex flex-col md:items-start items-center md:justify-start justify-center gap-[15px]">
					<p className="group-hover:text-[#1A225A] font-subheading text-center md:text-left md:text-[50px] text-[4dvw] font-bold leading-[1.2]">{title}</p>
					<p className="group-hover:text-[#3749C0] group-hover:font-[500] text-[140%] font-[100] hidden md:block ">{description}</p>
				</div>
			</div>
		)
	}
	
}

export default ServiceCard