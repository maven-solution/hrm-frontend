import CustomTable from "@/components/dashboard/ui/customTable";
import DataCard from "@/components/dashboard/ui/dataCard";
import ChatBot from "@/components/website/MessengerCustomerChat";

const Index = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <DataCard title="Pages" count="1200" visitLink="/" createLink="/" />
        <DataCard title="Sections" count="1200" visitLink="/" createLink="/" />
        <DataCard title="Posts" count="1200" visitLink="/" createLink="/" />
        <DataCard
          title="Active Users"
          count="1200"
          visitLink="/"
          createLink="/"
        />
      </div>
      <ChatBot />
    </>
  );
};

export default Index;
