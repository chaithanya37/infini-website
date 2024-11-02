import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCard from './SwiperCard';
import imageasset from '../../../assets/images/imageassets';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useMediaQuery } from 'react-responsive';

const Service3 = () => {
	const phone = useMediaQuery({ query: "(max-width:768px)" })
	return (
		<>
			<div className="md:w-[60%] w-[93%] h-auto m-auto md:mt-[100px] mt-[10dvw] flex flex-col items-center justify-start md:gap-[50px] gap-[20px]">
				<p className="md:text-[60px] text-[7dvw] font-heading">What Our Clients Say!</p>
				<div className="md:w-[80%] w-[100%] h-auto relative rounded-[15px]">
					<Swiper
						modules={[Navigation]}
						navigation={{
							nextEl: '.nextArrowNav',
							prevEl: '.prevArrowNav',
						}}
						spaceBetween={
							phone ? 100 : 50
						}
						centeredSlides={true}
						slidesPerView={
							(phone ? 2 : 2)
						}
						initialSlide={1}
						style={{ width: '100%', margin: '0 auto', borderRadius: "15px" }}
					>
						{/* <SwiperSlide>
							<SwiperCard img={imageasset.Avatar} name="Alex Turner" profession={"Data Scientist @ NexaCorp"} feedback={"“The teams insights transformed how we approach our data. Fast, efficient, and incredibly helpful!”"} />
						</SwiperSlide> */}
						<SwiperSlide>
  <SwiperCard 
    img={imageasset.Avatar1} 
    name="Ram Mohan" 
    profession={"Founder @Abhiruchi Restaurant"} 
    feedback={"“The team did an outstanding job with our college website. It’s intuitive, visually appealing, and has significantly improved our user engagement.”"} 
  />
</SwiperSlide>
<SwiperSlide>
  <SwiperCard 
    img={imageasset.Avatar2} 
    name="Prakash" 
    profession={"CEO @ Hasini Enterprise"} 
    feedback={"“Our e-commerce website was delivered with exceptional quality and efficiency. The user experience is top-notch, and we’ve seen an increase in customer satisfaction.”"} 
  />
</SwiperSlide>
						{/* <SwiperSlide>
							<SwiperCard img={imageasset.Avatar} name="Alex Turner" profession={"Data Scientist @ NexaCorp"} feedback={"“The teams insights transformed how we approach our data. Fast, efficient, and incredibly helpful!”"} />
						</SwiperSlide>
						<SwiperSlide>
							<SwiperCard img={imageasset.Avatar} name="Alex Turner" profession={"Data Scientist @ NexaCorp"} feedback={"“The team’s insights transformed how we approach our data. Fast, efficient, and incredibly helpful!”"} />
						</SwiperSlide> */}

						<div className="nextArrowNav border z-[10] w-[35px] h-[35px] bg-[white] absolute top-[50%] right-[18dvw] md:right-[20%] translate-y-[-50%] flex items-center justify-center rounded-[50%] cursor-pointer">
							<ArrowForwardIos sx={{ color: "black" }} />
						</div>

						<div className="prevArrowNav border z-[10] w-[35px] h-[35px] bg-[white] absolute top-[50%] left-[18dvw] md:left-[20%] translate-y-[-50%] flex items-center justify-center rounded-[50%] cursor-pointer">
							<ArrowBackIos sx={{ color: "black" }} />
						</div>

					</Swiper>

					<div className='absolute left-0 h-[100%] md:w-[120px] w-[17dvw] bg-left-feedback-linear z-[1] top-0 rounded-tr-[100%] rounded-br-[100%] rounded-tl-[15px] rounded-bl-[15px] backdrop-blur-[4px] ' >
					</div>

					<div className='absolute right-0 h-[100%] md:w-[120px] w-[17dvw] bg-right-feedback-linear z-[1] top-0 rounded-tl-[100%] rounded-bl-[100%] rounded-tr-[15%] rounded-br-[15%] backdrop-blur-[4px]' >
					</div>

				</div>
			</div >
		</>
	)
}


export default Service3