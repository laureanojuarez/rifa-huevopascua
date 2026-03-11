function App() {
  const nros = 100;

  

  const Caja = () => {
    return (
      <div
        className={`border w-24 h-24 flex flex-col items-center justify-center ${}`}
      >
        <p>Apellido</p>
        <p>Juarez</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p>Rifa Huevo Pascua</p>
      <div className="flex flex-wrap justify-center">
        {Array.from({ length: nros }, (_, i) => (
          <Caja key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
