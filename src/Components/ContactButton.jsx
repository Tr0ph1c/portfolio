const ContactButton = ({ title, link }) => {
    return (
        <a href={link} target="_blank" className="contact-button">
            <img src={"/src/assets/" + title + ".svg"} alt={title + " icon"} />
            <p>{title}</p>
        </a>
    );
};

export default ContactButton;
