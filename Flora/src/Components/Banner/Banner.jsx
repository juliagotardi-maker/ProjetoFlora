export default function Main() {

  const banners = [
    banner1,
    banner2,
    banner3
  ];

  const [slideAtual, setSlideAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideAtual((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const proximoSlide = () => {
    setSlideAtual(
      slideAtual === banners.length - 1 ? 0 : slideAtual + 1
    );
  };

  const slideAnterior = () => {
    setSlideAtual(
      slideAtual === 0 ? banners.length - 1 : slideAtual - 1
    );
  };

  return (
    <main>

      <section className="carousel">

        <button
          className="btn-slide left"
          onClick={slideAnterior}
        >
          ❮
        </button>

        <img
          src={banners[slideAtual]}
          alt="Banner"
          className="banner-slide"
        />

        <button
          className="btn-slide right"
          onClick={proximoSlide}
        >
          ❯
        </button>

        <div className="indicadores">
          {banners.map((_, index) => (
            <span
              key={index}
              className={
                slideAtual === index
                  ? "dot active"
                  : "dot"
              }
            />
          ))}
        </div>

      </section>

      {/* resto do seu conteúdo */}

    </main>
  );
}