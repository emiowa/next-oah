function HeroBanner(page) {
  console.log(page);
  return (
    <div className="block">
      <div className="hero-banner">
        <img src={page.data.cover.url} />
      </div>
    </div>
  );
}

export default HeroBanner;
