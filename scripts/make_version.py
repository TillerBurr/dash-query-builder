import json
from pathlib import Path

_basepath = Path(__file__).parents[1]
_filepath = (_basepath / "package.json").resolve()
_version_file = _basepath / "dash_query_builder/__version__.py"
if _version_file.exists():
    _version_file.unlink()

with open(_filepath) as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")
_version = package["version"]

with _version_file.open("w") as f:
    f.write(f'__version__ = "{_version}"')
