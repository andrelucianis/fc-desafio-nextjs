function getRandomWidth() {
    const fractions = ["1/2", "1/3", "3/4"];
    const randomIndex = Math.floor(Math.random() * fractions.length);
    return fractions[randomIndex];
}

export default function PostTitleSkeleton() {
    const style = `my-3 w-${getRandomWidth()}`
    return (
        <div className="animate-pulse overflow-hidden">
            <div className={style}>
                <div className="h-3 bg-gray-300 hover:bg-cyan-500 rounded mb-2"></div>
            </div>
        </div>
    )
}
