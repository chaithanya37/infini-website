

const SwiperCard = ({ img, name, profession, feedback }) => {
	return (
		<div className="md:w-[300px] w-[50dvw] md:min-h-[150px] min-h-[25dvw] translate-x-[-25px] md:translate-x-[-10px] p-[10px] flex flex-col items-start justify-between bg-white rounded-[15px] border-[3px] border-[rgba(0,0,0,0.4)]">
			<p className="text-black md:text-[95%] line-clamp-3 md:line-clamp-none text-[2.5dvw] font-bold">{feedback}</p>
			<div className="w-[100%] h-[35%] flex flex-row items-center justify-between">
				<div className="w-[20%] h-[100%] border-[red] flex items-center justify-start">
					<img src={img} className="h-[100%] rounded-[50%]" />
				</div>
				<div className="w-[75%] h-[100%] flex flex-col items-start justify-between">
					<p className="font-bold text-[black] md:text-[90%] text-[2.5dvw] opacity-[0.7]">{name}</p>
					<p className="text-[black] md:text-[90%] text-[2.5dvw] opacity-[0.5]">{profession}</p>
				</div>

			</div>
		</div>
	)
}

export default SwiperCard