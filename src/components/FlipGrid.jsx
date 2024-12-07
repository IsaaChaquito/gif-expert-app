import { useState, useEffect, useRef } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

export const FlipGrid = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [items] = useState(
    Array.from({ length: 10 }, (_, i) => ({ id: i, color: getRandomColor() }))
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Actualiza el estado para disparar el re-render
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  const getGridColumns = () => {

    if (windowWidth > 1720) return 6;
    if (windowWidth > 1200) return 5;
    if (windowWidth > 960) return 4;
    if (windowWidth > 720) return 3;
    if (windowWidth > 480) return 2;
    return 1;

  };


  const flipKey = `${getGridColumns()}`;


  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h3 className="text-xl font-semibold">Responsive Flip Grid</h3>
      <Flipper flipKey={flipKey} spring={{ stiffness: 200, damping: 30 }}>
        <div
          className="w-full grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${getGridColumns()}, minmax(200px, 200px))`,
          }}
        >
          {items.map((item) => (
            <Flipped key={item.id} flipId={item.id}>
              <div
                className="w-[200px] aspect-video rounded-lg shadow-md"
                style={{ backgroundColor: item.color }}
              ></div>
            </Flipped>
          ))}
        </div>
      </Flipper>
    </div>
  );
};

// Función para generar colores aleatorios
function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;
}

export default FlipGrid;


