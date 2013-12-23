#!/bin/bash

# Five step search and replace with find, sed, and bash (tested on OS X, should work with Linux)

if [ -z "$1" ]; then
   echo -e "Usage: cd /path/to/your/theme && $0 <your_new_template_name>\n"
   echo "Example: '$0 megatharium' will find and replace instances of '_s' with 'megatharium' in your theme."
   echo -e "\nIt's assumed that your theme name contains only alphanumeric characters."
   echo -e "also this has to be done in a specific order. See the README.\n"
   exit 1
fi

rmbu() {
	# NOTE: I'm using "sed -i.bu" at an attempt to make this work easily on OS X and Linux...
	#       See this stack overflow thread: http://goo.gl/9zUWiA

	# Remove back up files
	find . -path "./.git*" -prune -o -name "*.bu" -type f -exec rm {} \;
}

# 1) Search for '_s' (inside single quotations) to capture the text domain:
find . -path "./.git*" -or -iname "*.png" -or -name "$0" -prune -o -type f -exec sed -i.bu 's/'"'"'_s'"'"'/'"'""$1""'"'/g' {} \;
rmbu

# 2) Search for _s_ to capture all the function names.  
find . -path "./.git*" -or -iname "*.png" -or -name "$0" -prune -o -type f -exec sed -i.bu 's/_s_/'"$1"'_/g' {} \;
rmbu


# 3) Search for  _s (with a space before it) to capture DocBlocks.
find . -path "./.git*" -or -iname "*.png" -or -name "$0" -prune -o -type f -exec sed -i.bu 's/ _s/ '"$1"'/g' {} \;
rmbu


# 4) Search for _s- to capture prefixed handles.
find . -path "./.git*" -or -iname "*.png" -or -name "$0" -prune -o -type f -exec sed -i.bu 's/_s-/'"$1"'-/g' {} \;
rmbu


# 5) Search for "Text Domain: _s" in style.css.
find . -path "./.git*" -prune -o -name style.css -exec sed -i.bu 's/Text Domain: _s/Text Domain: '"$1"'/g' {} \;
rmbu
