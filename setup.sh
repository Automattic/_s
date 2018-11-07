read -p "Theme name: " THEME_NAME
read -p "Theme handle: " THEME_HANDLE

# Upper case first svbk -> Svbk
THEME_HANDLE_UCF="$(tr '[:lower:]' '[:upper:]' <<< ${THEME_HANDLE:0:1})${THEME_HANDLE:1}"

find ./ -type f -name "*.php"  -exec sed -i "s/'_svbk'/'$THEME_HANDLE'/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/_svbk_/${THEME_HANDLE}_/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/ _svbk/ $THEME_HANDLE/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/_svbk-/$THEME_HANDLE-/g" {} \;
find ./ -type f -name "*.js"  -exec sed -i "s/_svbk/$THEME_HANDLE/g" {} \;

sed -i "s/Text Domain: _svbk/Text Domain: $THEME_HANDLE/g" ./style.css
sed -i "s/Theme Name: _svbk/Theme Name: $THEME_NAME/g" ./style.css

find ./ -type f -name "*.json"  -exec sed -i "s/_svbk/$THEME_HANDLE/g" {} \;
find ./ -type f -name "*.json"  -exec sed -i "s/Svbk\\\\/$THEME_HANDLE_UCF\\\\/g" {} \;
find ./ -type f -name "*.json"  -exec sed -i "s/Silverback Starter/Silverback $THEME_NAME/g" {} \;

mv languages/_svbk.pot languages/$THEME_HANDLE.pot

nvm use 8
npm install -g gulp
npm install
gulp build

git add .
git commit -m"$THEME_HANDLE theme config"
git remote set-url --push origin no-pushing

# Create Guten Block Compatibility
ln -s $PWD/dist/blocks.build.js $PWD/dist/js/blocks.build.js 
ln -s $PWD/blocks src 