import io
import json
import os

from setuptools import find_packages, setup

HERE = os.path.dirname(__file__)


def _get_long_description():
    with open(os.path.join(HERE, "README.md"), encoding="utf8") as fi:
        return fi.read()


with open("package.json") as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")
github_url = package.get("homepage")

setup(
    name=package_name,
    version=package["version"],
    long_description=_get_long_description(),
    author="Tyler Baur",
    author_email="baur.tyler@protonmail.com",
    packages=find_packages(),
    # packages=[package_name],
    include_package_data=True,
    license=package["license"],
    description=package.get("description", package_name),
    project_urls={
        "Bug Reports": os.path.join(github_url, "issues"),
        "Source": github_url,
    },
    install_requires=["dash>=1.9.0"],
    classifiers=[
        "Framework :: Dash",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
    ],
    python_requires=">=3.6,  <4",
)
