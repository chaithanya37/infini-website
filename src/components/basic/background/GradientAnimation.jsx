

const GradientAnimation = ({ children }) => {
    return (
        <div className="w-full h-full relative ">
            <div className="absolute w-full h-full">
                <div className="w-[30dvw] h-[30dvw] border bg-white hidden">

                </div>
            </div>
            {children}
        </div>
    )
}

export default GradientAnimation