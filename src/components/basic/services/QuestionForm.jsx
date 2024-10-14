import { Dialog, Paper } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"
import ErrorAlert from "../ErrorAlert"

const QuestionForm = ({ open, onClose }) => {

	const formik = useFormik({
		initialValues: {
			question: ""
		},
		validationSchema: Yup.object({
			question: Yup.string().required("*required"),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		}
	})

	return (
		<Dialog open={open} onClose={onClose} scroll={"body"}
			sx={{
				'& .MuiDialog-paper': {
					backgroundColor: 'transparent',
					borderRadius: '16px',
					width: "auto",

				},
			}}
		>
			<form className="w-[100%] md:min-h-[100px] min-h-[10px] bg-[#161C44] rounded-[16px] md:p-[20px] p-[3dvw] flex flex-col items-center justify-start md:gap-[20px] gap-[2dvw]" onSubmit={formik.handleSubmit}>
				{/* <div className="w-[100%] min-h-[100px] border flex flex-row items-center justify-between">
					<img src={imageasset.logo1} />
					<div className="w-[65%] h-full border flex flex-col items-start justify-start gap-[10px]">
						<p className="text-[140%] text-[white]">INFINIMOVE</p>
						<p className="text-[white] text-[90%] break-words">If you're looking for cutting-edge software solutions and innovative mobile app development, you’ve come to the right place. At INfinimove, we turn your ideas into reality with technology that drives results.</p>

					</div>
				</div> */}
				<div className="w-[100%] md:h-[60px] h-auto rounded-[10px] bg-service-border-linear p-[1px]">
					<div className="w-[100%] h-[100%] bg-[#161C44] rounded-[9px] flex flex-row items-center justify-start px-[15px] py-[5px] md:gap-[20px] gap-[2dvw]">
						<label className="text-[white] md:text-[120%] text-[4dvw]">QUESTION:</label>
						<input
							type="text"
							className="bg-transparent text-[white] border-b-[rgba(255,255,255,0.5)] border-b-[1px] outline-none w-full px-[5px] md:text-[110%] text-[4dvw]"
							autoFocus
							name="question"
							value={formik.values.question}
							onChange={formik.handleChange}
						/>
					</div>
				</div>
				{formik.touched.question && formik.errors.question ? <ErrorAlert>{formik.errors.question}</ErrorAlert> : null}
				<button
					type="submit"
					className="bg-gradient-to-r from-[#263286] to-[#3848C0F5] md:px-[20px] md:py-[7px] px-[5dvw] py-[2dvw] rounded-[15px] md:font-bold md:text-[120%] text-[4dvw] text-[white]"
				>
					Ask Question
				</button>
			</form>


		</Dialog>
	)
}

export default QuestionForm