import Menu from "@mui/icons-material/Menu";
import imageasset from "../../../assets/images/imageassets"
import { useState } from "react"
import DialogNavbar from "../../basic/navbar/DialogNavbar";

const navbar = ({ setAboutvisibility }) => {

	const [index, setIndex] = useState(0);
	const [openStatus, setOpenStatus] = useState(false);

	const handleOpen = () => {
		setOpenStatus(true);
	}

	const handleClose = () => {
		setOpenStatus(false);
	}

	return (
		<div className="w-full md:h-[65px] h-[50px] md:px-[50px] px-[10px] flex flex-row items-center justify-between bg-[#0b021ca1] fixed z-[5] backdrop-blur-[10px]">
			<img src={imageasset.logo1} className="md:h-[55px] h-[90%]" />
			<div className="w-[500px] h-[50px] hidden md:flex flex-row items-center justify-between relative text-[white]">
				<div className="border w-[125px] flex items-center justify-center h-[90%] rounded-[80px] border-[white] absolute z-[-1]"
					style={{ transform: `translatex(${index * 125}px)`, transition: "0.3s" }}
				>
				</div>
				<div className="w-[125px] flex items-center justify-center h-full cursor-pointer font-bold"
					key={0}
					onClick={() => {
						setIndex(0);
						setAboutvisibility(false);
						document.getElementById("home").scrollIntoView({ behavior: "smooth" });
					}}
				>
					HOME
				</div>
				<div className="w-[125px] flex items-center justify-center h-full cursor-pointer font-bold"
					key={1}
					onClick={() => {
						setIndex(1);
						setAboutvisibility(false);
						document.getElementById("services").scrollIntoView({ behavior: "smooth" });
					}}

				>
					SERVICES
				</div>
				<div className="w-[125px] flex items-center justify-center h-full cursor-pointer font-bold"
					key={2}
					onClick={() => {
						setIndex(2);
						setAboutvisibility(true);
						document.getElementById("about").scrollIntoView({ behavior: "smooth" });
					}}
				>
					ABOUT
				</div>
				<div className="w-[125px] flex items-center justify-center h-full cursor-pointer font-bold"
					key={3}
					onClick={() => {
						setIndex(3);
						document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
					}}
				>
					CONTACT
				</div>
			</div>
			<div className="w-auto h-auto block md:hidden">
				<Menu className="text-[white]" onClick={handleOpen} />
			</div>
			<DialogNavbar open={openStatus} onClose={handleClose} />

		</div >
	)
}

export default navbar