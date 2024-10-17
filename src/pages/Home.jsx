import Navbar from "../components/major/home/Navbar"
import Services from "../components/major/home/Services"
import About from "../components/major/home/About"
import Footer from "../components/major/home/Footer"
import { useState } from "react"
import Grid from "../components/basic/background/Grid"
import GradientAnimation from "../components/basic/background/GradientAnimation"

const Home = () => {

	const [aboutvisibility, setAboutvisibility] = useState(false);

	return (
		<div className="bg-[#0B021C] h-auto">
			<GradientAnimation>
				<Grid>
					<Navbar setAboutvisibility={setAboutvisibility} />
					{aboutvisibility
						? <About />
						: <Services />
					}
					<Footer />
				</Grid>
			</GradientAnimation>
		</div>
	)
}

export default Home