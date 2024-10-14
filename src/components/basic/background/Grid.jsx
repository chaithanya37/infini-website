

const Grid = ({ children }) => {
    return (
        <div className="w-auto h-auto" style={{ backgroundImage: "url(/Grid.png)" }}>
            {children}
        </div>
    )
}

export default Grid;