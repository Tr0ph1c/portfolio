const Card = ({ imageSource, title }) => {
    return (
        <div
            className="w-20 h-20 m-auto bg-amber-600 border-amber-900 border-2
        rounded-md drop-shadow-md/70
        flex justify-center content-center flex-col
        md:w-50 md:h-50"
        >
            <img
                src={imageSource}
                alt={title + " icon"}
                className="w-9 h-auto m-auto
                md:w-24"
            />
            <p
                className="font-bold m-2 text-sm drop-shadow-none text-center
            md:text-2xl"
            >
                {title}
            </p>
        </div>
    );
};

export default Card;
