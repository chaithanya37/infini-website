import imageasset from "../../../assets/images/imageassets"

const Footer6 = () => {
    return (
        <div className="md:min-w-[30%] min-w-[100%] md:h-[100%] flex md:flex-row flex-col items-center justify-between md:gap-[40px] gap-[2dvw] text-[white] md:rounded-[22px] rounded-[15px] md:border-[2px] border-[1px] border-[rgba(255,255,255,0.3)] md:px-[20px] md:py-[8px] px-[1dvw] py-[1dvw]">
            <a className="md:text-[150%] font-bold text-[3dvw]">Get in Touch</a>
            <div className="w-fit flex flex-row items-center justify-between gap-[10px]">
                <a href="https://www.facebook.com/infini.move/
" target="_blank"><img src={imageasset.Facebook} /></a>
                <a href="https://www.linkedin.com/groups/14501329" target="_blank"><img src={imageasset.Linkedin} /></a>
                <a href="https://www.instagram.com/invites/contact/?igsh=w27x5g1q5ch3&utm_content=vom7ob5" target="_blank"><img src={imageasset.Instagram} /></a>
                <a href="https://x.com/infinimove18076" target="_blank"><img src={imageasset.Twitter} /></a>
            </div>
        </div>
    )
}

export default Footer6
