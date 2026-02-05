CREATE TABLE `projects` (
	`project_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`project_name` text NOT NULL,
	`tags` text,
	`category` text DEFAULT 'uncategorized' NOT NULL,
	`status` text NOT NULL,
	`sticky_notes` text,
	`project_path` text NOT NULL
);
