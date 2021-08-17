import json
import os
import io
from setuptools import setup, find_packages

HERE = os.path.dirname(os.path.abspath(__file__))


def _get_long_description():
    with io.open(os.path.join(HERE, "README.md"), encoding="utf8") as f:
        return f.read()


with open("package.json") as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")
github_url = package.get("homepage")

setup(
    name=package_name,
    version=package["version"],
    description="A Query Builder Component for Plotly Dash",
    long_description=_get_long_description(),
    author="Tyler Baur",
    author_email="baur.tyler@protonmail.com",
    packages=[package_name],
    include_package_data=True,
    license=package["license"],
    description=package.get("description", package_name),
    project_urls={
        "Bug Reports": os.path.join(github_url, "issues"),
        "Source": github_url,
    },
    packages=find_packages(),
    install_requires=["dash>=1.9.0"],
    include_package_data=True,
    classifiers=[
        "Framework :: Dash",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
    ],
    python_requires=">=3.6,  <4",
)
