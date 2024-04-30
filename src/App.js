import React, { useState } from 'react';
import './App.css'; // Importa  archivo de estilos CSS

function App() {
  const [selectedPDF, setSelectedPDF] = useState(null);

  // Array de objetos con la información de los PDF
  const pdfs = [
    {
      title: 'Percy Jackson y el ladron del rayo',
      description: (
        <p>
          ¿Qué pasaría si un día descubrieras que, en realidad, eres hijo de un dios griego que debe cumplir una misión secreta?
          Pues eso es lo que le sucede a Percy Jackson, que a partir de ese momento se dispone a vivir los acontecimientos más
          emocionantes de su vida.
          <br /><br />
          Expulsado de seis colegios, Percy padece dislexia y dificultades para concentrarse, o al menos ésa es la versión 
          oficial. Objeto de burlas por inventarse historias fantásticas, ni siquiera él mismo acaba de creérselas hasta el día 
          que los dioses del Olimpo le revelan la verdad: Percy es nada menos que un semidiós, es decir, el hijo de un dios y una
          mortal. Y como tal ha de descubrir quién ha robado el rayo de Zeus y así evitar que estalle una guerra entre los
          dioses. Para cumplir la misión contará con la ayuda de sus amigos Grover, un joven sátiro, y Annabeth, hija de 
          Atenea.
        </p>
      ),
      filePath: '/assets/percy1.pdf',
      imageUrl: '/assets/ladron_rayo.jpg'
    },
    {
      title: 'Percy Jackson y el mar de los monstruos',
      description:( <p>Desde que sabe que es hijo de un dios y una mortal, Percy Jackson espera que el destino le depare continuas aventuras.
        Y su expectativa se cumplirá con creces. Aunque el nuevo curso en la Escuela Meriwether transcurre con inusual normalidad, 
        un simple partido de balón prisionero acaba en batalla campal contra una banda de feroces gigantes. A partir de ahí, las cosas 
        se precipitan: el perímetro mágico que protege el Campamento Mestizo es destruido por un misterioso enemigo y la única seguridad 
        con que contaban los semidioses desaparece. Así, para impedir este daño irreparable, Percy y sus amigos inician la travesía 
        del temible Mar de los Monstruos en busca de lo único que puede salvar el campamento: el Vellocino de Oro.</p>
             ),
      filePath: '/assets/percy2.pdf',
      imageUrl: '/assets/mar_monstruos.jpg'
    },
    {
      title: 'Percy Jackson y la maldicion del titan',
      description:(<p>Ante la llamada de socorro de su amigo el sátiro Grover, Percy acude inmediatamente en su auxilio.
        Y aunque va acompañado de Annabeth y Thalia, las dos semidiosas que son sus aliadas, ninguno imagina la 
        sorpresa que los aguarda: una terrible mantícora pretende secuestrarlos y llevarlos ante el general enviado por 
        Cronos, el diabólico señor de los titanes.<br /><br />
        embargo, gracias a la ayuda de las cazadoras de Artemisa, Percy y sus aliadas logran escapar y volver al 
        campamento mestizo. Una vez allí, emprenderán la búsqueda del monstruo que puede provocar la destrucción del Olimpo, 
        a pesar de que, según la profecía del Oráculo, sólo uno de ellos logrará resistir la maldición del titán.</p>
             ),
      filePath: '/assets/percy3.pdf',
      imageUrl: '/assets/maldicion_titan.jpg'
    },

    // Agregar más PDF aqui
  ];

  const handleClick = (pdf) => {
    setSelectedPDF(pdf);
    // Abre una nueva ventana para mostrar el PDF
    window.open(pdf.filePath, '_blank');
  };

  return (
    <div className="App">
      <h1 className="title">BIBLIOTECA VIRTUAL</h1>
      {pdfs.map((pdf, index) => (
        <div key={index} className="pdf-container">
          <div className="pdf-info">
            <h3>{pdf.title}</h3>
            <p>{pdf.description}</p>
          </div>
          <img className="thumbnail" src={pdf.imageUrl} alt={`Thumbnail ${pdf.title}`} />
          <button onClick={() => handleClick(pdf)}>{pdf.title}</button>
        </div>
      ))}
    </div>
  );
}

export default App;
/* Referencias
"C:\Users\ericm\Desktop\visualizadorPdfReact-master\src\docs\ReactJS.pdf"
https://www.youtube.com/watch?v=2SwKpVVNfIE&list=PL8VCLfCNXjSZfAhqZT7RfWv5Anb8I9PfY
https://www.youtube.com/watch?v=h5I2yD6ntFM
https://react.dev/learn/tutorial-tic-tac-toe
https://reactrouter.com/en/main
https://es.legacy.reactjs.org/
https://www.escuelafrontend.com/crear-aplicaciones-en-react
*/