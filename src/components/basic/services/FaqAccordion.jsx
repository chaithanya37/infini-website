import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"

const FaqAccordion = ({ detail, summary }) => {
	const phone = useMediaQuery({ query: "(max-width:768px)" })
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="md:w-[100%] w-[90%] h-auto bg-service-border-linear p-[1px] rounded-[10px]">
			<Accordion
				sx={{ backgroundColor: expanded ? "white" : "#0b021c", borderRadius: "9px !important", transition: "0.2s" }}
				onChange={() => {
					setExpanded(!expanded);
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: expanded ? "#3D5AF1" : "white", fontSize: "140%", fontWeight: "bold" }} />}
					sx={{ padding: phone ? "1px 15px" : "5px 20px", fontWeight: "bold", fontSize: phone ? "3dvw !important" : "140% !important", color: expanded ? "#3D5AF1" : "white" }}
				>
					{summary}
				</AccordionSummary>
				<hr className="border-[rgba(0,0,0,0.2)]" />
				<AccordionDetails
					className="text-[black] font-bold opacity-[0.7] md:text-[100%] text-[2.5dvw]"
				>
					{detail}
				</AccordionDetails>
			</Accordion>
		</div>
	)
}

export default FaqAccordion