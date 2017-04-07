#!/usr/bin/env bash

set -e

if [[ "false" != "$TRAVIS_PULL_REQUEST" ]]; then
	echo "Not deploying pull requests."
	exit
fi

if [[ "master" != "$TRAVIS_BRANCH" ]]; then
	echo "Not on the 'master' branch."
	exit
fi

rm -fr .git
rm -fr bin
rm -fr node_modules
rm -fr .gitignore
rm -fr .travis.yml
rm -fr package.json

git init
git config user.name $GIT_USER
git config user.email $GIT_EMAIL

touch .nojekyll

git add .
git commit --quiet -m "Deploy from travis"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
