import { AccordionTrigger } from "../ui/accordion";

export default function FormSectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <AccordionTrigger className="items-center rounded-none border-b px-6 py-4 hover:no-underline">
      <div className="flex flex-col gap-1 text-left">
        <h4 className="text-base leading-6 font-semibold text-gray-950 dark:text-white">
          {title}
        </h4>
        <p className="overflow-hidden text-sm break-words text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </AccordionTrigger>
  );
}
