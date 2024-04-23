from __future__ import print_function as _

import os as _os
import sys as _sys
import json
from pathlib import Path

import dash as _dash

# noinspection PyUnresolvedReferences
from ._imports_ import *  # noqa
from ._imports_ import __all__

if not hasattr(_dash, "__plotly_dash") and not hasattr(_dash, "development"):
    print(
        "Dash was not successfully imported. "
        "Make sure you don't have a file "
        'named \n"dash.py" in your current directory.',
        file=_sys.stderr,
    )
    _sys.exit(1)

_basepath = _os.path.dirname(__file__)
_filepath = _os.path.abspath(_os.path.join(_basepath, "package-info.json"))
with open(_filepath) as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")
__version__ = package["version"]

_current_path = _os.path.dirname(_os.path.abspath(__file__))

_this_module = _sys.modules[__name__]

all_js = [f.name for f in (Path(__file__).parent / "js").glob("*.js")]
all_dqb = [f.name for f in (Path(__file__).parent).glob("*.js")]
all_sourcemaps = [f.name for f in (Path(__file__).parent).glob("*.js.map")]
async_js = [f for f in all_js if f.startswith("async")]
sync_js = [f for f in all_js if not f.startswith("async")]
_js_dist = []

_js_dist.extend(
    [
        {"relative_package_path": f"js/{i}", "namespace": package_name, "async": True}
        for i in async_js
    ]
)
_js_dist.extend(
    [
        {
            "relative_package_path": f"js/{i}",
            "namespace": package_name,
        }
        for i in sync_js
    ]
)

_js_dist.extend(
    [{"relative_package_path": i, "namespace": package_name} for i in all_dqb]
)

_js_dist.extend(
    [
        {
            "relative_package_path": f"{i}.map",
            "namespace": package_name,
            "dymanic": True,
        }
        for i in all_sourcemaps
    ]
)
_css_dist = []

for _component in __all__:
    setattr(locals()[_component], "_js_dist", _js_dist)
    setattr(locals()[_component], "_css_dist", _css_dist)
