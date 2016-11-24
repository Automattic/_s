read -p "Theme name: " THEME_NAME
read -p "Theme handle: " THEME_HANDLE

find ./ -type f -name "*.php"  -exec sed -i "s/'_svbk'/'$THEME_HANDLE'/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/_svbk_/${THEME_HANDLE}_/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/ _svbk/ $THEME_HANDLE/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/_svbk-/$THEME_HANDLE-/g" {} \;
sed -i "s/Text Domain: _svbk/Text Domain: $THEME_HANDLE/g" sass/style.scss
sed -i "s/Theme Name: _svbk/Theme Name: $THEME_NAME/g" sass/style.scss

find ./ -type f -name "*.json"  -exec sed -i "s/_svbk/$THEME_HANDLE/g" {} \;
find ./ -type f -name "*.json"  -exec sed -i "s/Silverback Starter/Silverback $THEME_NAME/g" {} \;

npm install -g gulp
npm update
gulp compile-sass
composer install
