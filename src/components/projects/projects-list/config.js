import bulletHellIcon from "../../../res/images/project-icons/bullethell.png";
import chopChampsIcon from "../../../res/images/project-icons/chopchamps.png";
import koolBot2Icon from "../../../res/images/project-icons/kb2.png";
import hexapawnAIIcon from "../../../res/images/project-icons/hexapawnai.png";

export default {
  header: "Projects",
  body: "If you're interested, here is a list of some of my projects / hobby projects I've been working on.",
  projects: [
    {
      key: "bullet-hell",
      title: "Bullet Hell",
      icon: bulletHellIcon,
      buttons: [
        {
          key: "github",
          text: "",
          icon: "github",
          link: "https://github.com/mrniceguy127/bullet-hell",
          iconType: "fab"
        },
        {
          key: "demo",
          text: "Demo",
          icon: "play",
          link: "http://bullethell.mrniceguy127.me/",
          iconType: "fas"
        }
      ]
    },
    {
      key: "hexapawn-ai",
      title: "Hexapawn AI",
      icon: hexapawnAIIcon,
      buttons: [
        {
          key: "github",
          text: "",
          icon: "github",
          link: "https://github.com/mrniceguy127/hexapawn-ai",
          iconType: "fab"
        },
        {
          key: "demo",
          text: "Demo",
          icon: "play",
          link: "https://www.cs.drexel.edu/~mik37/",
          iconType: "fas"
        }
      ]
    },
    {
      key: "chop-champs",
      title: "Chop Champs",
      icon: chopChampsIcon,
      buttons: [
        {
          key: "github",
          text: "",
          icon: "github",
          link: "https://github.com/mrniceguy127/chop-champs",
          iconType: "fab"
        },
        {
          key: "demo",
          text: "Demo",
          icon: "play",
          link: "http://chopchamps.mrniceguy127.me/",
          iconType: "fas"
        }
      ]
    },
    {
      key: "kool-bot-2",
      title: "Kool-Bot 2",
      icon: koolBot2Icon,
      buttons: [
        {
          key: "website",
          text: "Website",
          icon: "globe-americas",
          link: "https://koolbot2.mrniceguy127.me/",
          iconType: "fas"
        }
      ]
    }
  ]
};
