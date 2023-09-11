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
    filename: "nosotros.html",
    component: "@/components/pages/aboutUs/AboutUs.js",
    title: "Nostros | Gordelicias",
  },
  {
    filename: "club-gordelicias.html",
    component: "@/components/pages/club/Club.js",
    title: "Club Gordelicias | Gordelicias",
  },
  {
    filename: "productos.html",
    component: "@/components/pages/products/Products.js",
    title: "Productos | Gordelicias",
  },
  {
    filename: "sucursales.html",
    component: "@/components/pages/schedule/Schedule.js",
    title: "Sucursales | Gordelicias",
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
