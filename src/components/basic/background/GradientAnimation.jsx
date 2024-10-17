import BackgroundAnimation from "./BackgroundAnimation"


const GradientAnimation = ({ children }) => {
    return (
        <div className="w-full h-full relative">
            <BackgroundAnimation />
            {children}
        </div>
    )
}

export default GradientAnimation