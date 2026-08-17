
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
  import { LanguageProvider } from "./app/context/LanguageContext.tsx";

  createRoot(document.getElementById("root")!).render(
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "NOT_SET"}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </GoogleReCaptchaProvider>
  );
  