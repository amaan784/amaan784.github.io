#!/bin/bash
# Generate the production build
npm run build

# Deploy using gh-pages
npm run deploy

echo "Deployment to gh-pages completed!"
echo "Make sure deploy from gh-pages branch -> root is selected in github settings"
