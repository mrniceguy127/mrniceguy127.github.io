import bulletHellIcon from "../../../res/images/project-icons/bullethell.png";
import chopChampsIcon from "../../../res/images/project-icons/chopchamps.png";
import hexapawnAIIcon from "../../../res/images/project-icons/hexapawnai.png";
import cpuIcon from "../../../res/images/project-icons/cpu.png";
import machinaIcon from "../../../res/images/project-icons/machina.png";

export default {
  header: "Projects",
  body: "Hobby projects and others.",
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
          link: "https://www.mrniceguy127.me/bullet-hell/",
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
          link: "https://www.mrniceguy127.me/hexapawn-ai/",
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
          link: "https://www.mrniceguy127.me/chop-champs/",
          iconType: "fas"
        }
      ]
    },
    {
      key: "16-bit-cpu",
      title: "16-bit CPU",
      icon: cpuIcon,
      buttons: [
        {
          key: "github",
          text: "",
          icon: "github",
          link: "https://github.com/mrniceguy127/16-bit-cpu",
          iconType: "fab"
        }
      ]
    },
    {
      key: "machina",
      title: "Machina",
      icon: machinaIcon,
      buttons: [
        {
          key: "github",
          text: "",
          icon: "github",
          link: "https://github.com/mrniceguy127/machina",
          iconType: "fab"
        },
        {
          key: "website",
          text: "Website",
          icon: "globe-americas",
          link: "https://machina.mrniceguy127.me/",
          iconType: "fas"
        }
      ]
    }
  ]
};
