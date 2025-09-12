    (function () {
      const DOWNLOAD_URL = "https://github.com/BobFlar/Puni-Manager/releases/download/1.2/PuniManager_1.2.apk";
      const FALLBACK_URL = "https://github.com/BobFlar/Puni-Manager/releases/tag/1.2";

      const btn = document.getElementById("downloadBtn");
      const fallback = document.getElementById("fallbackText");
      const lang = navigator.language.startsWith("fr") ? "fr" : "en";

      // textes FR/EN
      const texts = {
        fr: {
          download: "Télécharger l’apk",
          fallback: `Si le téléchargement ne commence pas, <a href="${FALLBACK_URL}" target="_blank" rel="noopener">clique ici</a>.`,
          source: "URL source : "
           },
        en: {
         download: "Download APK",
         fallback: `If the download does not start, <a href="${FALLBACK_URL}" target="_blank" rel="noopener">click here</a>.`,
         source: "Source URL: "
         }
      };

      btn.textContent = texts[lang].download;
      fallback.innerHTML = texts[lang].fallback;
      document.getElementById("sourceLabel").textContent = texts[lang].source;

      function triggerDownload() {
        const a = document.createElement("a");
        a.href = DOWNLOAD_URL;
        a.download = "Puni_Manager_1.2.apk";
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();

        setTimeout(() => {
          window.location.href = DOWNLOAD_URL;
        }, 250);
      }

      btn.addEventListener("click", () => {
        btn.disabled = true;
        btn.textContent = lang === "fr" ? "Préparation…" : "Preparing…";
        try {
          triggerDownload();
        } finally {
          setTimeout(() => {
            btn.disabled = false;
            btn.textContent = texts[lang].download;
          }, 1200);
        }
      });

    })();
