import { Card } from "~/components/ui/card";
import growingTeams from "~/assets/ai_growingteams2.png";

const BodyCardTile = () => {
  return (
    <Card className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-none border-none shadow-md">
      <div
        className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `url(${growingTeams.src})`,
          backgroundSize: "cover",
          backfaceVisibility: "hidden",
          opacity: 0.6,
        }}
      />
      <div className="absolute bottom-0 z-10 p-4 text-black">
        <h3 className="text-3xl font-bold">{"APPROACH SOLUTIONS"}</h3>
      </div>
    </Card>
  );
};

export default BodyCardTile;
