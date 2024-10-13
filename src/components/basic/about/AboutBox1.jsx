

const AboutBox1 = ({ content }) => {
    return (
        <div className="w-[100%] md:min-h-[50px] min-h-[10px] bg-service-border-linear p-[1px] rounded-[20px]">
            <div className="w-[100%] h-[100%] flex items-center justify-center bg-[#21172f] rounded-[19px] md:px-[20px] md:py-[10px] px-[4dvw] py-[2dvw]">
                <p className="font-heading md:text-[30px] text-[2dvw]">{content}</p>
            </div>
        </div>
    )
}

export default AboutBox1