import { useState } from "react"
import FaqAccordion from "./FaqAccordion"
import QuestionForm from "./QuestionForm";


const Service4 = () => {

	const [openStatus, setOpenStatus] = useState(false);
	const handleClose = () => {
		setOpenStatus(false);
	}

	return (
		<div className="md:w-[65%] w-[95%] min-h-[100px] m-auto mt-[100px] flex flex-col items-center justify-start md:gap-[50px] gap-[20px]">
			<p className="m-auto font-heading md:text-[60px] text-[7dvw]">Frequently Asked Questions</p>
			<div className="w-[100%] min-h-[100px] flex flex-col items-center justify-start md:gap-[15px] gap-[10px]">
				<FaqAccordion summary={"What services does Infinimove offer?"} detail={"We provide custom software development, mobile app development, and software upgrades."} />
				<FaqAccordion summary={"Can you upgrade our existing software?"} detail={"Yes, we can modernize and add features to your current software"} />
				<FaqAccordion summary={"What industries do you serve?"} detail={"We work across sectors like e-commerce, healthcare, finance, and many more."} />
			</div>
			<button
				className="bg-gradient-to-r from-[#1A225AF5] to-[#3848C0F5] md:px-[25px] md:py-[10px] px-[25px] py-[8px] rounded-[15px] font-bold md:text-[130%] text-[3dvw]"
				onClick={() => {
					setOpenStatus(true);
				}}
			>
				Send Us Your Question!
			</button>
			<QuestionForm open={openStatus} onClose={handleClose} />
		</div>
	)
}

export default Service4;