
const Card = ({ children, bg }: { children: React.ReactNode, bg: string }) => {
    return (
        <div className={`${bg} rounded-lg shadow-md relative`}>
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}

export default Card