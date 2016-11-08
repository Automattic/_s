read -p "Theme name: " THEME_NAME
read -p "Theme handle: " THEME_HANDLE

find ./ -type f -name "*.php"  -exec sed -i "s/'_svbk'/'$THEME_HANDLE'/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/_svbk_/$THEME_HANDLE_/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/ _svbk/ $THEME_HANDLE/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/_svbk-/$THEME_HANDLE-/g" {} \;
sed -i "s/Text Domain: _svbk/Text Domain: $THEME_HANDLE/g" sass/style.scss 
sed -i "s/Theme Name: _svbk/Theme Name: $THEME_NAME/g" sass/style.scss 

npm update
gulp compile-sass