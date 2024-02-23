import { darkIcon, lightIcon } from "@/app/constants/links";

export function switchTheme(theme: String) {
    const switchToggle =
      document.querySelector<HTMLDivElement>("#switch-toggle");
    if (switchToggle) {
      if (theme === "light") {
        switchToggle.classList.remove( "-translate-x-1");
        switchToggle.classList.add( "translate-x-1/2");
        setTimeout(() => {
          if (switchToggle) {
            switchToggle.innerHTML = darkIcon;
          }
        }, 250);
      } else {
        switchToggle.classList.add( "-translate-x-1");
        switchToggle.classList.remove( "translate-x-1/2");
        setTimeout(() => {
          if (switchToggle) {
            switchToggle.innerHTML = lightIcon;
          }
        }, 250);
      }
    }
  }