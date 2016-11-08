read -p "Theme handle: " THEME_HANDLE

find ./ -type f -name "*.php"  -exec sed -i "s/_svbk/$THEME_HANDLE/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/_svbk_/$THEME_HANDLE_/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/ _svbk/ $THEME_HANDLE/g" {} \;
find ./ -type f -name "*.php"  -exec sed -i "s/_svbk-/$THEME_HANDLE-/g" {} \;
sed -i "s/Text Domain: _svbk/Text Domain: $THEME_HANDLE/g" style.css 