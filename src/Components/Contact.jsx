import ContactButton from "./ContactButton";

import Discord from "/assets/Discord.svg";
import Whatsapp from "/assets/Whatsapp.svg";
import Linkedin from "/assets/Linkedin.svg";
import Github from "/assets/Github.svg";
import Gmail from "/assets/Gmail.svg";
import Gamejolt from "/assets/Gamejolt.svg";

const Contact = () => {
    let contactList = [
        ["Discord", "https://discordapp.com/users/304879934630002688", Discord],
        ["Whatsapp", "https://wa.me/+201062729177", Whatsapp],
        [
            "Linkedin",
            "https://www.linkedin.com/in/ahmed-mahmoud-13aa50220/",
            Linkedin,
        ],
        ["Github", "https://github.com/Tr0ph1c", Github],
        ["Gmail", "mailto:ahmmahmouda767@gmail.com", Gmail],
        ["Gamejolt", "https://gamejolt.com/@DatDude767", Gamejolt],
    ];

    return (
        <div
            className="flex flex-col w-10/12 h-full m-auto p-10 pt-5
        sm:pt-18"
        >
            <h1 className="text-2xl text-amber-100">Contact</h1>
            <p className="text-amber-400">
                Here are my social accounts, feel free to directly contact me
                through Discord, Whatsapp, or through my Gmail. I am also active
                on Github and Gamejolt.
            </p>
            <div className="flex flex-row flex-wrap gap-x-10 w-9/12 h-full m-auto mt-10">
                {contactList.map((contact, index) => (
                    <ContactButton
                        title={contact[0]}
                        link={contact[1]}
                        imageSource={contact[2]}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Contact;
