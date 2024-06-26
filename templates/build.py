from pathlib import Path
from jinja2 import Environment, FileSystemLoader, select_autoescape
import htmlmin

ignore = { "base.tpl.html", "base.es.tpl.html", "base.en.tpl.html" }
search_path = Path(__file__).parent
output_path = search_path.parent
env = Environment(loader=FileSystemLoader(search_path), autoescape=select_autoescape())

files = search_path.glob("**/*.html")
files = set([ p for p in files if p.name not in ignore ])
for file in files:

    relative_file = file.relative_to(search_path)
    output_file = output_path / relative_file

    template = env.get_template(str(relative_file).replace("\\", "/"))
    rendered = template.render()
    rendered = htmlmin.minify(rendered, remove_empty_space=True, remove_comments=True)
    
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, "w", encoding="utf-8") as handle:
        handle.write(rendered)