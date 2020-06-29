function HeroBanner(page) {
  return (
    <div className="block">
      <div className="hero-banner">
        <img src={page.data.cover.url} />
      </div>
    </div>
  );
}

export default HeroBanner;
