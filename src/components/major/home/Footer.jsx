import { Divider } from "@mui/material";
import Footer1 from "../../basic/footer/Footer1";
import Footer2 from "../../basic/footer/Footer2";
import Footer3 from "../../basic/footer/Footer3";
import Footer4 from "../../basic/footer/Footer4";
import Footer5 from "../../basic/footer/Footer5";
import Footer6 from "../../basic/footer/Footer6";
import FooterHead from "../../basic/footer/FooterHead";


const Footer = () => {

	return (
		<div id="footer" className="w-[100%] min-h-[20px] border border-[black] bg-footer-linear relative md:px-[50px] md:pt-[90px] px-[0px] pt-[20px] flex flex-row items-start justify-center md:rounded-tl-[40px] md:rounded-tr-[40px] rounded-tr-[20px] rounded-tl-[20px]">
			<FooterHead />
			<div className="w-[90%] min-h-10 hidden md:flex flex-col items-center justify-between gap-[30px]">
				<div className="w-full min-h-[90px] flex flex-row items-start justify-between text-[white]">
					<Footer1 />
					<Footer2 />
					<Footer3 />
					<Footer4 />
				</div>
				<div className="w-full min-h-[60px] flex flex-row items-center justify-between px-[15px] mb-[30px]">
					<Footer5 />
					<Footer6 />
				</div>
			</div>
			<div className="w-[95%] h-auto flex md:hidden flex-col items-center justify-between gap-[15px] text-[white]">
				<div className="w-[100%] h-auto flex flex-row items-start justify-between gap-[5px]">
					<div className="w-[43%] min-h-auto flex flex-row items-start justify-between flex-wrap gap-[10px]">
						<Footer1 />
						<Footer2 />
						<Footer3 />
					</div>
					<div className="w-[1px] h-[35dvw] border border-[rgba(255,255,255,0.7)] ">

					</div>
					<div className="w-[43%] min-h-auto flex flex-col items-center justify-start gap-[2dvw]">
						<Footer4 />
						<Footer6 />
					</div>
				</div>
				<Footer5 />
			</div>
		</div>
	)
}

export default Footer;