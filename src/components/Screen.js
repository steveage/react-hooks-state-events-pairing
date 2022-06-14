function Screen({video}) {
    return (
        <div name="screen">
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
                />
                <h1>{video.title}</h1>
        </div>
    )
}

export default Screen;