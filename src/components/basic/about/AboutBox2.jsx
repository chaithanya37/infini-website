import imageasset from "../../../assets/images/imageassets"

const AboutBox2 = ({ content }) => {
    return (
        <div className="md:w-[110px] md:h-[110px] w-[15dvw] h-[15dvw] rounded-[10px] md:gap-[0px] gap-[1dvw] flex flex-col items-center justify-center md:bg-about-box-linear bg-about-box-linear1 border-[rgba(255,255,255,0.2)] md:border-[2px] group hover:bg-white transition-[0.3s] md:hover:scale-[1.1] hover:scale-[1.05] origin-top-left">
            <img src={imageasset.about3} className="w-[4dvw] md:w-auto" />
            <p className="font-bold group-hover:text-[black] md:text-[100%] text-[2dvw]">{content}</p>
        </div>
    )
}

export default AboutBox2