import Card from "@/components/custom-ui/card";
import type React from "react";

// Tags Component
export interface TagsProps {
  items: object | string | string[]; // Now accepts object, string array, or single string
  className?: string;
}

export const Tags: React.FC<TagsProps> = ({ items, className }) => {
  // Handle single tag
  if (typeof items === "string") {
    return (
      <span
        className={`font-medium bg-muted px-3 py-1 rounded-full text-sm max-sm:text-xs ${className}`}
      >
        {items}
      </span>
    );
  }

  // Handle array of tags
  if (Array.isArray(items)) {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`font-medium bg-muted px-3 py-1 rounded-full text-sm max-sm:text-xs ${className}`}
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  // Handle grouped tags
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(items).map(([category, itemList]) => (
        <div key={category}>
          {/* Category Title */}
          <h4 className="text-lg font-bold mb-2">{category}</h4>
          {/* Item Tags */}
          <div className="flex flex-wrap gap-2">
            {Array.isArray(itemList) &&
              itemList.map((item: string) => (
                <span
                  key={item}
                  className={`font-medium bg-muted px-3 py-1 rounded-full text-sm max-sm:text-xs ${className}`}
                >
                  {item}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// List Component
export interface ListProps<T> {
  items: T[];
  className?: string;
  renderItem?: (item: T) => React.ReactNode;
}

type WorkItem = {
  company: string;
  timeframe: string;
  role: string;
  achievements: string[];
};

type EducationItem = {
  institution: string;
  description: string;
  timeframe: string;
};

type ListItem = WorkItem | EducationItem;

export const List = <T extends ListItem>({
  items,
  className = "",
  renderItem,
}: ListProps<T>) => {
  return (
    <div className="space-y-8">
      {items.map((item) => {
        const itemKey =
          "institution" in item
            ? item.institution
            : `${item.company}-${item.role}`;

        return (
          <Card
            key={itemKey}
            className={`flex flex-col p-6 bg-card rounded-lg shadow-sm ${className}`}
          >
            {renderItem ? (
              renderItem(item)
            ) : (
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                {/* Left side - Title and Company/Institution */}
                <div className="flex flex-col">
                  {"role" in item ? (
                    <>
                      <h3 className="font-semibold text-lg">{item.role}</h3>
                      <p className="text-muted-foreground">{item.company}</p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-semibold text-lg">
                        {item.institution}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </>
                  )}
                </div>

                {/* Center - Achievements */}
                {"achievements" in item && item.achievements.length > 0 && (
                  <ul className="list-disc list-inside space-y-2 flex-grow">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement.slice(0, 20)}
                        className="text-card-foreground"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Right side - Timeframe */}
                <div className="md:text-right whitespace-nowrap">
                  <h6 className="text-muted-foreground text-sm">
                    {item.timeframe}
                  </h6>
                </div>
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
};
