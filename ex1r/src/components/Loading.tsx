export default function Loading() {
    return (
        <div className="h-screen w-screen z-10 backdrop-blur-sm justify-center text-center align-middle">
            <div className="z-20 w-14">
                <p>2</p>
                <div className="loading absolute w-2 h-2 scale-50 top-12">
                    <div className="absolute w-1/2"></div>
                    <div className="absolute w-1/2"></div>
                    <div className="absolute w-1/2"></div>
                    <div className="absolute w-1/2"></div>
                    <div className="absolute w-1/2"></div>
                    <div className="absolute w-1/2"></div>
                    <div className="absolute w-1/2"></div>
                    <div className="absolute w-1/2"></div>
                    <div className="absolute w-1/2"></div>
                    <div className="absolute w-1/2"></div>
                </div>
            </div>
        </div>
    )
}