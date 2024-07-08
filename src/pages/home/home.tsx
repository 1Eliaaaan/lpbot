import React from 'react';
import Navbar from '../../components/navbar/navbar';

const Home: React.FC = () => {
  return (
    <div className="flex pt-20">
      <Navbar />
      <div className="flex max-w-screen-xl ml-20 p-4 mt-20 justify-center pt-20">
        <img src="./../src/assets/peepoDJ.webp" alt="" className="h-40 justify-center" />
      </div>
      <div className="max-w-screen-xl mx-auto p-4 mt-20 ">
        <h1 className="text-white text-4xl font-bold mb-4 animate-bounce justify-center text-center mt-20">Bienvenido a LP Bot</h1>
       
        <p className="text-secondary text-xl mb-6">Descubre las mejores funcionalidades y cómo pueden ayudarte en tu día a día. Con LP Bot, transformarás tu experiencia de streaming al siguiente nivel. Este potente bot te permite integrar una variedad de herramientas diseñadas para optimizar tu interacción con la audiencia y mejorar la gestión de tu canal.
        </p>
        <ul className="list-disc list-inside text-tertiary text-xl mb-6">
        <li>
          <strong>Solicitud de canciones</strong>: Permite a tus espectadores solicitar sus canciones favoritas en tiempo real, manteniendo el ambiente musical de tu stream siempre fresco y personalizado.
        </li>
        <li>
          <strong>Visualización de combos</strong>: Muestra en pantalla los combos y acciones destacadas, añadiendo una capa extra de emoción y dinamismo a tus transmisiones.
        </li>
        <li>
          <strong>Comandos personalizados</strong>: Crea y configura comandos específicos según las necesidades de tu canal, facilitando la comunicación y el entretenimiento.
        </li>
        <li>
          <strong>Sistema de puntos</strong>: Implementa un sistema de puntos para recompensar a tus espectadores por su participación y lealtad, incentivando una mayor interacción.
        </li>
        <li>
          <strong>Métricas detalladas</strong>: Accede a estadísticas y métricas precisas que te ayudarán a comprender mejor el rendimiento de tus streams y el comportamiento de tu audiencia.
        </li>
      </ul>
      <p>
        Además, LP Bot se integra perfectamente con otras plataformas y herramientas que ya utilizas, ofreciendo una solución completa y eficiente para gestionar tu contenido. Ya sea que estés comenzando en el mundo del streaming o seas un creador de contenido experimentado, LP Bot está diseñado para adaptarse a tus necesidades y ayudarte a alcanzar tus objetivos.
      </p>
      <p>
        Explora todas estas funcionalidades y mucho más con LP Bot, y lleva tu canal al siguiente nivel de profesionalismo y entretenimiento.
      </p>
      </div>



 
    </div>
  );
};

export default Home;
