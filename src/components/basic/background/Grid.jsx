

const Grid = ({ children }) => {
    return (
        <div className="w-auto h-auto relative z-[1]" style={{ backgroundImage: "url(/Grid.png)" }}>
            {children}
        </div>
    )
}

export default Grid;