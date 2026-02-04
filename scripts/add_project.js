import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsPath = path.resolve(__dirname, "../src/data/projects.js");

try {
  console.log(`Reading projects from: ${projectsPath}`);
  let content = fs.readFileSync(projectsPath, "utf-8");

  // 1. Shift IDs + 1
  // Identify all "id: X," patterns and increment X
  // Use multiline flag and anchor to start of line to avoid matching "uuid:", "valid:", or content text
  content = content.replace(/^\s*id:\s*(\d+),/gm, (match, id) => {
    // Keep the original indentation and structure, just replace the number
    const prefix = match.substring(0, match.indexOf(id));
    const suffix = match.substring(match.indexOf(id) + id.length);
    return `${prefix}${parseInt(id) + 1}${suffix}`;
  });

  // 2. Define Template
  const newProjectTemplate = `  {
    id: 1,
    title: "New Project",
    description: "New project description...",
    image: "/image/placeholder.png",
    link: "https://github.com/yourusername/project",
    tags: ["Tag1", "Tag2"],
    content: \`
# New Project Title

**New Project** description.

## Key Features
- **Feature 1**: Description.
- **Feature 2**: Description.

## Technical Details
Built with...

![Screenshot](/image/placeholder.png)
    \`,
  },`;

  // 3. Insert Template
  const insertMarker = "export const selectedProjects = [";
  const insertIndex = content.indexOf(insertMarker);

  if (insertIndex === -1) {
    throw new Error(
      'Could not find "export const selectedProjects = [" in the file.',
    );
  }

  // Insert after the regex match or exact string
  const splitIndex = insertIndex + insertMarker.length;
  const before = content.slice(0, splitIndex);
  const after = content.slice(splitIndex);

  // Add a newline before the template if needed, but the template starts with indentation
  const newContent = `${before}\n${newProjectTemplate}${after}`;

  fs.writeFileSync(projectsPath, newContent, "utf-8");
  console.log(
    "Successfully added new project template and shifted existing IDs.",
  );
} catch (error) {
  console.error("Error updating projects:", error);
  process.exit(1);
}
