from __future__ import print_function as _

import json
import os as _os
import sys as _sys

import dash as _dash

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

dev_mode = False
mode_suffix = "dev" if dev_mode else "min"
async_resources = ["material", "mui", "antd", "bootstrap", "basic"]
_shared = "shared." + mode_suffix

shared_resources = [mode_suffix, _shared]

_js_dist = []

_js_dist.extend(
    [
        {
            "relative_package_path": "async-{}.{}.js".format(
                async_resource, mode_suffix
            ),
            "external_url": (
                "https://unpkg.com/{0}@{2}" "/{1}/async-{3}.{4}.js"
            ).format(package_name, __name__, __version__, async_resource, mode_suffix),
            "namespace": package_name,
            "async": True,
        }
        for async_resource in async_resources
    ]
)

# TODO: Figure out if unpkg link works
_js_dist.extend(
    [
        {
            "relative_package_path": "async-{async_resource}.{mode_suffix}." + "js.map",
            "external_url": f"https://unpkg.com/{package_name}@{__version__}/"
            + f"{__name__}/async-{async_resource}.{mode_suffix}.js.map",
            "namespace": package_name,
            "dynamic": True,
        }
        for async_resource in async_resources
    ]
)

_js_dist.extend(
    [
        {
            "relative_package_path": f"dash_query_builder.{shared_resource}.js",
            "namespace": package_name,
        }
        for shared_resource in shared_resources
    ]
    + [
        {
            "relative_package_path": f"dash_query_builder.{shared_resource}.js.map",
            "namespace": package_name,
            "dynamic": True,
        }
        for shared_resource in shared_resources
    ]
)

_css_dist = []


for _component in __all__:
    setattr(locals()[_component], "_js_dist", _js_dist)
    setattr(locals()[_component], "_css_dist", _css_dist)
