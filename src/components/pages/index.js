module.exports.metadata = {
  title: "Gordelicias",
  description: "¿listos para Gordear?",
  keywords: "gorditas",
  image: "",
  robots: true,
  canonical: "",
  schema: {},
  priority: "1",
  lastmod: "",
  enable: true,
};

module.exports.pages = [
  {
    filename: "index.html",
    component: "@/components/pages/home/Home.js",
    title: "Gordelicias",
  },
  {
    filename: "aviso-de-privacidad.html",
    component: "@/components/pages/avisoPrivacidad/AvisoPrivacidad.js",
    title: "Aviso de Privacidad | Gordelicias",
  },
  {
    filename: "design-system.html",
    component: "@/components/pages/DesignSystem/DesignSystem.js",
    title: "Design System",
    enable: false,
  },
  {
    filename: "emit-props.html",
    component: "@/components/pages/emitProps/EmitProps.js",
    title: "Emit Props",
    enable: false,
  },
  {
    filename: "user.html",
    component: "@/components/pages/user/User.js",
    title: "User",
    enable: false,
  },
];
