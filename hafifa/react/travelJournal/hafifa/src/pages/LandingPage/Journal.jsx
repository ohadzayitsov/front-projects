import "./Journal.css";
import JournalCard from "../../components/JournalCard/JournalCard";
const Journal = () => {
  const journals = [
    {
      landmark: "Mount Fuji",
      country: "JAPAN",
      startDate: "12 Jan,2021",
      endDate: "24 Jan,2021",
      description:
        "Mount fuji is the tallest mountain in japan standing at 3,776 meter fefsf fef sjh hesf jkhfs hsefh jksfhsk jfh fsfrsfrsf fsfr frsfgdgrgrg rggrgrg grgr",
      image: "../../../public/Fuji.jpg",
    },
    {
      landmark: "Mount Fuji",
      country: "JAPAN",
      startDate: "12 Jan,2021",
      endDate: "24 Jan,2021",
      description:
        "Mount fuji is the tallest mountain in japan standing at 3,776 meter fefsf fef sjh hesf jkhfs hsefh jksfhsk jfh fsfrsfrsf fsfr frsfgdgrgrg rggrgrg grgr",
      image: "../../../public/Fuji.jpg",
    },
  ];
  return (
    <div className="body">
      {journals.map((journal) => {
        return (
          <JournalCard
            landmark={journal.landmark}
            country={journal.country}
            startDate={journal.startDate}
            endDate={journal.endDate}
            description={journal.description}
            image={journal.image}
          ></JournalCard>
        );
      })}
    </div>
  );
};

export default Journal;
