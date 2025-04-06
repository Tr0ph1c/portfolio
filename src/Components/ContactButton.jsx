const ContactButton = ({ title, link, imageSource }) => {
    return (
        <a href={link} target="_blank" className="contact-button">
            <img src={imageSource} alt={title + " icon"} />
            <p>{title}</p>
        </a>
    );
};

export default ContactButton;
