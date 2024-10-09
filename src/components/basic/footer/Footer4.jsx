import FeedbackForm from "./FeedbackForm"
import { useState } from "react";

const Footer4 = () => {

    const [openStatus, setOpenStatus] = useState(false);

    const handleClose = () => {
        setOpenStatus(false);
    }

    const handleOpen = () => {
        setOpenStatus(true);
    }

    return (
        <div className="md:w-[400px] w-[100%] h-[100%] flex flex-col items-center justify-start md:gap-[30px] gap-[1dvw]">
            <p className="md:text-[130%] font-bold text-center text-[3dvw]">We Await For Valuable Feedback</p>
            <button
                onClick={handleOpen}
                className="font-bold text-[white] md:text-[130%] text-[2dvw] md:px-[20px] md:py-[7px] px-[4dvw] py-[1dvw] bg-[#6C48F4] md:rounded-[10px] rounded-[15px]"
            >
                Send Your Feedback
            </button>
            <FeedbackForm open={openStatus} onClose={handleClose} />
        </div>
    )
}

export default Footer4