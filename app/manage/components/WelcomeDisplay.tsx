import { Button } from "@/components/ui/button";

const WelcomeDisplay = () => {
  return (
    <div className="flex flex-1 gap-x-6 text-center text-2xl md:text-left md:text-4xl py-4 px-4 font-light">
      <div>Manage Tasks</div>
      <div>
        <Button>Add New Task</Button>
      </div>
    </div>
  );
};

export default WelcomeDisplay;
