import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  dropdowns = [
    {
      title: "Game Rules",
      items: [
        { link: "classes", title: "Classes" },
        { link: "mechanics", title: "Mechanics" },
        { link: "equipment", title: "Equipment" },
      ],
    },
    {
      title: "Traits",
      items: [
        { link: "traits", title: "Traits" },
        { link: "feats", title: "Feats" },
        { link: "features", title: "Features" },
      ],
    },
  ];

  socialLinks = [
    {
      link: "https://www.facebook.com",
      icon: "../../assets/images/svg/facebook-svgrepo-com.svg",
      alt: "facebook",
    },
    {
      link: "https://www.twitter.com",
      icon: "../../assets/images/svg/twitter-svgrepo-com.svg",
      alt: "twitter",
    },
    {
      link: "https://www.youtube.com",
      icon: "../../assets/images/svg/youtube-svgrepo-com.svg",
      alt: "youtube",
    },
    {
      link: "https://www.twitch.tv",
      icon: "../../assets/images/svg/twitch-svgrepo-com.svg",
      alt: "twitch",
    },
  ];
}
