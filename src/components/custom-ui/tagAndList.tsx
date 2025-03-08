import Card from "@/components/custom-ui/card";
import type React from "react";

/**
 * Tags Component Props
 * Supports three display modes:
 * 1. Single tag (string)
 * 2. Array of tags (string[])
 * 3. Grouped tags (object with category keys and string[] values)
 */
// src/components/custom-ui/tagAndList.tsx
// Update the interface definition
export interface TagsProps {
  items: Record<string, string[]> | string | string[];
  className?: string;
}

// Update the handling of object type in the component
export const Tags: React.FC<TagsProps> = ({ items, className }) => {
  // Single tag display
  if (typeof items === "string") {
    return (
      <span
        className={`font-medium bg-muted px-3 py-1 rounded-full text-sm max-sm:text-xs ${className}`}
      >
        {items}
      </span>
    );
  }

  // Array of tags display
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

  // Grouped tags display with categories (object case)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(items as Record<string, string[]>).map(
        ([category, itemList]) => (
          <div key={category}>
            <h4 className="text-lg font-bold mb-2">{category}</h4>
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
        )
      )}
    </div>
  );
};

/**
 * List Component Props
 * Generic type T must extend ListItem (WorkItem | EducationItem)
 */
export interface ListProps<T> {
  items: T[];
  className?: string;
  renderItem?: (item: T) => React.ReactNode;
}

/**
 * Work experience item structure
 */
type WorkItem = {
  company: string;
  timeframe: string;
  role: string;
  achievements: string[];
};

/**
 * Education item structure
 */
type EducationItem = {
  institution: string;
  description: string;
  timeframe: string;
};

type ListItem = WorkItem | EducationItem;

/**
 * List Component
 *
 * Renders a vertical list of cards for work experience or education items.
 * Features:
 * - Responsive layout with flexible content structure
 * - Custom rendering support through renderItem prop
 * - Default rendering with consistent card layout
 * - Type discrimination between work and education items
 */
export const List = <T extends ListItem>({
  items,
  className = "",
  renderItem,
}: ListProps<T>) => {
  return (
    <div className="space-y-8">
      {items.map((item) => {
        // Generate unique key based on item type
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
                {/* Title and Organization */}
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

                {/* Achievements (work experience only) */}
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

                {/* Timeframe */}
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
