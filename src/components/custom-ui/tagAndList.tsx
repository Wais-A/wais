import Card from "@/components/custom-ui/card";
import type { Skills } from "@/types/person";
import type React from "react";

/**
 * Tags Component Props
 * Supports three display modes:
 * 1. Single tag (string)
 * 2. Array of tags (string[])
 * 3. Grouped tags (object with category keys and string[] values)
 */
export interface TagsProps {
  items: Record<string, string[]> | string | string[] | Skills;
  className?: string;
}

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
            className={`font-medium bg-muted hover:bg-muted/80 transition-colors px-3 py-1 rounded-full text-sm max-sm:text-xs ${className}`}
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
          <div key={category} className="space-y-3">
            <h3 className="text-lg font-semibold capitalize border-b pb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {Array.isArray(itemList) &&
                itemList.map((item: string) => (
                  <span
                    key={item}
                    className={`font-medium bg-muted hover:bg-muted/80 transition-colors px-3 py-1.5 rounded-full text-sm max-sm:text-xs ${className}`}
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
    <div className="space-y-6">
      {items.map((item, index) => {
        // Generate unique key based on item type
        const itemKey =
          "institution" in item
            ? `${item.institution}-${index}`
            : `${item.company}-${item.role}-${index}`;

        return (
          <Card
            key={itemKey}
            className={`flex flex-col p-6 bg-card rounded-lg ${className}`}
          >
            {renderItem ? (
              renderItem(item)
            ) : (
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Title and Organization */}
                <div className="flex flex-col">
                  {"role" in item ? (
                    <>
                      <h3 className="font-semibold text-lg">{item.role}</h3>
                      <p className="text-primary">{item.company}</p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-semibold text-lg">
                        {item.institution}
                      </h3>
                      <p className="text-card-foreground">{item.description}</p>
                    </>
                  )}
                </div>

                {/* Timeframe */}
                <div className="md:text-right whitespace-nowrap">
                  <h6 className="text-muted-foreground text-sm">
                    {item.timeframe}
                  </h6>
                </div>
              </div>
            )}

            {/* Achievements (work experience only) - with improved bullet point styling */}
            {"achievements" in item &&
              item.achievements.length > 0 &&
              !renderItem && (
                <div className="mt-4">
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={`${achievement.substring(0, 10)}-${i}`}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-3 mt-0.5">•</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </Card>
        );
      })}
    </div>
  );
};
