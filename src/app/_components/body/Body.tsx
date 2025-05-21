import BodyCardTile from "./BodyCardTile";

const Body = () => {
  return (
    <section id="body" className="w-full">
      <div className="container mx-auto px-2 py-15">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <BodyCardTile />
          <BodyCardTile />
          <BodyCardTile />
        </div>
      </div>
    </section>
  );
};

export default Body;
