import { Helmet } from 'react-helmet-async';

const Seo = () => {
  return (
    <Helmet>
      {/* Título Principal para Google */}
      <title>Richard NB | Analista de Datos - Automatización e IA</title>
      
      {/* Metadatos Básicos */}
      <meta name="description" content="Portafolio de Richard NB. Analista de datos especializado en transformar información compleja en decisiones con Python, SQL y Power BI." />
      <meta name="keywords" content="Data Analyst, Richard NB, Python, SQL, Power BI, Automatización, IA, Análisis de Datos" />
      <meta name="author" content="Richard NB" />
      
      {/* Configuración para Redes Sociales (Open Graph) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Richard NB | Data Analyst Portfolio" />
      <meta property="og:description" content="Descubre mis proyectos y soluciones en el mundo de los datos e inteligencia artificial." />
      <meta property="og:image" content="/img/user.svg" /> {/* Asegúrate de que esta ruta sea correcta */}
      
      {/* Configuración para Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Richard NB | Data Analyst" />
      <meta name="twitter:description" content="Especialista en análisis de datos y arquitectura de información." />
    </Helmet>
  );
};

export default Seo;