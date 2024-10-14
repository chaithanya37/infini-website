

const AboutBox = ({ content }) => {
    return (
        <div className="md:w-[350px] w-[30dvw] min-h-[0px] bg-service-border-linear p-[1px] rounded-[20px]">
            <div className="w-[100%] h-[100%] flex items-center justify-center bg-[#21172f] rounded-[19px] px-[10px] md:py-[0px] py-[1dvw]">
                <p className="font-heading md:text-[50px] text-[3dvw]">{content}</p>
            </div>
        </div>
    )
}

export default AboutBox