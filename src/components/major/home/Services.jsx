import Service1 from "../../basic/services/Service1"
import Service2 from "../../basic/services/Service2"
import Service3 from "../../basic/services/Service3"
import Service4 from "../../basic/services/Service4"

const services = () => {
	return (
		<div id="home" className="w-[100%] min-h-[500px] pt-[15dvw] md:pt-[70px] pb-[25dvw] md:pb-[150px] text-[white] overflow-hidden">
			<Service1 />
			<Service2 />
			<Service3 />
			<Service4 />
		</div>
	)
}

export default services