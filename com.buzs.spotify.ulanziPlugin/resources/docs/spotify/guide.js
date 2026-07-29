const REDIRECT_URI = "http://127.0.0.1:30901/oauth2callback";

const localeNames = {
  en: "English",
  de_DE: "Deutsch",
  es_ES: "Español",
  ja_JP: "日本語",
  ko_KR: "한국어",
  pt_BR: "Português (Brasil)",
  pt_PT: "Português (Portugal)",
  zh_CN: "简体中文",
  zh_HK: "繁體中文"
};

const localeMap = {
  de: "de_DE",
  "de-de": "de_DE",
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  es: "es_ES",
  "es-es": "es_ES",
  ja: "ja_JP",
  "ja-jp": "ja_JP",
  ko: "ko_KR",
  "ko-kr": "ko_KR",
  pt: "pt_BR",
  "pt-br": "pt_BR",
  "pt-pt": "pt_PT",
  zh: "zh_CN",
  "zh-cn": "zh_CN",
  "zh-hans": "zh_CN",
  "zh-hk": "zh_HK",
  "zh-tw": "zh_HK",
  "zh-hant": "zh_HK"
};

const translations = {
  en: {
    eyebrow: "Local setup guide",
    title: "Connect Spotify Enhanced",
    lead: "Create your own Spotify Developer app and connect it to the Ulanzi D200 plugin.",
    language: "Language",
    premiumTitle: "Spotify Premium is required.",
    premiumBody: "Spotify Web API playback control only works with Premium accounts.",
    redirectTitle: "Redirect URI",
    redirectIntro: "Add this URI to your Spotify Developer app:",
    redirectFallback: "If the Ulanzi settings panel shows a different URI, use the exact URI shown there instead.",
    copy: "Copy",
    copied: "Copied",
    stepsTitle: "Create the Spotify app",
    dashboard: "Open Spotify Developer Dashboard",
    connectTitle: "Connect in Ulanzi",
    privacyTitle: "Privacy",
    privacyBody: "Credentials are stored locally in the installed plugin folder. Tokens and Client Secret are encrypted with AES-256-GCM.",
    troubleTitle: "Troubleshooting",
    footer: "This page is bundled with Spotify Enhanced and works offline. Spotify trademarks belong to Spotify AB.",
    steps: [
      "Open Spotify Developer Dashboard and sign in with your Spotify account.",
      "Click Create app.",
      "Use any app name and description, such as Spotify Enhanced for Ulanzi.",
      `Add ${REDIRECT_URI} as the Redirect URI.`,
      "Select Web API.",
      "Accept Spotify's terms and save the app.",
      "Open the app settings, then copy the Client ID and Client Secret."
    ],
    connectSteps: [
      "Return to the Ulanzi settings panel for any Spotify Enhanced action.",
      "Paste the Client ID and Client Secret.",
      "Click Connect and approve the Spotify authorization page.",
      "Keep Spotify open on at least one device before using playback actions."
    ],
    troubleshooting: [
      "Redirect URI mismatch: add the exact URI shown in the Ulanzi settings panel.",
      "INVALID_CLIENT: confirm the Client ID and Client Secret came from the same Spotify app.",
      "No devices: open Spotify desktop, mobile or web player and start playback once.",
      "Playback control fails: verify that the account has Spotify Premium.",
      "Leaked secret: rotate the Client Secret in Spotify Developer Dashboard and reconnect."
    ]
  },
  pt_BR: {
    eyebrow: "Guia local de configuração",
    title: "Conectar o Spotify Enhanced",
    lead: "Crie seu próprio app no Spotify Developer e conecte ao plugin para Ulanzi D200.",
    language: "Idioma",
    premiumTitle: "Spotify Premium é obrigatório.",
    premiumBody: "O controle de reprodução pela Spotify Web API só funciona com contas Premium.",
    redirectTitle: "URI de redirecionamento",
    redirectIntro: "Adicione esta URI ao app no Spotify Developer:",
    redirectFallback: "Se o painel da Ulanzi mostrar outra URI, use exatamente a URI exibida no painel.",
    copy: "Copiar",
    copied: "Copiado",
    stepsTitle: "Criar o app no Spotify",
    dashboard: "Abrir Spotify Developer Dashboard",
    connectTitle: "Conectar na Ulanzi",
    privacyTitle: "Privacidade",
    privacyBody: "As credenciais ficam salvas localmente na pasta do plugin instalado. Tokens e Client Secret são criptografados com AES-256-GCM.",
    troubleTitle: "Solução de problemas",
    footer: "Esta página vem junto com o Spotify Enhanced e funciona offline. As marcas Spotify pertencem à Spotify AB.",
    steps: [
      "Abra o Spotify Developer Dashboard e entre com sua conta Spotify.",
      "Clique em Create app.",
      "Use qualquer nome e descrição, por exemplo Spotify Enhanced for Ulanzi.",
      `Adicione ${REDIRECT_URI} como Redirect URI.`,
      "Selecione Web API.",
      "Aceite os termos do Spotify e salve o app.",
      "Abra as configurações do app e copie o Client ID e o Client Secret."
    ],
    connectSteps: [
      "Volte ao painel de configuração de qualquer ação do Spotify Enhanced na Ulanzi.",
      "Cole o Client ID e o Client Secret.",
      "Clique em Connect e aprove a autorização no Spotify.",
      "Mantenha o Spotify aberto em pelo menos um dispositivo antes de usar as ações."
    ],
    troubleshooting: [
      "Redirect URI mismatch: adicione exatamente a URI mostrada no painel da Ulanzi.",
      "INVALID_CLIENT: confirme que Client ID e Client Secret são do mesmo app Spotify.",
      "Sem dispositivos: abra o Spotify desktop, mobile ou web player e inicie uma reprodução uma vez.",
      "Controle não funciona: confirme que a conta tem Spotify Premium.",
      "Secret vazou: rotacione o Client Secret no Spotify Developer Dashboard e conecte novamente."
    ]
  },
  pt_PT: {
    eyebrow: "Guia local de configuração",
    title: "Ligar o Spotify Enhanced",
    lead: "Cria a tua própria app no Spotify Developer e liga-a ao plugin para Ulanzi D200.",
    language: "Idioma",
    premiumTitle: "Spotify Premium é obrigatório.",
    premiumBody: "O controlo de reprodução pela Spotify Web API só funciona com contas Premium.",
    redirectTitle: "URI de redirecionamento",
    redirectIntro: "Adiciona esta URI à app no Spotify Developer:",
    redirectFallback: "Se o painel da Ulanzi mostrar outra URI, usa exatamente a URI apresentada no painel.",
    copy: "Copiar",
    copied: "Copiado",
    stepsTitle: "Criar a app no Spotify",
    dashboard: "Abrir Spotify Developer Dashboard",
    connectTitle: "Ligar na Ulanzi",
    privacyTitle: "Privacidade",
    privacyBody: "As credenciais ficam guardadas localmente na pasta do plugin instalado. Tokens e Client Secret são cifrados com AES-256-GCM.",
    troubleTitle: "Resolução de problemas",
    footer: "Esta página vem incluída com o Spotify Enhanced e funciona offline. As marcas Spotify pertencem à Spotify AB.",
    steps: [
      "Abre o Spotify Developer Dashboard e inicia sessão com a tua conta Spotify.",
      "Clica em Create app.",
      "Usa qualquer nome e descrição, por exemplo Spotify Enhanced for Ulanzi.",
      `Adiciona ${REDIRECT_URI} como Redirect URI.`,
      "Seleciona Web API.",
      "Aceita os termos do Spotify e guarda a app.",
      "Abre as definições da app e copia o Client ID e o Client Secret."
    ],
    connectSteps: [
      "Volta ao painel de configuração de qualquer ação Spotify Enhanced na Ulanzi.",
      "Cola o Client ID e o Client Secret.",
      "Clica em Connect e aprova a autorização no Spotify.",
      "Mantém o Spotify aberto em pelo menos um dispositivo antes de usar as ações."
    ],
    troubleshooting: [
      "Redirect URI mismatch: adiciona exatamente a URI mostrada no painel da Ulanzi.",
      "INVALID_CLIENT: confirma que Client ID e Client Secret pertencem à mesma app Spotify.",
      "Sem dispositivos: abre o Spotify desktop, mobile ou web player e inicia uma reprodução uma vez.",
      "O controlo não funciona: confirma que a conta tem Spotify Premium.",
      "Secret exposto: roda o Client Secret no Spotify Developer Dashboard e liga novamente."
    ]
  },
  es_ES: {
    eyebrow: "Guía local de configuración",
    title: "Conectar Spotify Enhanced",
    lead: "Crea tu propia app de Spotify Developer y conéctala al plugin para Ulanzi D200.",
    language: "Idioma",
    premiumTitle: "Se requiere Spotify Premium.",
    premiumBody: "El control de reproducción mediante Spotify Web API solo funciona con cuentas Premium.",
    redirectTitle: "URI de redirección",
    redirectIntro: "Añade esta URI a tu app de Spotify Developer:",
    redirectFallback: "Si el panel de Ulanzi muestra otra URI, usa exactamente la URI que aparece allí.",
    copy: "Copiar",
    copied: "Copiado",
    stepsTitle: "Crear la app de Spotify",
    dashboard: "Abrir Spotify Developer Dashboard",
    connectTitle: "Conectar en Ulanzi",
    privacyTitle: "Privacidad",
    privacyBody: "Las credenciales se guardan localmente en la carpeta del plugin instalado. Los tokens y el Client Secret se cifran con AES-256-GCM.",
    troubleTitle: "Solución de problemas",
    footer: "Esta página está incluida con Spotify Enhanced y funciona sin conexión. Las marcas Spotify pertenecen a Spotify AB.",
    steps: [
      "Abre Spotify Developer Dashboard e inicia sesión con tu cuenta de Spotify.",
      "Haz clic en Create app.",
      "Usa cualquier nombre y descripción, por ejemplo Spotify Enhanced for Ulanzi.",
      `Añade ${REDIRECT_URI} como Redirect URI.`,
      "Selecciona Web API.",
      "Acepta los términos de Spotify y guarda la app.",
      "Abre los ajustes de la app y copia el Client ID y el Client Secret."
    ],
    connectSteps: [
      "Vuelve al panel de ajustes de cualquier acción de Spotify Enhanced en Ulanzi.",
      "Pega el Client ID y el Client Secret.",
      "Haz clic en Connect y aprueba la autorización de Spotify.",
      "Mantén Spotify abierto en al menos un dispositivo antes de usar las acciones."
    ],
    troubleshooting: [
      "Redirect URI mismatch: añade exactamente la URI mostrada en el panel de Ulanzi.",
      "INVALID_CLIENT: confirma que Client ID y Client Secret son de la misma app de Spotify.",
      "Sin dispositivos: abre Spotify desktop, móvil o web player e inicia una reproducción una vez.",
      "El control no funciona: confirma que la cuenta tiene Spotify Premium.",
      "Secret filtrado: rota el Client Secret en Spotify Developer Dashboard y vuelve a conectar."
    ]
  },
  de_DE: {
    eyebrow: "Lokale Einrichtungsanleitung",
    title: "Spotify Enhanced verbinden",
    lead: "Erstelle deine eigene Spotify Developer App und verbinde sie mit dem Ulanzi D200 Plugin.",
    language: "Sprache",
    premiumTitle: "Spotify Premium ist erforderlich.",
    premiumBody: "Die Wiedergabesteuerung über die Spotify Web API funktioniert nur mit Premium-Konten.",
    redirectTitle: "Redirect URI",
    redirectIntro: "Füge diese URI zu deiner Spotify Developer App hinzu:",
    redirectFallback: "Wenn das Ulanzi-Einstellungsfenster eine andere URI zeigt, verwende genau diese URI.",
    copy: "Kopieren",
    copied: "Kopiert",
    stepsTitle: "Spotify-App erstellen",
    dashboard: "Spotify Developer Dashboard öffnen",
    connectTitle: "In Ulanzi verbinden",
    privacyTitle: "Datenschutz",
    privacyBody: "Anmeldedaten werden lokal im installierten Plugin-Ordner gespeichert. Tokens und Client Secret werden mit AES-256-GCM verschlüsselt.",
    troubleTitle: "Fehlerbehebung",
    footer: "Diese Seite ist in Spotify Enhanced enthalten und funktioniert offline. Spotify-Marken gehören Spotify AB.",
    steps: [
      "Öffne das Spotify Developer Dashboard und melde dich mit deinem Spotify-Konto an.",
      "Klicke auf Create app.",
      "Verwende einen beliebigen Namen und eine Beschreibung, z. B. Spotify Enhanced for Ulanzi.",
      `Füge ${REDIRECT_URI} als Redirect URI hinzu.`,
      "Wähle Web API aus.",
      "Akzeptiere die Spotify-Bedingungen und speichere die App.",
      "Öffne die App-Einstellungen und kopiere Client ID und Client Secret."
    ],
    connectSteps: [
      "Kehre zum Ulanzi-Einstellungsfenster einer Spotify Enhanced Aktion zurück.",
      "Füge Client ID und Client Secret ein.",
      "Klicke auf Connect und bestätige die Spotify-Autorisierung.",
      "Lasse Spotify auf mindestens einem Gerät geöffnet, bevor du Aktionen verwendest."
    ],
    troubleshooting: [
      "Redirect URI mismatch: füge exakt die URI aus dem Ulanzi-Einstellungsfenster hinzu.",
      "INVALID_CLIENT: prüfe, ob Client ID und Client Secret aus derselben Spotify-App stammen.",
      "Keine Geräte: öffne Spotify Desktop, Mobile oder Web Player und starte einmal die Wiedergabe.",
      "Steuerung schlägt fehl: prüfe, ob das Konto Spotify Premium hat.",
      "Secret geleakt: rotiere das Client Secret im Spotify Developer Dashboard und verbinde erneut."
    ]
  },
  ja_JP: {
    eyebrow: "ローカル設定ガイド",
    title: "Spotify Enhanced を接続",
    lead: "Spotify Developer アプリを作成し、Ulanzi D200 プラグインに接続します。",
    language: "言語",
    premiumTitle: "Spotify Premium が必要です。",
    premiumBody: "Spotify Web API による再生操作は Premium アカウントでのみ動作します。",
    redirectTitle: "リダイレクト URI",
    redirectIntro: "この URI を Spotify Developer アプリに追加してください:",
    redirectFallback: "Ulanzi 設定パネルに別の URI が表示される場合は、その URI を正確に使用してください。",
    copy: "コピー",
    copied: "コピー済み",
    stepsTitle: "Spotify アプリを作成",
    dashboard: "Spotify Developer Dashboard を開く",
    connectTitle: "Ulanzi で接続",
    privacyTitle: "プライバシー",
    privacyBody: "認証情報はインストール済みプラグインフォルダーにローカル保存されます。トークンと Client Secret は AES-256-GCM で暗号化されます。",
    troubleTitle: "トラブルシューティング",
    footer: "このページは Spotify Enhanced に同梱され、オフラインで動作します。Spotify の商標は Spotify AB に帰属します。",
    steps: [
      "Spotify Developer Dashboard を開き、Spotify アカウントでサインインします。",
      "Create app をクリックします。",
      "Spotify Enhanced for Ulanzi など任意の名前と説明を入力します。",
      `${REDIRECT_URI} を Redirect URI として追加します。`,
      "Web API を選択します。",
      "Spotify の利用規約に同意してアプリを保存します。",
      "アプリ設定を開き、Client ID と Client Secret をコピーします。"
    ],
    connectSteps: [
      "Ulanzi の Spotify Enhanced アクション設定パネルに戻ります。",
      "Client ID と Client Secret を貼り付けます。",
      "Connect をクリックし、Spotify の認証ページで承認します。",
      "操作を使う前に、少なくとも 1 台のデバイスで Spotify を開いてください。"
    ],
    troubleshooting: [
      "Redirect URI mismatch: Ulanzi 設定パネルに表示された URI を正確に追加してください。",
      "INVALID_CLIENT: Client ID と Client Secret が同じ Spotify アプリのものか確認してください。",
      "デバイスがない: Spotify desktop、mobile、または web player を開いて一度再生してください。",
      "再生操作に失敗する: アカウントが Spotify Premium か確認してください。",
      "Secret が漏れた: Spotify Developer Dashboard で Client Secret をローテーションして再接続してください。"
    ]
  },
  ko_KR: {
    eyebrow: "로컬 설정 가이드",
    title: "Spotify Enhanced 연결",
    lead: "Spotify Developer 앱을 만들고 Ulanzi D200 플러그인에 연결하세요.",
    language: "언어",
    premiumTitle: "Spotify Premium이 필요합니다.",
    premiumBody: "Spotify Web API 재생 제어는 Premium 계정에서만 작동합니다.",
    redirectTitle: "리디렉션 URI",
    redirectIntro: "이 URI를 Spotify Developer 앱에 추가하세요:",
    redirectFallback: "Ulanzi 설정 패널에 다른 URI가 표시되면, 표시된 정확한 URI를 사용하세요.",
    copy: "복사",
    copied: "복사됨",
    stepsTitle: "Spotify 앱 만들기",
    dashboard: "Spotify Developer Dashboard 열기",
    connectTitle: "Ulanzi에서 연결",
    privacyTitle: "개인정보",
    privacyBody: "자격 증명은 설치된 플러그인 폴더에 로컬로 저장됩니다. 토큰과 Client Secret은 AES-256-GCM으로 암호화됩니다.",
    troubleTitle: "문제 해결",
    footer: "이 페이지는 Spotify Enhanced에 포함되어 있으며 오프라인으로 작동합니다. Spotify 상표는 Spotify AB에 속합니다.",
    steps: [
      "Spotify Developer Dashboard를 열고 Spotify 계정으로 로그인합니다.",
      "Create app을 클릭합니다.",
      "Spotify Enhanced for Ulanzi와 같은 이름과 설명을 입력합니다.",
      `${REDIRECT_URI}를 Redirect URI로 추가합니다.`,
      "Web API를 선택합니다.",
      "Spotify 약관에 동의하고 앱을 저장합니다.",
      "앱 설정을 열고 Client ID와 Client Secret을 복사합니다."
    ],
    connectSteps: [
      "Ulanzi의 Spotify Enhanced 작업 설정 패널로 돌아갑니다.",
      "Client ID와 Client Secret을 붙여넣습니다.",
      "Connect를 클릭하고 Spotify 인증 페이지에서 승인합니다.",
      "작업을 사용하기 전에 하나 이상의 기기에서 Spotify를 열어 두세요."
    ],
    troubleshooting: [
      "Redirect URI mismatch: Ulanzi 설정 패널에 표시된 정확한 URI를 추가하세요.",
      "INVALID_CLIENT: Client ID와 Client Secret이 같은 Spotify 앱의 것인지 확인하세요.",
      "기기 없음: Spotify desktop, mobile 또는 web player를 열고 한 번 재생하세요.",
      "재생 제어 실패: 계정에 Spotify Premium이 있는지 확인하세요.",
      "Secret 유출: Spotify Developer Dashboard에서 Client Secret을 교체하고 다시 연결하세요."
    ]
  },
  zh_CN: {
    eyebrow: "本地设置指南",
    title: "连接 Spotify Enhanced",
    lead: "创建你自己的 Spotify Developer 应用，并连接到 Ulanzi D200 插件。",
    language: "语言",
    premiumTitle: "需要 Spotify Premium。",
    premiumBody: "Spotify Web API 播放控制仅适用于 Premium 账号。",
    redirectTitle: "重定向 URI",
    redirectIntro: "将此 URI 添加到你的 Spotify Developer 应用:",
    redirectFallback: "如果 Ulanzi 设置面板显示不同 URI，请使用面板中显示的确切 URI。",
    copy: "复制",
    copied: "已复制",
    stepsTitle: "创建 Spotify 应用",
    dashboard: "打开 Spotify Developer Dashboard",
    connectTitle: "在 Ulanzi 中连接",
    privacyTitle: "隐私",
    privacyBody: "凭据会本地保存在已安装插件文件夹中。令牌和 Client Secret 使用 AES-256-GCM 加密。",
    troubleTitle: "故障排除",
    footer: "此页面随 Spotify Enhanced 一起提供，可离线使用。Spotify 商标归 Spotify AB 所有。",
    steps: [
      "打开 Spotify Developer Dashboard，并使用你的 Spotify 账号登录。",
      "点击 Create app。",
      "输入任意应用名称和描述，例如 Spotify Enhanced for Ulanzi。",
      `将 ${REDIRECT_URI} 添加为 Redirect URI。`,
      "选择 Web API。",
      "接受 Spotify 条款并保存应用。",
      "打开应用设置，复制 Client ID 和 Client Secret。"
    ],
    connectSteps: [
      "返回 Ulanzi 中任意 Spotify Enhanced 操作的设置面板。",
      "粘贴 Client ID 和 Client Secret。",
      "点击 Connect，并在 Spotify 授权页面批准。",
      "使用操作前，请至少在一台设备上打开 Spotify。"
    ],
    troubleshooting: [
      "Redirect URI mismatch: 添加 Ulanzi 设置面板中显示的确切 URI。",
      "INVALID_CLIENT: 确认 Client ID 和 Client Secret 来自同一个 Spotify 应用。",
      "没有设备: 打开 Spotify 桌面版、移动端或网页播放器并先播放一次。",
      "播放控制失败: 确认账号拥有 Spotify Premium。",
      "Secret 泄露: 在 Spotify Developer Dashboard 中轮换 Client Secret 并重新连接。"
    ]
  },
  zh_HK: {
    eyebrow: "本機設定指南",
    title: "連接 Spotify Enhanced",
    lead: "建立你自己的 Spotify Developer 應用程式，並連接到 Ulanzi D200 插件。",
    language: "語言",
    premiumTitle: "需要 Spotify Premium。",
    premiumBody: "Spotify Web API 播放控制只適用於 Premium 帳戶。",
    redirectTitle: "重新導向 URI",
    redirectIntro: "將此 URI 加到你的 Spotify Developer 應用程式:",
    redirectFallback: "如果 Ulanzi 設定面板顯示不同 URI，請使用面板中顯示的確切 URI。",
    copy: "複製",
    copied: "已複製",
    stepsTitle: "建立 Spotify 應用程式",
    dashboard: "開啟 Spotify Developer Dashboard",
    connectTitle: "在 Ulanzi 中連接",
    privacyTitle: "私隱",
    privacyBody: "憑證會本機儲存在已安裝插件資料夾中。Token 和 Client Secret 會使用 AES-256-GCM 加密。",
    troubleTitle: "疑難排解",
    footer: "此頁面隨 Spotify Enhanced 一起提供，可離線使用。Spotify 商標屬於 Spotify AB。",
    steps: [
      "開啟 Spotify Developer Dashboard，並使用你的 Spotify 帳戶登入。",
      "按 Create app。",
      "輸入任何應用程式名稱和描述，例如 Spotify Enhanced for Ulanzi。",
      `將 ${REDIRECT_URI} 加為 Redirect URI。`,
      "選擇 Web API。",
      "接受 Spotify 條款並儲存應用程式。",
      "開啟應用程式設定，複製 Client ID 和 Client Secret。"
    ],
    connectSteps: [
      "返回 Ulanzi 中任何 Spotify Enhanced 操作的設定面板。",
      "貼上 Client ID 和 Client Secret。",
      "按 Connect，並在 Spotify 授權頁批准。",
      "使用操作前，請至少在一部裝置上開啟 Spotify。"
    ],
    troubleshooting: [
      "Redirect URI mismatch: 加入 Ulanzi 設定面板中顯示的確切 URI。",
      "INVALID_CLIENT: 確認 Client ID 和 Client Secret 來自同一個 Spotify 應用程式。",
      "沒有裝置: 開啟 Spotify 桌面版、手機版或網頁播放器並先播放一次。",
      "播放控制失敗: 確認帳戶擁有 Spotify Premium。",
      "Secret 外洩: 在 Spotify Developer Dashboard 中輪換 Client Secret 並重新連接。"
    ]
  }
};

function normalizeLocale(locale) {
  const key = String(locale || "").trim().replace(/_/g, "-").toLowerCase();
  if (localeMap[key]) return localeMap[key];
  return localeMap[key.split("-")[0]] || "en";
}

function selectedLocale() {
  const params = new URLSearchParams(location.search);
  return normalizeLocale(params.get("lang") || navigator.language || "en");
}

function setText(key, value) {
  document.querySelectorAll(`[data-i18n="${key}"]`).forEach((node) => {
    node.textContent = value;
  });
}

function renderList(id, items) {
  const root = document.getElementById(id);
  root.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    root.appendChild(li);
  }
}

function renderLanguagePicker(locale) {
  const picker = document.getElementById("language");
  picker.innerHTML = "";
  for (const [value, label] of Object.entries(localeNames)) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    option.selected = value === locale;
    picker.appendChild(option);
  }
  picker.addEventListener("change", () => {
    const url = new URL(location.href);
    url.searchParams.set("lang", picker.value);
    location.href = url.toString();
  });
}

function render(locale) {
  const data = translations[locale] || translations.en;
  document.documentElement.lang = locale.replace("_", "-");
  document.title = data.title;
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string") setText(key, value);
  }
  renderList("steps", data.steps);
  renderList("connect-steps", data.connectSteps);
  renderList("troubleshooting", data.troubleshooting);
  renderLanguagePicker(locale);
}

document.getElementById("redirect-uri").textContent = REDIRECT_URI;
document.getElementById("copy-redirect").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const locale = selectedLocale();
  const data = translations[locale] || translations.en;
  try {
    await navigator.clipboard.writeText(REDIRECT_URI);
    button.textContent = data.copied;
    setTimeout(() => {
      button.textContent = data.copy;
    }, 1500);
  } catch {
    button.textContent = REDIRECT_URI;
  }
});

render(selectedLocale());
