#!/bin/bash
# Generate the production build
npm run build

# Navigate to the build folder
cd build

# Initialize Git and push to master
git init
git remote add origin https://github.com/amaan784/amaan784.github.io/
git add .
git commit -m "Deploy production build to master branch"
git push -f origin master

echo "Deployment to master branch completed!"
echo "Make sure 'Deploy from master branch -> root' is selected in GitHub settings."


