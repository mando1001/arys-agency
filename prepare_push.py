import json
import os

files_to_push = [
    "app/page.tsx",
    "app/api/audit/route.ts",
    "app/globals.css",
    "app/layout.tsx",
    "app/impressum/page.tsx",
    "app/privacy/page.tsx",
    "app/terms/page.tsx",
    ".gitignore",
    ".env.example",
    "package.json",
    "public/favicon.svg"
]

base_path = "/Users/armandszlavik/arys"
output_data = []

for rel_path in files_to_push:
    full_path = os.path.join(base_path, rel_path)
    if os.path.exists(full_path):
        with open(full_path, "r") as f:
            content = f.read()
            output_data.append({
                "path": rel_path,
                "content": content
            })

with open(os.path.join(base_path, "files_for_push.json"), "w") as f:
    json.dump(output_data, f)
